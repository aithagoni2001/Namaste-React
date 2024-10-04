import Fooditems, { withPromotedlabel } from "./Fooditems";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "./UserContext";
import { useContext } from "react";


const Body = () => {
  const [restaurants, setRestaurants] = useState([]); // State to store the list of restaurants
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [searchText, setSearchText] = useState(""); // Text search state

  const RestaurantCardPromoted = withPromotedlabel(Fooditems);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurantsData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantsData) {
        setRestaurants(restaurantsData); // Store fetched data in restaurants state
        setFilteredData(restaurantsData); // Initialize filteredData with all restaurants
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const onlineStatus = useOnlinestatus();
  if (!onlineStatus) {
    return (
      <div>
        <h1>No internet connection 👾</h1>
        <h2>Please check your internet connectivity 📶</h2>
      </div>
    );
  }

  const { LoggedInUser, setUsername } = useContext(UserContext);

  // Conditional rendering: show Shimmer while loading
  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body mt-5">
      <div className="filter flex">
        {/* Search Input */}
        <div className="search m-2">
          <input
            className="border border-solid border-black p-1 w-500 h-8"
            type="text"
            placeholder="Search items"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // Update searchText state
          />
          <button
            className="search-btn px-4 py-1 bg-green-200 rounded mx-2"
            onClick={() => {
              const filteredRestaurants = restaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) // Filter by search text
              );
              setFilteredData(filteredRestaurants); // Update filtered data state
            }}
          >
            Search
          </button>
        </div>

        {/* Top-rated Filter */}
        <div className="search m-2 mx-10 items-center">
          <button
            className="Ratefilter-btn px-3 py-1 bg-red-300 rounded"
            onClick={() => {
              const topRatedRestaurants = restaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              ); // Filter by rating > 4.5
              setFilteredData(topRatedRestaurants); // Update filtered data state
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-2 ">
          <label>UserName: </label>
          
          <input  value ={LoggedInUser} 
            className="border border-black px-1"
            onChange={(e) => 
            setUsername(e.target.value)
            }
          />
        </div>
      </div>

      {/* Restaurants List */}
      <div className="res-container flex flex-wrap">
        {/* Loop through the filtered restaurants or all restaurants */}
        {filteredData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted Resdata={restaurant} />
            ) : (
              <Fooditems Resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

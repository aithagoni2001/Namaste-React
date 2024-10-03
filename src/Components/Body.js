import Fooditems, { withPromotedlabel } from "./Fooditems";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  const [Res, setRes] = useState([]); // State to store the list of restaurants
  const [Filtereddata, setFilteredData] = useState([]); // State for filtered data
  const [textsearch, setTextsearch] = useState(""); // Text search state

  const RestaurantCardPromoted = withPromotedlabel(Fooditems);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    setRes(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); // Store fetched data in Res
  };
  // Determine what data to display: filtered or original
  const restaurantsToDisplay = Filtereddata.length > 0 ? Filtereddata : Res;

  const onlinestatus = useOnlinestatus();
  if (onlinestatus === false) {
    return (
      <div>
        <h1>No internet connection👾</h1>
        <h2>please check internet connectivity📶</h2>
      </div>
    );
  }
  // Conditional rendering: show Shimmer while loading
  return Res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-5">
      <div className="filter flex">
        <div className="search m-2">
          <input
            className="border border-solid border-black p-1 w-500 h-8"
            type="text"
            placeholder="search items"
            value={textsearch}
            onChange={(e) => setTextsearch(e.target.value)} // Update text search state
          />
          <button
            className="search-btn px-4 py-1 bg-green-200 rounded mx-2"
            onClick={() => {
              const FilterRes = Res.filter(
                (item) =>
                  item.info.name
                    .toLowerCase()
                    .includes(textsearch.toLowerCase()) // Filter by search text
              );
              setFilteredData(FilterRes); // Update filtered data state
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 mx-10 items-center">
          <button
            className="Ratefilter-btn  px-3 py-1 bg-red-300 rounded"
            onClick={() => {
              const filteringdata = Res.filter(
                (items) => items.info.avgRating > 4.5
              ); // Filter by rating > 4.5
              setFilteredData(filteringdata); // Update filtered data state
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {/* Loop through the filtered restaurants (Filtereddata) or all restaurants (Res) */}
        {restaurantsToDisplay.map((reslist) => (
          <Link key={reslist.info.id} to={"/restaurants/" + reslist.info.id}>
            {reslist.info.isOpen ? (
              <RestaurantCardPromoted Resdata={reslist} />
            ) : (
              <Fooditems Resdata={reslist} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

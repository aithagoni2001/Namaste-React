import Fooditems from "./Fooditems";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [Res, setRes] = useState([]); // State to store the list of restaurants
  const [Filtereddata, setFilteredData] = useState([]); // State for filtered data
  const [textsearch, setTextsearch] = useState(""); // Text search state

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsondata = await data.json();
    setRes(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Store fetched data in Res
  };

  // Determine what data to display: filtered or original
  const restaurantsToDisplay = Filtereddata.length > 0 ? Filtereddata : Res;

  // Conditional rendering: show Shimmer while loading
  return Res.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
         <div className="search">
          <input
            type="text" placeholder="search items"value={textsearch}
            onChange={(e) => setTextsearch(e.target.value)} // Update text search state
          />
          <button
            className="search-btn"
            onClick={() => {
              const FilterRes = Res.filter((item) =>
                item.info.name.toLowerCase().includes(textsearch.toLowerCase()) // Filter by search text
              );
              setFilteredData(FilterRes); // Update filtered data state
            }}
          >
            Search
          </button>
        </div>
        <button
          className="Ratefilter-btn"
          onClick={() => {
            const filteringdata = Res.filter((items) => items.info.avgRating > 4.5); // Filter by rating > 4.5
            setFilteredData(filteringdata); // Update filtered data state
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {/* Loop through the filtered restaurants (Filtereddata) or all restaurants (Res) */}
        {restaurantsToDisplay.map((reslist) => (
          <Fooditems key={reslist.info.id} Resdata={reslist} />
        ))}
      </div>
    </div>
  );
};

export default Body;

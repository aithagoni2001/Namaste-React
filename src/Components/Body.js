import Fooditems from "./Fooditems";
import { Restaurants } from "../utils/Apidata";
import { useEffect, useState, useState } from "react";

const Body = () => {
  const [Res, setRes] = useState(Restaurants); // State to store the list of restaurants

  useEffect(() => {
    // console.log("useeffect is updated")
    fetchdata();
  }, []);
  // console.log("body is rendered first");

  const fetchdata = async()=>{
    const data =await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ")
    const jsondata = await data.json();
    setRes(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
 
    console.log(jsondata);
  
};

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtereddata = Res.filter((items) => {
              return items.info.avgRating > 4.5;
            });
            setRes(filtereddata); // Update the state with the filtered data
            // console.log(filtereddata);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {/* Loop through the filtered restaurants (Res) */}
        {Res.map((reslist) => (
          <Fooditems key={reslist.info.id} Resdata={reslist} />
        ))}
      </div>
    </div>
  );
};

export default Body;

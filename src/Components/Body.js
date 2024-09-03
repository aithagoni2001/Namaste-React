import Fooditems from "./Fooditems";
import { Restaurants } from "../utils/Apidata";
import { useState } from "react";

const Body = () => {
  const [Res, setRes] = useState(Restaurants); // State to store the list of restaurants

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
            console.log(filtereddata);
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

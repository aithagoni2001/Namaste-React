import {CDN_LINK} from "../utils/constants"

const Fooditems = (props) => {
    // console.log(props);
    const {Resdata} = props;
    console.log(Resdata);
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,areaName} = Resdata?.info;
    return (
      <div className="fooditems">
          <img
            className="image"
            src={ CDN_LINK + cloudinaryImageId}
            alt="loading"
          />
          <h2>{name}</h2>
          <p className="cuisine">{cuisines}</p>
          <h4>{costForTwo}</h4>
          <h4>{avgRating}</h4>
          <p>{areaName}</p>
      </div>
    );
  };

  export default Fooditems;
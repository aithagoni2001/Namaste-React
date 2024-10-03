import {CDN_LINK} from "../utils/constants"

const Fooditems = (props) => {
    // console.log(props);
    const {Resdata} = props;
    // console.log(Resdata);
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,areaName} = Resdata?.info;
    return (
      <div className="fooditems m-3 p-2 w-[200px] border border-solid border-black bg-gray-100 hover:bg-gray-300 " 
      >
          <img
            className="image w-[150px] h-[150px] p-2 mx-4 rounded-2xl  "
            src={ CDN_LINK + cloudinaryImageId}
            alt="loading"
          />
          <h2 className="font-bold py-2 text-lg">{name}</h2>
          <p className="cuisine">{cuisines.join(", ")}</p>
          <h4>{costForTwo}</h4>
          <h4>{avgRating}</h4>
          <p>{areaName}</p>
      </div>
    );
  };

  export const withPromotedlabel = (Fooditems)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-1 rounded-lg">isOpen</label>
          <Fooditems {...props}/>
        </div>
      )
    }
  }

  export default Fooditems;
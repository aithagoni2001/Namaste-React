import useRestaurants from "../utils/useRestaurants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurants = () => {
  const { resid } = useParams();
  // console.log(params);

 const resMenu = useRestaurants(resid);

  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, city } =
  resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
  resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  return (
    <div className="Res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      <h5>{city}</h5>
      <h3>Menu</h3>
      <div className="main-menu">
        <ul className="menu-list">
          {itemCards.map((item) => (
            <li className="item-list" key={item.card.info.id}>
              <div className="left">
                <h3>{item.card.info.name}</h3>
                <h5>{item.card.info.category}</h5>
                <p>{item.card.info.description}</p>
                {" Rs:"}
                {item.card.info.price / 100}
                <p>{`${item.card.info.ratings.aggregatedRating.rating} (${item.card.info.ratings.aggregatedRating.ratingCount})`}</p>
              </div>
              <img
                className="menu-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt="Not found"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Restaurants;

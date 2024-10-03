
import ItemList from "./ItemsList";

const RestaurantCategory = ({ data, showitems,setShowIndex }) => {
    
  const handleClick=()=>{
    setShowIndex();
  }

  return (
    <div>
      <div
        className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-2  rounded-lg "
        
      >
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-semibold text-lg" >
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>
          {showitems &&<ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

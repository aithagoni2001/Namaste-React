import { useState,useEffect } from "react";
import {MENU_URL} from "./constants"

const useRestaurants =(resid)=>{
    const [resMenu,setResMenu] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{ 
         const data = await fetch(MENU_URL + resid);
         const json = await data.json();
         console.log(json);
         
         setResMenu(json.data);
       
    }

return resMenu;
}

export default useRestaurants;
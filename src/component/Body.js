import { useState } from 'react';
import {restaurantList} from '../config';
import {RestrauntCard} from './RestaurantCard';


function filterData (searchText,restaurants){
    const filteredData = restaurants.filter((restaurant)=>
        restaurant.data.name.includes(searchText)
    )
    return filteredData;

}

export const Body = () =>{
    const [restaurants,setRestaurants] =useState(restaurantList)
    
    const [searchText,setsearchText] = useState();
    // const [searchClicked,setSearchClicked] = useState("false");
    return (
        <>
        <div className="search-container">
            <input type = "text" 
            className = "search-input" 
            placeholder="Search" 
            value = {searchText}
            onChange = {(e) => setsearchText(e.target.value)}/>

      
        <button className="search-btn" onClick={()=>{
            // need to filter the data
            const data = filterData(searchText,restaurants);
            setRestaurants(data);

            // if(searchClicked === "true"){
            //     setSearchClicked("false")
            // }else{
            //     setSearchClicked("true")

            // }
        }}>Search</button>
        
        </div>
        <div className='restaurant-list'>
            {
                restaurants.map(restaurant=>{
                    return <RestrauntCard {...restaurant.data} key ={restaurant.data.id}/>
                })
            }
            
        </div>
        </>
    )
}
import {IMG_CDN_URL} from '../config';
export const RestrauntCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
    // const {cloudinaryImageId,name, cuisines,lastMileTravelString} = restaurant.data
    return(
        <div className='card'>
            <img src= {IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
} 
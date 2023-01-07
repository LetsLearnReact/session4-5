import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import HeaderComponent from "./HeaderComponent";

/*

const Re = React.createElement('div', { id: 'title' }, 'Namaste React')
const Re1 = React.createElement('div', { id: 'hello' }, 'Namaste JS')
const Re2 = React.createElement('div', { id: 'hi' }, 'Namaste Node')
const Re3 = React.createElement('div', { id: 'bye' }, [
    Re, Re1, Re2
])
const Re4 = ReactDOM.createRoot(document.getElementById('root'))
Re4.render(Re3)



const heading1 = React.createElement(
    "h1",
    {id:"h1"},
    'This is Heading1'
)

const heading2 = React.createElement(
    "h2",
    {id:"h2"},
    'This is Heading2'
)

const heading3 = React.createElement(
    "h3",
    {id:"h3"},
    'This is Heading3'
)

const container = React.createElement(
    "div",
    {className:"title"},
    [
        React.createElement(
            "h1",
            {id:"h1"},
            'This is Heading1'
        ),React.createElement(
            "h2",
            {id:"h2"},
            'This is Heading2'
        ),React.createElement(
            "h3",
            {id:"h3"},
            'This is Heading3'
        )]
)

const x = ReactDOM.createRoot(document.getElementById('root'))
x.render(container);




const container = (
    <div className='title'>
        <h1 id = 'heading1'> Heading1</h1>
        <h2 id = 'heading2'> Heading2</h2>
        <h3 id = 'heading3'> Heading3</h3>
    </div>
)



const x = ReactDOM.createRoot(document.getElementById('root'))
x.render(container);

const ContainerComponent = () => {
    return (
        
        <div className='title'>
            {container}
            <h1 id = 'heading1'> Heading1</h1>
            <h2 id = 'heading2'> Heading2</h2>
            <h3 id = 'heading3'> Heading3</h3>

        </div>
        

    )
}
*/

const Title = () =>(
    <a href = "/">
        <img  className = "logo"
    src = "https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
    alt ="This is logo"
    />

    </a>
    
)


const HeaderComponent = () =>{
    return (
      
        <div className='header'>
           <Title/>
           
           <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

           </div>
          {/* <h1>FOOD VILLAS</h1> */}
            {/* <h2>Namaste React Functional Component</h2>
            <h2>This is h2 tag</h2> */}
        </div>
    )
}
// Dynamic Data
const restaurantList = [{
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "532213",
      "name": "Chilli'Z Restro",
      "uuid": "e04042c4-2ec3-40b6-bfda-b29a1d286722",
      "city": "22",
      "area": "Patel Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Snacks",
        
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 30,
      "slaString": "20-30 MINS",
      "lastMileTravel": 2.0999999046325684,
      "slugs": {
        "restaurant": "chilliz-restro-(patel-nagar)-patel-nagar-patel-nagar",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "75/4,arya tower,patel nagar,Dehradun 248001",
      "locality": "Patel Nagar",
      "parentId": 13645,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5669288~p=4~eid=00000185-8cd4-f363-12a8-70aa00310439",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "532213",
        "deliveryTime": 24,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 30,
        "lastMileTravel": 2.0999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "69769",
      "name": "Aman Vegetarian",
      "uuid": "59e8eaf8-223d-4f9e-8c2b-3276da666d65",
      "city": "22",
      "area": "Darshani Gate",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "ygczg6efdbjietl1req7",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 27500,
      "costForTwoString": "₹275 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "aman-vegetarian-paltan-bazar-near-railway-station-hathibarkala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "Darshini Gate, Jhanda Mohalla, Paltan Bazaar,near railway station Dehradun",
      "locality": "Clock Tower",
      "parentId": 13687,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "69769",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "69447",
      "name": "Gaylord Express",
      "uuid": "771ec1fa-dd65-4902-8c10-d168e4e39277",
      "city": "22",
      "area": "Clock Tower",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Bakery",
        "Italian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "gaylord-express-paltan-bazaar-chukkuwala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "9, Near Samsung Shop, Paltan Bazaar, Dehradun",
      "locality": "Clock Tower",
      "parentId": 13696,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "69447",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "88166",
      "name": "Nath'S Chinese",
      "uuid": "75a5bf3d-ecb9-4acc-8ed5-adb5a0629741",
      "city": "22",
      "area": "Saharanpur Chowk",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "fsm15mqsuninmtb6twec",
      "cuisines": [
        "Chinese",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "naths-chinese-race-course-race-course-dehradun",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "278, Lakhi Bagh, Dehradun",
      "locality": "Clock Tower",
      "parentId": 13608,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "88166",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "69500",
      "name": "Rajdhani Chicken Point",
      "uuid": "346aacf2-d830-4f5f-8cae-2dc714d6a640",
      "city": "22",
      "area": "Tehsil Chowk",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "jkkhgvwcjvpfheq8ftbv",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 27500,
      "costForTwoString": "₹275 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "rajdhani-chicken-point-race-course-chukkuwala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "Gandhi Road, Near Fire Station ,Race Course, Dehradun",
      "locality": "Clock Tower",
      "parentId": 13692,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "69500",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "644675",
      "name": "Smoke House Deli",
      "uuid": "5f622d7a-6e2d-4e8e-9494-6ef9f45973d0",
      "city": "22",
      "area": "Rabindra Nath Tagore Marg",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
      "cuisines": [
        "American",
        "Italian",
        "European"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 43,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 50,
      "slaString": "40-50 MINS",
      "lastMileTravel": 4.400000095367432,
      "slugs": {
        "restaurant": "smoke-house-deli-dehradun-nagar-nigam-chukkuwala",
        "city": "dehradun"
      },
      "cityState": "22",
      "address": "Unit no 31 and 32 Ground Floor, Centrio Mall108/84 Rabindra Nath Tagore Marg, Dehradun, Uttarakhand-248001",
      "locality": "Dehradun Nagar Nigam",
      "parentId": 874,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5698836~p=7~eid=00000185-8cd4-f363-12a8-70ab00310765",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "644675",
        "deliveryTime": 43,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 50,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 20,
      "new": true
    },
    "subtype": "basic"
  },]
//Hard coded Data 
const RestrauntCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
    // const {cloudinaryImageId,name, cuisines,lastMileTravelString} = restaurant.data
    return(
        <div className='card'>
            <img src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}   
const Body =() =>{
    return (
        <div className='restaurant-list'>
            {
                restaurantList.map(restaurant=>{
                    return <RestrauntCard {...restaurant.data} key ={restaurant.data.id}/>
                })
            }
            {/* <RestrauntCard {...restaurantList[0].data}/>
            
            <RestrauntCard {...restaurantList[1].data}/>
            <RestrauntCard {...restaurantList[2].data}/>
            <RestrauntCard {...restaurantList[3].data}/>
            <RestrauntCard {...restaurantList[4].data}/>
            <RestrauntCard {...restaurantList[5].data}/> */}
        </div>
    )
}

const Footer =() =>{
    return (
        <div>
            <h4>This is Footer </h4>
        </div>
    )
}
const styleobj = {
    backgroundColor:"yellow",
}

const AppLayout = ()=>{
    return (
        <>
            <HeaderComponent />
            <Body/>
            <Footer />
        </>
    )
}
// const jsx = <div style =  {styleobj}><h4>This is Body </h4><h4>This is Body </h4></div>

const x = ReactDOM.createRoot(document.getElementById('root'))
x.render(<AppLayout/>);







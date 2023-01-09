import React from 'react';
import '../Home/Home.css';
import Product from "../Product/Product";

// import { Alert } from '@coreui/react';



function Home() {
  return (
    <div className='home__container'>
        {/* <img ' 
        src={banner}/> */}
        {/* <div className='home__row'>
        <Product />
        <Product />
        </div> */}

        <div className='home__row'>
        <Product 
          id="123456"
        title="Ethiopia, king Minilik Classic T-Shirt T-Shirt"
          price={59}
          rating={5}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71PcHN2k7tL._AC_UL320_.jpg"
          
        />

        <Product 
          id="1234567"
        title="Citizen CZ Smart Touchscreen Smartwatch, Heartrate, GPS, Speaker, Bluetooth, Notifications, iPhone and Android Compatible, Powered by Google Wear OS"
          price={299}
          rating={4}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81D+6fMukSS._AC_SY741_.jpg"
        
        />
        </div>

       <div className='home__row'>
       <Product 
  id="1234569"
        title="Camera, DreamView T1 RGBIC Wi-Fi TV Backlights for 55-65 inch TVs PC, Works with Alexa & Google Assistant, App Control, Music Sync TV Lights, Adapter, H6199"
          price={89}
          rating={4}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/711PCEIjgkL._AC_SX679_.jpg"
       
        />

<Product 
id="123455"
        title="Olay Regenerist Micro-Sculpting Cream Face Moisturizer with Hyaluronic Acid & Niacinamide, Fragrance-Free, 1.7 oz"
          price={23}
          rating={4}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71S6nfaZPCL._AC_UL320_.jpg"
       
        />
        <Product 
id="1234568"
        title="All-new Echo Dot (5th Gen) Charcoal with Battery Base"
          price={62}
          rating={4}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71xoR4A6q-L._AC_SX679_.jpg"
        />
        </div>

        <div className='home__row'>
        <Product
        id="123454"
        title="ALDO Greenwald Crossbody Bag"
          price={204}
          rating={4}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61yAE8QdcTL._AC_UY218_.jpg"
        />

        <Product
        id="123455"
        title="Carolina Herrera Good Girl for Women Eau de Parfum Spray, 5.1 Oz"
          price={150}
          rating={4}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/5164BjQdUdL._AC_UL320_.jpg"
        />
      
      
   
      <Product
        id="123455"
        title="Carolina Herrera Good Girl for Women Eau de Parfum Spray, 5.1 Oz"
          price={150}
          rating={4}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51fw51u8CNL._AC_UL320_.jpg"
      
        />
          </div>
        </div>
  )
}

export default Home



// import React from 'react';
// import '../Home/Home.css';
// import banner from '../Home/images/home-banner.png';
// import Product from '../Product/Product';
// import {CCarousel, CCarouselItem,  } from '@coreui/react';

// function Home() {
//   return (
//     <div className='home__container'>
//         <img className='home__image' 
//          src={banner} />
//          {/* <div className='home__row'>
//         <Product />
//         <Product />
//         </div>  */}

//  {/* /////////////////////////////////////////// */}

//  <CCarousel controls >
//   <CCarouselItem>
//     <CImage className="d-block w-100 home__container"  src={banner} alt="slide 1" />
//   </CCarouselItem>
//   <CCarouselItem>
//     <CImage className="d-block w-100" src={""} alt="slide 2" />
//   </CCarouselItem>
//   <CCarouselItem>
//     <CImage className="d-block w-100" src={""} alt="slide 3" />
//   </CCarouselItem>
// </CCarousel> 

//         <div className='home__row'>
//         <Product 
//           id="123456"
//         title="Gexpusm Round Wood Coffee Table, Natural Wood Coffee Table, Round Solid Wood Center Large Circle Coffee Table for Living Room, 35.3x35.3x17.8in"
//           price={199}
//           rating={5}
//           image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/A1VBk4kbjWL._AC_SX679_.jpg"
//         />

//       <Product 
//           id="1234567"
//         title="FREE delivery Tue, Dec 27 on $25 of items shipped by Amazon
// Or fastest delivery Sat, Dec 24"
//           price={46}
//           rating={5}
//           image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71vn7fm3j4L._AC_UL320_.jpg"
//         />
//          </div>

//        <div className='home__row'>
//        <Product 
//   id="1234569"
//         title="Camera, DreamView T1 RGBIC Wi-Fi TV Backlights for 55-65 inch TVs PC, Works with Alexa & Google Assistant, App Control, Music Sync TV Lights, Adapter, H6199"
//           price={89}
//           rating={4}
//         image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/711PCEIjgkL._AC_SX679_.jpg"
//         />

// <Product 
// id="123455"
//         title="Olay Regenerist Micro-Sculpting Cream Face Moisturizer with Hyaluronic Acid & Niacinamide, Fragrance-Free, 1.7 oz"
//           price={23}
//           rating={4}
//         image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71S6nfaZPCL._AC_UL320_.jpg"
//         />
//         <Product 
// id="1234568"
//         title="All-new Echo Dot (5th Gen) Charcoal with Battery Base"
//           price={62}
//           rating={4}
//         image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71xoR4A6q-L._AC_SX679_.jpg"
//         />
//         </div>

//         <div className='home__row'>
//         <Product
//         id="123454"
//         title="ALDO Greenwald Crossbody Bag"
//           price={23}
//           rating={4}
//         image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71QUy9MnFNL._AC_UY675_.jpg"
//         />
        
// </div>
//  </div>
   
//  )
// }

// export default Home








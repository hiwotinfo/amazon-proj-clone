import React from 'react';
import '../Home/Home.css';
import Product from "../Product/Product";

// import { Alert } from '@coreui/react';



function Home() {
  return (
    <div className='home__container'>
        <div className='home__row'>
        <Product 
          id="123456"
          title="Ninedaily Women's Tops 3/4 Sleeve Blouses Dressy Casual Double Layers Mesh Tunic Shirts
"
          price={59}
          rating={5}
          image="https://m.media-amazon.com/images/I/81GPHhxlO8L._AC_SY679_.jpg"
          
        />

        <Product 
          id="1234567"
          title="Galaxy Gold GG 14k Yellow Gold 18" Necklace with Sapphires Cross  
          price={400}
          rating={5}
        image="https://m.media-amazon.com/images/I/61x0FjqGChL._AC_SY695_.jpg"
        />

        <Product
          id="123456"
          title="COOFANDY Men's Cotton Linen Henley Shirt Long Sleeve Hippie Casual Beach T Shirts"
          price={59}
          rating={5}
          image="https://m.media-amazon.com/images/I/615Cby-DciL._AC_SX569_.jpg"
        />
        <Product
          id="123456"
          title="FRIENDLY DIAMONDS 1 Carat - 5 Carat IGI Certified Lab Grown Diamond Ring | 14K Or 18K White, Yellow Or Rose Gold | Intricacy Three Stone Diamond Ring | FG-VS1-VS2 Quality"
          price={2000}
          rating={5}
          image="https://m.media-amazon.com/images/I/517T+sM8+5L._AC_SY675_.jpg"

        />
        </div>

       <div className='home__row'>      
        <Product
          id="123456"
          title="Fjallraven Raven 28 - Navy"
          price={119}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81h60ZjVaWL._AC_UL348_SR348,348_.jpg"

        />

        <Product
          id="1234567"
          title="Polo Ralph Lauren Mens Classic Fit Crews 3 Pack"
          price={45}
          rating={4}
          image="https://m.media-amazon.com/images/I/61ipDH0Q9AL._AC_SY679_.jpg"

        />

        <Product
          id="1234567"
          title="Columbia Men's Ascender Softshell Front-zip Jacket"
          price={77}
          rating={4}
          image="https://m.media-amazon.com/images/I/71l8NancxjL._AC_SY606_.jpg"

        />

        <Product
          id="1234567"
          title="Kenneth Cole Unlisted Men's Dress Shirt Slim Fit Checks and Stripes (Patterned)"
          price={25}
          rating={4}
          image="https://m.media-amazon.com/images/I/81oPYpVmowL._AC_SX679_.jpg"
        />

        <Product
          id="1234567"
          title="48MP Digital Cameras for Photography with Lens, Autofocus Vlogging Camera for YouTube,16X Zoom Anti-Shake Video Camera, 32GB TF Card & 2 Batteries，s100"
          price={25}
          rating={4}
          image="https://m.media-amazon.com/images/I/71RDxycPF-L._AC_SX569_.jpg"
        />
        </div>

        <div className='home__row'>
        <Product
        id="123454"
          title="PRETTYGARDEN Women's 2024 Floral Boho Dress Wrap Flowy Maxi Dresses"
          price={60}
          rating={4}
        image="https://m.media-amazon.com/images/I/71iiyTWa-GL._AC_SY679_.jpg"
        />

        <Product
        id="123455"
        title="Carolina Herrera Good Girl for Women Eau de Parfum Spray, 5.1 Oz"
          price={150}
          rating={4}
          image="https://m.media-amazon.com/images/I/61wLBqnPuPL._SX569_.jpg"
        />
      
      
   
      <Product
        id="123455"
          title="OLEVS Automatic Watches for Womens Luxury Gold and Silver Stainless Steel Thin Wrist Watch"
          price={150}
          rating={4}
          image="https://m.media-amazon.com/images/I/712AMdK+RUL._AC_SY695_.jpg"
      
        />

        <Product
          id="123455"
          title="Coach Womens Quilted Pillow Leather Tabby Wristlet With Chain
"
          price={250}
          rating={4}
          image="https://m.media-amazon.com/images/I/711mntMCjtL._AC_SY675_.jpg"

        />

        <Product
          id="123455"
          title="Naturalizer Women Brenta Strappy Platform Dress Sandals"
          price={75}
          rating={4}
          image="https://m.media-amazon.com/images/I/61KOfydhG4L._AC_SY675_.jpg"

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








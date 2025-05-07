import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 기본 스타일
import 'swiper/css/pagination'; // 필요한 경우
import 'swiper/css/navigation'; // 필요한 경우
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import dummy1 from './data/product1.json';
import dummy2 from './data/product2.json';
import dummy3 from './data/product3.json';
import img9 from './images/banner1.png';
import img10 from './images/banner2.png';
import img11 from './images/banner3.png';
import img12 from './images/banner4.png';

function Main() {
  return (
    <main>
      <article>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img src={img9} alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="Banner 3" /></SwiperSlide>
        <SwiperSlide><img src={img12} alt="Banner 4" /></SwiperSlide>
      </Swiper>
      </article>


      <article className='family'>
        <h3 className='family_title '>🍱간편하게 준비하는 가족 밥상 ＞</h3>
          <ul className='product_list'>
            {dummy1.products.map(product=>(<li key={product.id}>  <div className="img_wrap"><img src={`${process.env.PUBLIC_URL}/images/${product.filename}`} alt=""/>
            </div>
            <div>
              <p className='product_title2'>{product.title}</p>

              <p className='price'>{product.price}</p>
            </div>
              </li>))}
          </ul>
      </article>

      <article className='special family'>
        <h3 className='special_title family_title  '>🛒지금 가장 많이 담는 특가 ＞</h3>
          <ul className='product_list'>
            {dummy2.products.map(product=>(<li key={product.id}>  <div className="img_wrap"><img src={`${process.env.PUBLIC_URL}/images/${product.filename}`} alt=""/>
            </div>
            <div>
              <p className='product_title2'>{product.title}</p>

              <p className='price'>{product.price}</p>
            </div>
              </li>))}
          </ul>
      </article>

      <article className='special family'>
        <h3 className='special_title family_title  '>🎀가정의 달, 선물 베스트 셀러 ＞</h3>
          <ul className='product_list'>
            {dummy3.products.map(product=>(<li key={product.id}>  <div className="img_wrap"><img src={`${process.env.PUBLIC_URL}/images/${product.filename}`} alt=""/>
            </div>
            <div>
              <p className='product_title2'>{product.title}</p>

              <p className='price'>{product.price}</p>
            </div>
              </li>))}
          </ul>
      </article>
    </main>
  );
}

export default Main;

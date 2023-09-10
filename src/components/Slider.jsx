import { Swiper, SwiperSlide } from 'swiper/react';
function Slider() {
  return (
    <Swiper
     
      slidesPerView={1}
      spaceBetween={40}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwb88fa0ce/images/NewSale-Desk-Web-Banner-1920x825-1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw19c27893/images/Second-Scroll-2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw724f1225/images/2nd-Scroll-Fabrics-%20(1).JPG" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw955d424a/images/Second-Scroll.jpg" alt="" /></SwiperSlide>
      ...
    </Swiper>
  )
}


export default Slider
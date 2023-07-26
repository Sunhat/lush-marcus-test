import { Swiper, SwiperSlide } from 'swiper/react';
import {ProductMediaCarouselProps} from "@/components/Products/ProductMediaCarousel/ProductMediaCarousel.types";


export default function ProductMediaCarousel({media}: ProductMediaCarouselProps) {
    return <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
}

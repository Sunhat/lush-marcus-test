import { Swiper, SwiperSlide } from 'swiper/react';
import {MediaCarouselProps} from "@/components/Products/MediaCarousel/MediaCarousel/MediaCarousel.types";
import MediaCarouselItem from "@/components/Products/MediaCarousel/MediaCarouselItem/MediaCarouselItem";
import {memo} from "react";

import 'swiper/css';
import 'swiper/css/pagination';

function MediaCarousel({media}: MediaCarouselProps) {
    return <Swiper
        pagination={{
            enabled: true,
            type: 'bullets',
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {media.map((mediaItem) => <SwiperSlide key={mediaItem.id}><MediaCarouselItem item={mediaItem} /></SwiperSlide>)}
    </Swiper>
}

export default memo(MediaCarousel)

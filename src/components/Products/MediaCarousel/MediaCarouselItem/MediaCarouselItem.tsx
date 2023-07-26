import {ProductMedia} from "@/types/Products";
import {MediaCarouselItemProps} from "@/components/Products/MediaCarousel/MediaCarouselItem/MediaCarouselItem.types";
import {memo} from "react";

function UnsupportedItem() {
    return <div className="flex justify-center">
        <span>Media unavailable</span>
    </div>
}

export default function MediaCarouselItem({ item: {url, type, alt} }: MediaCarouselItemProps) {

    if (type !== "IMAGE") {
        return <UnsupportedItem />
    }

    return <img style={{aspectRatio: 3/2, objectFit: 'contain', width: '100%'}} alt={alt} src={url} />
}

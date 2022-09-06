import React from 'react';
import GlideGallery from 'components/carousel/GlideGallery';

const CarouselGallery = ({galleryItems}) => {


    return (
        <GlideGallery>
            <GlideGallery.LargeItems className="shadow rounded mb-4">
                {galleryItems.map((item, index) => (
                    <GlideGallery.Item key={`gallery.large.${index}`}>
                        <img alt="detail" src={item} className="responsive border-0 rounded w-100" height={300}/>
                    </GlideGallery.Item>
                ))}
            </GlideGallery.LargeItems>
            <GlideGallery.ThumbItems className="mb-3" arrowClassName="shadow" arrowVariant="foreground-alternate">
                {galleryItems.map((item, index) => (
                    <GlideGallery.Item key={`gallery.thumb.${index}`} className="m-0">
                        <img alt="thumb" src={item} className="responsive rounded-md img-fluid shadow m-0" style={{height:"40px", width:"40px"}} />
                    </GlideGallery.Item>
                ))}
            </GlideGallery.ThumbItems>
        </GlideGallery>
    );
};

export default CarouselGallery;

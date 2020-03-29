import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';

const items = [
  {
    src: './images/image_carousel-1-with-text.jpg',
    altText: 'boardBG',
    caption: 'caption'
  },
  {
    src: './images/image_carousel-2-with-text.jpg',
    altText: 'Fizzy',
    caption: 'Slide 2'
  },
  {
    src: './images/image_carousel-3-with-text.jpg',
    altText: 'pour',
    caption: 'Slide 3'
  },
  {
    src: './images/image_carousel-4-with-text.jpg',
    altText: 'mule',
    caption: 'Slide 3'
  }
];

const SliderView = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-image image-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={items.caption}/>
      </CarouselItem>
    );
  });

  return (
    <Container fluid className="slider">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </Container>
  );
}

export default SliderView;
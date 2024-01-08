import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 521 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1,
  },
};

export default function ProfileCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel
      containerClass="w-full h-[60rem] flex gap-2"
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
}

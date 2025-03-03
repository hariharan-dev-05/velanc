import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({
  images = [
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
    "https://placehold.co/1920x1080",
  ],
  autoSlide = false,
  duration = 5000,
  scroleWithoutButton = false,
  notShowNavigation = false,
  heightOfImg: h = "h-auto",
  widthOfImg: w = "w-full",
  options: {
    pageNavColor = "#fef3ec",
    pageNavActiveColor = "#fab12f",
    pageNavSize = 8,
    buttonColor = "#fef3ec",
    buttonArrowColor = "#282828",
    buttonSize = 20,
  } = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselParrentRef = useRef(null);
  const addImgIndex = useRef({
    atStart: images.length - 1,
    atEnd: 0,
  });

  const scroleForward = () => {
    if (carouselParrentRef.current) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      const { current: carousel } = carouselParrentRef;
      carousel.style.scrollbar = "none";
      const { atEnd } = addImgIndex.current;

      const newImgEnd = createImageElement(images[atEnd]);
      carousel.appendChild(newImgEnd);
      carousel.removeChild(carousel.firstChild);
      addImgIndex.current.atEnd = (atEnd + 1) % images.length;

      carousel.scrollBy({
        left: carousel.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scroleBackword = () => {
    if (carouselParrentRef.current) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      const { current: carousel } = carouselParrentRef;
      const { atStart } = addImgIndex.current;

      const newImgStart = createImageElement(images[atStart]);
      carousel.prepend(newImgStart);
      carousel.removeChild(carousel.lastChild);
      addImgIndex.current.atStart =
        (atStart - 1 + images.length) % images.length;

      carousel.scrollBy({
        left: -carousel.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const createImageElement = (src) => {
    const img = document.createElement("img");
    img.className = "shrink-0 snap-start object-cover h-auto w-full";
    img.src = src;
    return img;
  };

  useEffect(() => {
    let timeout;
    if (carouselParrentRef.current) {
      const { current: carousel } = carouselParrentRef;
      const { atStart } = addImgIndex.current;

      timeout = setTimeout(() => {
        const newImgStart = createImageElement(images[atStart]);
        addImgIndex.current.atStart =
          (atStart - 1 + images.length) % images.length;
        carousel.prepend(newImgStart);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      scroleForward();
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="w-full h-full relative">
        <div
          ref={carouselParrentRef}
          className={`overflow-x-auto flex snap-x snap-mandatory relative ${h} ${w}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              loading="lazy"
              className="shrink-0 snap-start object-cover h-auto w-full"
              alt="Carosel Image"
            />
          ))}
        </div>
        {!notShowNavigation && (
          <div className="flex gap-2 absolute bottom-2 left-1/2 transform -translate-x-1/2">
            {images.map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor:
                    i === currentIndex ? pageNavActiveColor : pageNavColor,
                  borderColor: pageNavColor,
                  height: pageNavSize,
                  width: pageNavSize,
                }}
                className={`rounded-full ${
                  i === currentIndex ? "border" : "scale-75"
                }`}
              />
            ))}
          </div>
        )}

        {scroleWithoutButton && (
          <>
            <div
              onClick={scroleForward}
              className="absolute w-1/2 h-full top-0 right-0 cursor-pointer"
            />
            <div
              onClick={scroleBackword}
              className="absolute w-1/2 h-full top-0 left-0 cursor-pointer"
            />
          </>
        )}
        {!scroleWithoutButton && (
          <>
            <button
              onClick={scroleForward}
              role="button"
              style={{ backgroundColor: buttonColor }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-md px-0 py-1"
            >
              <ChevronRight color={buttonArrowColor} size={buttonSize} />
            </button>
            <button
              onClick={scroleBackword}
              role="button"
              style={{ backgroundColor: buttonColor }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 rounded-md px-0 py-1"
            >
              <ChevronLeft color={buttonArrowColor} size={buttonSize} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;

const ChevronLeft = ({ size = 20, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4L7 12L15 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronRight = ({ size = 20, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4L17 12L9 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

ChevronRight.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  heightOfImg: PropTypes.string,
  widthOfImg: PropTypes.string,
  autoSlide: PropTypes.bool,
  duration: PropTypes.number,
  scroleWithoutButton: PropTypes.bool,
  notShowNavigation: PropTypes.bool,
  options: PropTypes.shape({
    pageNavColor: PropTypes.string,
    pageNavActiveColor: PropTypes.string,
    pageNavSize: PropTypes.number,
    buttonColor: PropTypes.string,
    buttonArrowColor: PropTypes.string,
    buttonSize: PropTypes.number,
  }),
};

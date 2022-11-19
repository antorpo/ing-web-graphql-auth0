import { useRef, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';

const LandingCarousel = () => {
  const [index, setIndex] = useState(0);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  const isIndex = (i: number) => index === i;

  const messages = [
    'Bienvenido a Appetite',
    'Disfruta de la mejor comida',
    'Encuentra tu restaurante favorito',
    'Reserva tu mesa desde la comodidad de tu casa',
  ];

  const prevIndex = () => {
    if (index === 0) setIndex(3);
    else setIndex(index - 1);
  };

  const nextIndex = () => {
    if (index === 3) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className="flex justify-center h-52">
      <div className="w-full relative">
        <CSSTransition in={isIndex(0)} nodeRef={img1} timeout={300} classNames="alert" unmountOnExit>
          <div ref={img1}>
            <Image
              priority={true}
              className="object-none w-full h-full"
              src="/carousel/carousel_1.png"
              alt="carousel item"
              layout="fill"
            />
          </div>
        </CSSTransition>
        <CSSTransition in={isIndex(1)} nodeRef={img2} timeout={300} classNames="alert" unmountOnExit>
          <div ref={img2}>
            <Image
              priority={true}
              className="object-none w-full h-full"
              src="/carousel/carousel_2.png"
              alt="carousel item"
              layout="fill"
            />
          </div>
        </CSSTransition>
        <CSSTransition in={isIndex(2)} nodeRef={img3} timeout={300} classNames="alert" unmountOnExit>
          <div ref={img3}>
            <Image
              priority={true}
              className="object-none w-full h-full"
              src="/carousel/carousel_3.png"
              alt="carousel item"
              layout="fill"
            />
          </div>
        </CSSTransition>
        <CSSTransition in={isIndex(3)} nodeRef={img4} timeout={300} classNames="alert" unmountOnExit>
          <div ref={img4}>
            <Image
              priority={true}
              className="object-none w-full h-full"
              src="/carousel/carousel_4.png"
              alt="carousel item"
              layout="fill"
            />
          </div>
        </CSSTransition>
        <div className="absolute flex h-full w-full">
          <div className="flex w-full items-center justify-between px-4">
            <button
              className="bg-white rounded-full p-1 bg-opacity-80 hover:bg-opacity-100 duration-75"
              onClick={() => prevIndex()}
            >
              <ChevronLeftIcon className="h-5 text-gray-700" />
            </button>
            <p className="text-white text-3xl font-bold bg-black bg-opacity-70 px-2 py-1">{messages[index]}</p>
            <button
              className="bg-white rounded-full p-1 bg-opacity-80 hover:bg-opacity-100 duration-75"
              onClick={() => nextIndex()}
            >
              <ChevronRightIcon className="h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;

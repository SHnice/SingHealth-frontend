import { Carousel } from 'flowbite-react';

export default function Slider() {
  return (
    <div className="h-[600px]">
      <Carousel>
        <img src="slider1.jpg" alt="slider1" />
        <img src="slider2.jpg" alt="slider2" />
        <img src="slider3.jpg" alt="slider3" />
        <img src="slider4.jpg" alt="slider4" />
        <img src="slider5.jpg" alt="slider5" />
      </Carousel>
    </div>
  );
}

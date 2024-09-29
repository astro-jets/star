"use client"
// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from "next/image";

// Your Next.js component
function Slider() {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // Set autoplay interval to 5 seconds
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            centerMode={false}
            centerSlidePercentage={100}
            showThumbs={false}
            className="relative overflow-hidden rounded-2xl h-[40vh] md:h-full" // Set initial height using Tailwind classes
        >

            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <Image height={1024} width={1024} className="w-full mx-auto  object-cover h-[40vh]  md:h-[70vh] md:max-h-full rounded-2xl" src='/images/mlw.jpg' alt="Image description" />
                    <p className='absolute bottom-0 z-10 left-0 flex p-1 bg-[#111111a2] h-14 w-full text-white'> Shammah Vocals to perform at Kamuzu satudium</p>
                </a>
            </div>

            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <Image height={3631} width={5447} className="w-full mx-auto  object-cover h-[40vh]  md:h-[70vh] md:max-h-full rounded-2xl" src='/images/gift.jpg' alt="Image description" />
                    <p className='absolute bottom-0 z-10 left-0 flex p-1 bg-[#111111a2] h-14 w-full text-white'> Gift Damson set to release a new album</p>
                </a>
            </div>
            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <Image height={1024} width={1024} className="w-full mx-auto  object-cover h-[40vh]  md:h-[70vh] md:max-h-full rounded-2xl" src='/images/Grad.jpg' alt="Image description" />
                    <p className='absolute bottom-0 z-10 left-0 flex p-1 bg-[#111111a2] h-14 w-full text-white'> Shammah Vocals to perform at Kamuzu satudium</p>
                </a>
            </div>




        </Carousel>
    );
}

export default Slider;

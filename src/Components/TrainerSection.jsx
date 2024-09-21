"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import {images} from '../lib/api'
import Image from "next/image";

const TrainerSection = () => {
    return (
        <div className="py-16 px-5 lg:px-20 flex flex-col-reverse md:flex-row-reverse lg:items-center justify-between gap-20">
            <div className="">
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper lg:w-[470px] md:w-[310px] w-full md:h-[230px] lg:h-80">

                    {
                        images.map(image => <SwiperSlide key={image.id}><Image className="md:w-[470px] w-full md:h-80 rounded-xl" src={image.image } width={400} height={400} alt="images" /></SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className="md:w-1/2 mt-7">
                <div className="border-l-2 border-[#EE6C0C] pl-6">
                    <h4 className="font-medium text-xl">Our Strongest Team</h4>
                    <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Meet Expert Trainers</h2>
                </div>
                <div className="pt-6 pl-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in fermentum dolor. Cras convallis, tellus ac tempor lobortis, enim ex rhoncus purus, a bibendum ligula diam nec dolor. Nam tempus erat nunc, et ullamcorper nisl finibus non.</p>
                    <br />
                    <p>Cras ullamcorper erat nisl, et pretium ante sodales id. Praesent a nibh eget diam pellentesque venenatis non eget diam. Nam in massa metus. Donec porta, ligula non feugiat vulputate, odio leo condimentum sapien, et rhoncus tellus est nec odio.</p>
                    <Link href='/trainers' className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> MORE Trainers</Link>
                </div>
            </div>
        </div>
    );
};

export default TrainerSection;
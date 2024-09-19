import Image from "next/image";
import { LiaDumbbellSolid, LiaHeartbeatSolid, LiaStopwatchSolid, LiaUserNinjaSolid } from "react-icons/lia";

const Features = () => {
    return (
        <div className="bg-[url('/bg.jpg')] md:pt-10 lg:pt-0 mt-20 h-[850px] lg:h-screen flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20">
            <div className="lg:w-1/2">
                <div className="border-l-2 border-[#EE6C0C] pl-6">
                    <h4 className="font-medium text-xl">Awsome Features</h4>
                    <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Why Choose Us</h2>
                </div>
                <div className="flex flex-col md:flex-row pt-6 justify-between items-center">
                    <div className="flex gap-4">
                        <LiaDumbbellSolid className="text-6xl hover:text-[#EE6C0C]" />
                        <div>
                            <h3 className="text-xl font-black">Pro Equipment</h3>
                            <p className="md:w-[223px] pt-2">Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 pt-6 md:pt-0">
                        <LiaUserNinjaSolid className="text-6xl hover:text-[#EE6C0C]" />
                        <div>
                            <h3 className="text-xl font-black">Ninja Coach</h3>
                            <p className="md:w-[223px] pt-2">Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row pt-6 justify-between items-center">
                    <div className="flex gap-4">
                        <LiaHeartbeatSolid className="text-6xl hover:text-[#EE6C0C]" />
                        <div>
                            <h3 className="text-xl font-black">Cardio First</h3>
                            <p className="md:w-[223px] pt-2">Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 pt-6 md:pt-0">
                        <LiaStopwatchSolid className="text-6xl hover:text-[#EE6C0C]" />
                        <div>
                            <h3 className="text-xl font-black">Flexible Time</h3>
                            <p className="md:w-[223px] pt-2">Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:h-screen items-center relative text-center justify-center flex-col">
                <h1 className=" uppercase md:text-7xl mb-16 md:mb-36 lg:mb-0 text-6xl leading-[50px] lg:leading-[70px] font-extrabold"><span className="text-[#EE6C0C]">work out</span> <br /> right now</h1>
                <div className="absolute bottom-0">
                    <Image className=" h-[300px] md:h-[500px] w-[150px] md:w-full" src={'/features.png'} width={300} height={250} alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Features;
import { LiaKissWinkHeart, LiaMedalSolid, LiaUsersSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";

const History = () => {
    return (
        <div className="relative">
            <div className="absolute bg-opacity-60 bg-[url('/client.jpg')] bg-fixed inset-0"></div>
            <div className="relative bg-cover h-screen bg-no-repeat grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center flex flex-col items-center justify-center">
                    <SlCalender className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">586</h1>
                    <h6 className="font-bold mt-2">Working Days</h6>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <LiaUsersSolid className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">2,036</h1>
                    <h6 className="font-bold mt-2">Happy Clients</h6>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <LiaMedalSolid className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">874</h1>
                    <h6 className="font-bold mt-2">Successful Stories</h6>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <LiaKissWinkHeart className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">1,625</h1>
                    <h6 className="font-bold mt-2">Perfect Bodies</h6>
                </div>
            </div>
        </div>
    );
};

export default History;
import { SlCalender } from "react-icons/sl";

const History = () => {
    return (
        <div className="bg-[url('/client.jpg')] h-screen bg-cover bg-no-repeat">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-center">
                <div className="text-center flex flex-col items-center justify-center">
                    <SlCalender className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">586</h1>
                    <h6 className="font-bold mt-2">Working Days</h6>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <SlCalender className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">586</h1>
                    <h6 className="font-bold mt-2">Working Days</h6>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <SlCalender className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">586</h1>
                    <h6 className="font-bold mt-2">Working Days</h6>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <SlCalender className=" text-6xl text-[#EE6C0C]" />
                    <h1 className="text-5xl mt-3 font-bold font-sans">586</h1>
                    <h6 className="font-bold mt-2">Working Days</h6>
                </div>
            </div>
        </div>
    );
};

export default History;
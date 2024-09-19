import Image from "next/image";

const Process = () => {
    return (
        <div className="py-24 px-5 lg:px-20">
            <div className="border-l-2 border-[#EE6C0C] pl-6">
                <h4 className="font-medium text-xl">Awsome Process</h4>
                <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Our Process</h2>
            </div>
            <div className="grid pt-3 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-7">
                <div className="flex items-center justify-center flex-col">
                    <div className="bg-[#EE6C0C] border-[8px] hover:border-4 hover:p-3 border-[#8c3e07] rounded-full w-36 h-36 flex items-center justify-center">
                        <Image src={'/icon1.png'} width={55} height={50} alt="icon" />
                    </div>
                    <h3 className="pt-3 text-2xl hover:text-[#EE6C0C] font-semibold">Analyse your Goal</h3>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="bg-[#EE6C0C] border-[8px] hover:border-4 hover:p-3 border-[#8c3e07] rounded-full w-36 h-36 flex items-center justify-center">
                        <Image src={'/icon2.png'} width={60} height={50} alt="icon" />
                    </div>
                    <h3 className="pt-3 text-2xl hover:text-[#EE6C0C] font-semibold">Work Hard on it</h3>
                </div>
                <div className="flex text-center lg:mt-5 items-center justify-center flex-col">
                    <div className="bg-[#EE6C0C] border-[8px] hover:border-4 hover:p-3 border-[#8c3e07] rounded-full w-36 h-36 flex items-center justify-center">
                        <Image src={'/icon3.png'} width={80} height={50} alt="icon" />
                    </div>
                    <h3 className="pt-3 text-2xl hover:text-[#EE6C0C]  font-semibold">Improve your Performance</h3>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <div className="bg-[#EE6C0C] border-[8px] hover:border-4 hover:p-3 border-[#8c3e07] rounded-full w-36 h-36 flex items-center justify-center">
                        <Image  src={'/icon4.png'} width={50} height={50} alt="icon" />
                    </div>
                    <h3 className="pt-3 text-2xl hover:text-[#EE6C0C] font-semibold">Achieve your Destiny</h3>
                </div>
            </div>
        </div>
    );
};

export default Process;
import Image from "next/image";

const GetInTouch = () => {
    return (
        <div className="flex bg-[url('/course.webp')] bg-cover bg-no-repeat flex-col gap-8 px-5 md:px-20 md:flex-row justify-between items-center">
            <div className="w-1/2 hidden lg:block">
                <Image src={'/getInTouch.png'} className="h-full w-full" width={300} height={400} alt="" />
            </div>
            <div className="lg:w-1/2 w-full py-10">
                <h1 className="text-3xl pb-10 font-bold uppercase">Get In touch</h1>
                <form action="">
                    <div className="border-b pt-4">
                        <input placeholder="NAME" type="text" name="name" className=" bg-transparent w-full text-white border-none  border-white" id="" />

                    </div>
                    <div className="border-b pt-3 mt-4">
                        <input placeholder="EMAIL" type="email" name="email" className="bg-transparent w-full text-white border-none  border-white" id="" />
                    </div>
                    <div className="border-b pt-3 mt-5">
                        <input placeholder="MESSAGE" type="text" name="name" className="bg-transparent w-full text-white border-none  border-white" id="" />
                    </div>
                    <button className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> send message</button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;
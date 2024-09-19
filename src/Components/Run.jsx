import Image from "next/image";
import Link from "next/link";

const Run = () => {
    return (
        <div className="bg-black mx-5 lg:mx-20 rounded-xl p-5 md:p-10 mt-16 gap-9 flex flex-col md:flex-row items-center justify-between">
            <div className="">
                <h1 className="lg:text-3xl text-2xl font-extrabold pb-2">Run an Extra <br />
                    Mile Easily</h1>
                <p className="lg:w-[473px] md:w-[303px]">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.</p>
                <Link href='/courses' className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> Read MORE</Link>
            </div>
            <div>
                <Image src={'/run.jpg'} className="rounded-2xl" width={400} height={350} alt="run" />
            </div>
        </div>
    );
};

export default Run;
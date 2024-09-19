import Image from "next/image";
import { topCources } from "@/lib/api";
import Link from "next/link";

const OurCourses = () => {
    return (
        <div className="pt-16 px-5 lg:px-20">
            <div className="border-l-2 border-[#EE6C0C] pl-6">
                <h4 className="font-medium text-xl">Pro Selected</h4>
                <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Our Courses</h2>
            </div>
            <div className="pt-7 grid grid-cols-1  md:grid-cols-3 gap-8">
                {
                    topCources?.map(course => <div key={course.name} className="text-center pt-2">
                        <div className="flex items-center justify-center">
                            <Image className="rounded-full" src={course.image} width={230} height={230} alt={course.name} />
                        </div>
                        <h1 className="mt-5 mb-2 text-xl uppercase font-bold text-[#EE6C0C]">{course.name}</h1>
                        <p>{course.description}</p>
                    </div>)
                }
            </div>
            <div className="flex items-center justify-center">
                <Link href='/courses' className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white"> MORE COURSES</Link>
            </div>
        </div>
    );
};

export default OurCourses;
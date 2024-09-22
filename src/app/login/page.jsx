import Footer from "@/Components/Footer";
import Navber from "@/Components/Navber";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="bg-[url('/bg.jpg')] relative md:h-[800px] h-[900px] text-white bg-cover bg-no-repeat">
            <Navber />
            <div className="flex flex-col gap-8 pr-5 lg:pr-20 md:flex-row justify-between items-center">
                <div className="w-1/2 md:hidden lg:block">
                    <Image src={'/login.webp'} className="opacity-70 w-[500px]" width={300} height={40} alt="" />
                    <Image src='/register.png' className="absolute md:hidden lg:block top-0 left-0 bottom-3 w-[680px]" width={400} height={400} alt="" />
                </div>
                <div className="lg:w-1/2 text-center p-5 w-full py-10">
                    <h1 className="text-4xl text-[#EE6C0C] pb-10 font-bold uppercase">Continue with your fitness</h1>
                    <form className="">
                        <div className="border-b pt-4">
                            <input placeholder="NAME" type="text" name="name" className=" bg-transparent w-full text-white border-none  border-white" />

                        </div>
                        <div className="border-b pt-3 mt-4">
                            <input placeholder="EMAIL" type="email" name="email" className="bg-transparent w-full text-white border-none  border-white" />
                        </div>
                        <div className="border-b pt-3 mt-5">
                            <input placeholder="PASSWORD" type="password" name="password" className="bg-transparent w-full text-white border-none  border-white" />
                        </div>
                        <button className="btn w-full rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> Enroll now</button>
                    </form>
                    <div className="flex mb-2 items-center justify-between gap-2">
                        <button className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase w-1/2"> <span className="hidden md:block">Enroll with Google</span> <span className="lg:hidden text-3xl md:text-2xl"><FaGoogle /></span></button>
                        <button className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase w-1/2">  <span className="hidden md:block">Enroll with github</span> <span className="lg:hidden text-3xl"><FaGithub /></span></button>
                    </div>
                    <Link href='/register' className="">Dont have an account? <span className="text-[#EE6C0C] underline">Create One</span> </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
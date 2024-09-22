import Footer from "@/Components/Footer";
import Navber from "@/Components/Navber";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <div className="bg-[url('/bg.jpg')] h-screen text-white bg-cover bg-no-repeat">
            <Navber />
            <div className="flex flex-col gap-8 pr-5 lg:pr-20 md:flex-row justify-between items-center">
                <div className="w-1/2">
                    <Image src={'/login.webp'} className=" w-[500px]" width={300} height={40} alt="" />
                </div>
                <div className="lg:w-1/2 w-full py-10">
                    <h1 className="text-3xl text-[#EE6C0C] pb-10 font-bold uppercase">Enroll to fitness</h1>
                    <form action="">
                        <div className="border-b pt-4">
                            <input placeholder="NAME" type="text" name="name" className=" bg-transparent w-full text-white border-none  border-white" />

                        </div>
                        <div className="border-b pt-3 mt-4">
                            <input placeholder="EMAIL" type="email" name="email" className="bg-transparent w-full text-white border-none  border-white" />
                        </div>
                        <div className="border-b pt-3 mt-5">
                            <input placeholder="PASSWORD" type="password" name="password" className="bg-transparent w-full text-white border-none  border-white" />
                        </div>
                        <button className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white uppercase"> Enroll now</button>
                    </form>
                    <Link href='/register'>Dont have an account? Create One </Link>
                </div>
            </div>
            <Footer  />
        </div>
    );
};

export default Login;
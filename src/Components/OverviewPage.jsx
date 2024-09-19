import Link from "next/link";

const OverviewPage = () => {
    return (
        <div className="pt-16 px-5 lg:px-20 flex flex-col md:flex-row lg:items-center justify-between gap-20">
            <div className="md:w-1/2 ">
                <div className="border-l-2 border-[#EE6C0C] pl-6">
                    <h4 className="font-medium text-xl">Overview Intro</h4>
                    <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Our Story</h2>
                </div>
                <div className="ml-6 pt-6">
                    <video className="rounded-xl hover:rounded-3xl" src="/fitness.mp4" controls></video>
                </div>
            </div>
            <div className="md:w-1/2">
                <div className="border-l-2 border-[#EE6C0C] pl-6">
                    <h4 className="font-medium text-xl">About <span className="text-[#EE6C0C]">GYM</span> FIT</h4>
                    <h2 className="font-bold uppercase text-[#EE6C0C] text-3xl">Who We Are</h2>
                </div>
                <div className="pt-6 pl-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in fermentum dolor. Cras convallis, tellus ac tempor lobortis, enim ex rhoncus purus, a bibendum ligula diam nec dolor. Nam tempus erat nunc, et ullamcorper nisl finibus non.</p>
                    <br />
                    <p>Cras ullamcorper erat nisl, et pretium ante sodales id. Praesent a nibh eget diam pellentesque venenatis non eget diam. Nam in massa metus. Donec porta, ligula non feugiat vulputate, odio leo condimentum sapien, et rhoncus tellus est nec odio.</p>
                    <Link href='/about' className="btn rounded-3xl mt-6 px-10 hover:bg-[#252322] bg-[#EE6C0C] border-none text-white">READ MORE</Link>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
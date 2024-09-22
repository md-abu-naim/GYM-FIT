import Banner from "@/Components/Banner";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import GetInTouch from "@/Components/GetInTouch";
import History from "@/Components/History";
import Navber from "@/Components/Navber";
import OurCourses from "@/Components/OurCourses";
import OverviewPage from "@/Components/OverviewPage";
import Process from "@/Components/Process";
import Run from "@/Components/Run";
import TrainerSection from "@/Components/TrainerSection";
import Videos from "@/Components/Videos";

export default function Home() {
  return (
    <div className="bg-[#252322] text-white font-[family-name:var(--font-geist-sans)]">
      
      {/* header */}
      <header className="bg-[url('/bg.jpg')] font-serif bg-no-repeat bg-cover lg:px-20">
        <Navber />
        <Banner />
      </header>

      {/* main */}
      <main className="font-serif">
        <OverviewPage />
        <OurCourses />
        <Run />
        <Features />
        <Process />
        <Videos />
        <TrainerSection />
        <History />
        <GetInTouch />
      </main>

      {/* footer */}
      <footer className="font-serif">
        <Footer />
      </footer>
    </div>
  );
}

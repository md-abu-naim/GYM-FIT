import Banner from "@/Components/Banner";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
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
      <header className="bg-[url('/bg.jpg')] pt-10 font-serif bg-no-repeat bg-cover lg:px-20">
        <Navber />
        <Banner />
      </header>
      <main className="font-serif">
        <OverviewPage />
        <OurCourses />
        <Run />
        <Features />
        <Process />
        <Videos />
        <TrainerSection />
      </main>
      <footer className="font-serif">
        <Footer />
      </footer>
    </div>
  );
}

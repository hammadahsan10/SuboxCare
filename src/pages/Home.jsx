import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "./Banner";
import Intro from "./Intro";
import Testimonials from "./Testimonials";
import Steps from "./Steps";
import Featured from "./Featured";
import Partners from "./Partners";

const HomePage = () => {

    return (
        <>
            <div className="absolute top-[5%] left-[12%] w-3/4 z-10 " >
                <Navbar />
            </div>
            <Banner />
            <Intro />
            <Testimonials />
            <Steps />
            <Featured />
            <Partners />
            <Footer />
        </>
    )
}

export default HomePage;

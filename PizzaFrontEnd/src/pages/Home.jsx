import Footer from "../components/Footer";
import Cover from "../components/Cover";
import Navbar from "../components/Navbar";
import Pizza from "../components/Pizza";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div>
          <Cover />
        </div>
        <div>
          <Pizza />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

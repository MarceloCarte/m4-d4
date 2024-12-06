import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RegisterPage from "../components/RegisterPage";

function Register() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <RegisterPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;

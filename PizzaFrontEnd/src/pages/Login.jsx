import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginPage from "../components/LoginPage";

function Login() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <LoginPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;

import { Link } from "react-router-dom";
import ErrorAnimation from "/public/images/lottieanimation/errorpage1.json";
import Lottie from "lottie-react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Erronpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ffff]">
      <Lottie style={{ height: 350 }} animationData={ErrorAnimation} />
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-500 font-bold mb-4">
        We are sorry, but the page you were looking for could not be found.
      </p>

      <Link
        to="/"
        className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-2 rounded mx-auto"
      >
        <span> Go back to home </span> <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default Erronpage;

import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl text-black dark:text-gray-400">
        Sorry, the page you are looking for doesn't exist 😓
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="flex cursor-pointer items-center justify-center gap-6 text-2xl text-gray-400"
      >
        <BsArrowLeft className="text-2xl" />
        Back
      </button>
    </div>
  );
}

export default PageNotFound;

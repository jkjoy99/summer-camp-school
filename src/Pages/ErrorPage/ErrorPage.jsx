import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="w-full h-[700px]"
        src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18756.jpg?w=740&t=st=1686841212~exp=1686841812~hmac=07aa1566bc9fc0e3b111acb9234895f11833eaac307ee5406ee7f9c604591449"
        alt=""
      />
      <Link to="/">
        <button className="btn bg-purple-600 text-white font-bold absolute z-10 right-[645px] top-[510px] px-10">
          BAck to Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

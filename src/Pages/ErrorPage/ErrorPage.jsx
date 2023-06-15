import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="w-full h-[700px]"
        src="https://cdn.dribbble.com/users/2764945/screenshots/5521737/media/7d847cbfa9b3c04087b06df3b67ed58f.gif"
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

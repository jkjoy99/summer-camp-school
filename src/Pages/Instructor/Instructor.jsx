import { useLoaderData } from "react-router-dom";
import Single from "./Single";
import { Helmet } from "react-helmet-async";


const Instructor = () => {
  const instructor = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Music School | Instructor</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
        {instructor.map((singleInstructor) => (
          <Single
            key={singleInstructor._id}
            singleInstructor={singleInstructor}
          ></Single>
        ))}
      </div>
    </>
  );
};

export default Instructor;

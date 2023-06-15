import { useLoaderData } from "react-router-dom";
import SinglesClasses from "./SinglesClasses";
import { Helmet } from "react-helmet-async";


const Classes = () => {
  const classes = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Music Instrument | Classes</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
        {classes.map((singleClass) => (
          <SinglesClasses
            key={singleClass._id}
            singleClass={singleClass}
          ></SinglesClasses>
        ))}
      </div>
    </>
  );
};

export default Classes;

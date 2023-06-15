import { useEffect, useState } from "react";
import SingleInstructor from "./SingleInstructor";

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
   <>
    <h1 className="text-5xl font-bold text-center text-purple-700 drop-shadow-2xl">
    *Popular Instructor*
  </h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
      {instructor.map((allInstructor) => (
        <SingleInstructor
          key={allInstructor._id}
          allInstructor={allInstructor}
        ></SingleInstructor>
      ))}
    </div>
   </>
  );
};

export default PopularInstructor;

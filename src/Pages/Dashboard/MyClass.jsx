import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://summer-camp-school-server-jkjoy99.vercel.app/classes/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [url]);

  return (
    <div>
       <Helmet>
        <title>Music Instrument | My-Class</title>
      </Helmet>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((classe,index) =>  (
                <tr key={classe._id}>
                  <td>{index+1}</td>
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classe.classImage} alt="" />
                      </div>
                    </div>
                  </th>
                  <td>{classe.className}</td>
                  <td>{classe.instructorName}</td>
                  <td>{classe.instructorEmail}</td>
                  <td>{classe.availableSeat}</td>
                  <td>${classe.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;

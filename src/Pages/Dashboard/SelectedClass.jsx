
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState([]);

 
  useEffect(() => {
    fetch(`http://localhost:5000/selected?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setSelected(data))
  }, [user])

  return (
    <div>
     <Helmet>
        <title>Music Instrument | Selected-Classes</title>
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
                <th>Your email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {selected?.map((select,index) =>  (
                <tr key={select._id}>
                  <td>{index+1}</td>
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={select.classImage} alt="" />
                      </div>
                    </div>
                  </th>
                  <td>{select.className}</td>
                  <td>{select.instructorName}</td>
                  <td>{select.email}</td>
                  <td>{select.availableSeat}</td>
                  <td>${select.price}</td>
                  <td>
                  
                  <Link to={`/dashboard/payment/${select._id}`}><button className="badge badge-outline text-center  btn-outline btn-secondary">Enrolled</button></Link>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedClass;



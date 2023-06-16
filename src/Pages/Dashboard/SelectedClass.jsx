
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SInglesSelected from "./SInglesSelected";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState([]);

 
  useEffect(() => {
    fetch(`https://summer-camp-school-server-jkjoy99.vercel.app/selected?email=${user?.email}`)
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
              {
                selected.map((select,index)=> <SInglesSelected
                key={select._id}
                select={select}
                index={index}
                setSelected={setSelected}
                selected={selected}

                ></SInglesSelected>)
              }
                
                
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedClass;



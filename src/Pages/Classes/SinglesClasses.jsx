import { useContext } from "react";

import { Link, json } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import Swal from "sweetalert2";

const SinglesClasses = ({ singleClass }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {
    instructorName,
    price,
    classImage,
    className,
    availableSeat,
    enrolledStudentsCount,
  } = singleClass;

  const { user } = useContext(AuthContext);
  const handleSelect = (item) => {
   if(user.email && user){
    const Selected = { 
      instructorName,
      price,
      email:user?.email,
      classImage,
      className,
      availableSeat,
      enrolledStudentsCount }
      fetch("https://summer-camp-school-server-jkjoy99.vercel.app/selected",{
        method:"POST",
        headers :{
          'content-type':'application/json'
        },
        body:JSON.stringify(Selected)
      })
      .then(res => res.json())
      .then(data=> {
        // console.log(data);
        Swal.fire({
          position: 'center-center',
          icon: 'success',
          title: 'Class has been Select',
          showConfirmButton: false,
          timer: 1500
      })
      })
   }
   else{
    Swal.fire({
      position: 'center-center',
      icon: 'error',
      title: 'plz login then parses',
      showConfirmButton: false,
      timer: 1500
  })
   }
  }

  return (
    <div>
      <div>
        <div className="card w-96 h-[500px] shadow-xl ">
          <figure>
            <img src={classImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Name: {instructorName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-2xl">className: {className}</p>
            <p>Price: ${price}</p>
            <p>AvailableSeats: {availableSeat}</p>
            <p>EnrollStudent: {enrolledStudentsCount}</p>
            <div className="card-actions justify-end">


              {isAdmin?.admin ? (

                <button className="badge badge-outline" disabled >Select</button>

              ) : isInstructor?.instructor ? (
                <button className="badge badge-outline" disabled >Select</button>
              ) : (
                <button onClick={() => handleSelect(singleClass)} className="badge badge-outline  btn-outline btn-secondary">Select</button>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglesClasses;

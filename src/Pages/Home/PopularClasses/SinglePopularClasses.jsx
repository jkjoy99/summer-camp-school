import { useContext } from "react";

import './SinglePopularClass.css'
import { AuthContext } from "../../../Providers/AuthProvider";

const SinglePopularClasses = ({ singlePopularClass }) => {
  const {
    instructorName,
    price,
    classImage,
    availableSeat,
    className,
    enrolledStudentsCount,
  } = singlePopularClass;

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="card w-96 h-[500px] shadow-xl ">
          <figure>
            <img  src={classImage} alt="Shoes" className="h-[300px]" />
          </figure>
          <div className="card-body calor">
            <h2 className="card-title">
            instructor Name: {instructorName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>className: {className}</p>
            <p>Price: ${price}</p>
            <p>AvailableSeats: {availableSeat}</p>
            <p>EnrollStudent: {enrolledStudentsCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularClasses;

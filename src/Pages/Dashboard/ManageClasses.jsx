import { useLoaderData } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const classes = useLoaderData();
  const [feedback, setFeedback] = useState("");
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApprovedBtn = (id) => {

    fetch(
      `http://localhost:5000/classes?id=${id}&status=approved`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // refetch();
          alert("approve");
        }
      });
  };

  const handleDeny = (classId) => {
    setSelectedClassId(classId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFeedback("");
    setSelectedClassId(null);
  };

  const handleFeedbackSubmit = async () => {
    try {
      await axiosSecure.post(`/classes/${selectedClassId}/deny`, {
        feedback,
      });
      alert("feedback");
      setFeedback("");
      setIsModalOpen(false);
      setSelectedClassId(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Music Instrument | Manage-Classes</title>
        </Helmet>
        <div className="w-full">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Class Image</th>
                  <th>Class name</th>
                  <th>Instructor name</th>
                  <th>Instructor email</th>
                  <th>Available seats</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classes) => (
                  <tr key={classes._id}>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classes.classImage} alt="" />
                        </div>
                      </div>
                    </th>
                    <td>{classes.className}</td>
                    <td>{classes.instructorName}</td>
                    <td>{classes.instructorEmail}</td>
                    <td>{classes.availableSeat}</td>
                    <td>${classes.price}</td>
                    <td>
                      {
                        <button
                          onClick={() => handleApprovedBtn(classes._id)}
                          className="btn btn-xm btn-ghost text-white bg-purple-600 hover:bg-purple-700 btn-shadow border-0 rounded-none"
                        >
                          Approve
                        </button>
                      }
                      {
                        <button
                          onClick={() => handleDeny(classes._id)}
                          className="btn btn-xm btn-ghost text-white bg-purple-600 hover:bg-purple-700 btn-shadow border-0 rounded-none mx-2"
                        >
                          deny
                        </button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Feedback Modal"
      >
        <label>Write Feedback:</label>
       
        <textarea className="textarea textarea-primary" placeholder="Bio"
         type="text"
         value={feedback}
         onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button onClick={handleFeedbackSubmit}>Feedback</button>
        <button onClick={handleModalClose}>Cancel</button>
      </Modal>
    </>
  );
};

export default ManageClasses;

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AddClasses = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;

    const className = form.className.value;
    const classImage = form.classImage.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const availableSeat = form.availableSeat.value;
    const price = form.price.value;

    const addClass = {
      className,
      classImage,
      instructorEmail,
      availableSeat,
      price,
      instructorName,
    };

    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added");
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddClass}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Class name</span>
          </label>
          <input
            type="text"
            name="className"
            placeholder="Class name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Class Image</span>
          </label>
          <input
            type="text"
            name="classImage"
            placeholder="Class Image"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Instructor name</span>
          </label>
          <input
            type="text"
            name="instructorName"
            placeholder="Instructor name"
            defaultValue={user?.displayName}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Instructor email </span>
          </label>
          <input
            type="text"
            name="instructorEmail"
            placeholder="Instructor email "
            defaultValue={user?.email}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Available seats</span>
          </label>
          <input
            type="text"
            name="availableSeat"
            placeholder="Available seats"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text-alt">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-success"
            value="Add a Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClasses;

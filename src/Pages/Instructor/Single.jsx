const Single = ({ singleInstructor }) => {
  const { name, photo, email } = singleInstructor;

  return (
    <div>
      <div className="card w-96 h-[410px] bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Name: {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;

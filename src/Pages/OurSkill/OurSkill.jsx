import ProgressBar from "@ramonak/react-progress-bar";
import './OurSkill.css'

const OurSkill = () => {
  return (
    <div data-aos="zoom-in">
      <h2 className="text-5xl font-bold text-purple-700 text-center pb-20 drop-shadow-2xl uppercase">
        Our Student instructor Skills
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 calor pb-24">
        <div>
          <h2 className="text-2xl font-semibold pb-4">
            We choose a different type of express Student...{" "}
          </h2>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div>
          <h2 className="text-2xl drop-shadow-2xl font-semibold pb-4">
            Our Result Area
          </h2>
          <p className="pb-4">
            <h2 className="pb-3">Guitar</h2>
            <ProgressBar completed={90} />
          </p>
          <p className="pb-4">
            <h2 className="pb-3">Drum set</h2>
            <ProgressBar completed={86} />
          </p>
          <p>
            <h2 className="pb-3">Piano</h2>
            <ProgressBar completed={80} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSkill;

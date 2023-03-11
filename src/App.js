import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Myprofile from "./Profile/profile";
//import biopic from "./Profile/bio.png";

const App = () => {
  const handleName = (name) => alert(name);
  return (
    <>
      <Myprofile
        version="16"
        fullname="Mohamed Laaribi"
        bio="Mohamed is a junior developer with a passion for coding and problem-solving. He recently studiying at GoMyCode coding bootcamp and has a little experience working with HTML, CSS, JavaScript, and React. Mohamed is eager to learn more about web development and is excited to contribute to new projects. In his free time, he enjoys traveling to many destinations, and hitting the gym for a good workout"
        profesion="Web Developer"
        handleName={handleName}
        
      />
    </>
  );
};

export default App;

import PropTypes from "prop-types";

const Myprofile = (props) => {
  Myprofile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.any,
    profesion: PropTypes.string,
  };

  return (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>{props.fullname}</h1>
      <h2 style={{ color: "red", fontSize: 45 }}>
        Short biography :
        <p style={{ color: "black", fontSize: 30, textAlign: "justify" }}>
          {props.bio}
        </p>
      </h2>
      <h2 style={{ color: "red", fontSize: 45 }}>
        My profesion : <h3 style={{ color: "black" }}>{props.profesion}</h3>
      </h2>
      <button onClick={() => props.handleName(`${props.fullname}`)}>
        ClickMe
      </button>
      <h1 style={{ color: "grey" }}>
        React {`${props.version}`} Documentation
      </h1>
    </>
  );
};
export default Myprofile;

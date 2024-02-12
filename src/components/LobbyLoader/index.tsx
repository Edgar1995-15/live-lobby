import "./styles.css";
import logo from "../../assets/loader/logo.png";

function LoaderVegas() {

  return (
    <div className={`loading-container`}>
      <div className="circle-container">
        <span className="chunks"></span>
        <span className="chunks2"></span>
        <span className="insideCutter"></span>
        <span className="border-bold"></span>
        <span className="shadow-example"></span>
      </div>
      <img src={logo} alt="Live Vegas" className="logo-live" />
    </div>
  );
}

export default LoaderVegas;

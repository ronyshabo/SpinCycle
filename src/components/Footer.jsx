import "./Footer.css";
import logo from "../assets/Washateria-new-Logo.png";

// Test for Rony
const Footer = () => {
  return (
    <>
      <hr style={{ width: "90vw" }} />
      <div className="footer">
        <img src={logo} alt="" style={{ height: "120px" }} />
        <p>© 2024 Spincycle Coin Laundry Services. All rights reserved.</p>
        <div>
          <a href="mailto:SpinCycleaustintx@gmail.com">
            SpinCycleaustintx@gmail.com
          </a>
          <p className="round1">(512)380-0218</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

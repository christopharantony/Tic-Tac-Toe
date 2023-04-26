import React, { useState } from "react";
import "./landing.css";
import BgAnimation from "./Components/BgAnimation/BgAnimation";
import FormModal from "./Components/FormModal/FormModal";

const Landing = () => {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(true);

  const handleClose = () => setModal(false);
  const handleSignupModal = () => {
    setModal((prev) => !prev);
    setLogin(false);
  };
  const handleLoginModal = () => {
    setModal((prev) => !prev);
    setLogin(true);
  };
  return (
    <BgAnimation>
      <div className="landing">
        <button className="btn login" onClick={handleLoginModal}>
          Login
        </button>
        <button className="btn signup" onClick={handleSignupModal}>
          Signup
        </button>
      </div>
      {modal && <FormModal login={login} handleClose={handleClose} />}
    </BgAnimation>
  );
};

export default Landing;

import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const handleRefresh = (event) => {
      if (event.ctrlKey && event.keyCode === 82) {
        event.preventDefault(); // Prevent the default refresh behavior
        setModal(false);
      }
    };

    window.addEventListener("keydown", handleRefresh);

    return () => {
      window.removeEventListener("keydown", handleRefresh);
    };
  }, []);
  return (
    <BgAnimation>
      <div className="landing">
        {!modal && (
          <>
            <button className="btn login" onClick={handleLoginModal}>
              Login
            </button>
            <button className="btn signup" onClick={handleSignupModal}>
              Signup
            </button>
          </>
        )}
      </div>
      {modal && <FormModal login={login} handleClose={handleClose} />}
    </BgAnimation>
  );
};

export default Landing;

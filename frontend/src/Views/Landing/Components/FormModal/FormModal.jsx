import React, { useEffect, useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./formmodal.css";

const FormModal = ({ handleClose, login }) => {
  const [submitPos, setSubmitPos] = useState({ top: 0, right: "27%" });
  const SbmtContainer = document.querySelector(".Submit-Container");
  const SbmtBtn = document.querySelector(".Submit-Box");

  const SbmtContainerRect = SbmtContainer?.getBoundingClientRect();
  const SbmtBtnReact = SbmtBtn?.getBoundingClientRect();

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required!"),
      password: Yup.string()
        .min(4, "Minimum 4 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  const isNotValid = () =>
    Boolean(
      formik.values.username === "" ||
        formik.values.email ||
        Object.keys(formik.errors).length
    );

  const handleSumitHover = () => {
    if (isNotValid()) {
      const i =
        Math.floor(
          Math.random() * (SbmtContainerRect?.width - SbmtBtnReact?.width)
        ) + 1;
      const j =
        Math.floor(
          Math.random() * (SbmtContainerRect?.height - SbmtBtnReact?.height)
        ) + 1;

      setSubmitPos({ right: `${i}px`, top: `${j}px` });
    } else setSubmitPos({ top: 0, right: "27%" });
  };

  useEffect(() => {
    if (!isNotValid()) setSubmitPos({ top: 0, right: "27%" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  const dropIn = {
    hidden: {
      x: login ? "-150vh" : "200vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CloseRoundedIcon className="closeIcon" onClick={handleClose} />
        <h1 contentEditable="true" className="Form-Heading">
          {login ? "Login" : "Signup"}
        </h1>
        <form
          className="form"
          onSubmit={formik.handleSubmit}
          autocomplete="off"
        >
          <div className="inputBox">
            <input
              type="text"
              required="required"
              name="username"
              onChange={formik.handleChange}
            />
            <span>User Name</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              name="password"
              onChange={formik.handleChange}
            />
            <span>Password</span>
          </div>
          <div className="Submit-Container">
            <div
              className="Submit-Box"
              style={submitPos}
              onMouseOver={handleSumitHover}
            >
              {formik?.values && (
                <button
                  className="Submit-button"
                  onMouseOver={handleSumitHover}
                  type="submit"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default FormModal;

// <form className="form" onSubmit={formik.handleSubmit}>
//   <TextField
//     id="email"
//     label="Email"
//     type="email"
//     name="email"
//     autoComplete="email"
//     margin="normal"
//     variant="outlined"
//     onChange={formik.handleChange}
//     error={Boolean(formik?.touched?.email && formik?.errors?.email)}
//     helperText={formik?.touched?.email && formik?.errors?.email}
//   />
//   <TextField
//     id="password"
//     label="Password"
//     type="password"
//     name="password"
//     autoComplete="current-password"
//     margin="normal"
//     variant="outlined"
//     onChange={formik.handleChange}
//     error={Boolean(
//       formik?.touched?.password && formik?.errors?.password
//     )}
//     helperText={formik?.touched?.password && formik?.errors?.password}
//   />
//   {/*  link to register page */}
//   <Link onClick={() => navigate("/register")}>
//     Don't have an account?
//   </Link>
//   <br />
//   <Button variant="contained" color="primary" type="submit">
//     Login
//   </Button>
// </form>

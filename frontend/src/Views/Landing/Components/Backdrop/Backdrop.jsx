import { motion } from "framer-motion";
import "./backdrop.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <div>
      <motion.div
        className="Backdrop-Auth"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Backdrop;

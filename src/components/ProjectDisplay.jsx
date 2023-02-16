import { useState } from "react";
import { motion } from "framer-motion";

function ProjectDisplay(props) {
  // using use state to check whether the projectList is displayed or not
  const [active, setActive] = useState([
    { id: 1, status: false },
    { id: 2, status: false },
    { id: 3, status: false },
    { id: 4, status: false },
  ]);

  // framer animation
  const imageScale = {
    visible: { scale: 1.2 },
    hidden: { scale: 1 },
  };
  const item = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: "15rem",
    },
  };
  const bgOverlap = {
    visible: { display: "block", opacity: 0.5 },
    hidden: { opacity: 0, transitionEnd: { display: "none" } },
  };
  return props.projectList.map((list) => {
    return (
      <div
        key={list.id}
        className="project h-20rem border border-black rounded-lg"
      >
        <motion.div
          className={`project-container project-${list.id} bg-center`}
          initial="hidden"
          animate={active[list.id - 1].status ? "visible" : ""}
          whileHover={window.screen.width <= 768 ? "" : "visible"}
          onTap={
            window.screen.width > 768
              ? ""
              : () => {
                  setActive((prev) => {
                    return prev.map((activeList) => {
                      if (list.id === activeList.id) {
                        activeList.status = !activeList.status;
                      }
                      return activeList;
                    });
                  });
                }
          }
          transition={{ duration: 0.4 }}
          variants={imageScale}
        >
          <motion.div
            className="absolute top-0 bottom-0 bg-black w-full h-full z-0"
            variants={bgOverlap}
          ></motion.div>
          <motion.div
            className="project-content text-white w-60 m-auto md:w-962 z-10"
            variants={item}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-xl md:text-3xl font-gugi mb-3">{list.title}</h1>
            <p className="text-base md:text-xl font-itim">{list.description}</p>
          </motion.div>
        </motion.div>
      </div>
    );
  });
}

export default ProjectDisplay;

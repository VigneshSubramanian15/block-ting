import Image from "next/image";
import { motion } from "framer-motion";

function What() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="what-section">
      <div className="container">
        <div className="row">
          <h1 className="home-title">What we Do</h1>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="col-lg-6"
          >
            <Image
              src={"/home/chart.png"}
              alt="chart"
              height={388}
              width={571}
            />
          </motion.div>
          <div className="col-lg-6">
            <p>
              {`Disruptive marketing involves using experimental tactics that
              challenge the status quo. Rather than following conventional
              marketing wisdom, disruptive marketers test daring, new tactics
              that haven't been tried before. Some work while others fall flat.
              And that's ok, that's how innovation works.`}
            </p>

            <motion.div
              className="container row"
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              <div className=" col-xl-6 col-6">
                <motion.div variants={item} className="card card-one last ">
                  <span>
                    <span className="bold-number">20</span>
                    <span>Projects </span>
                  </span>
                  <span className="project-mobile">
                    <span>Completed </span>
                    <Image
                      src={"/icons/hand.png"}
                      alt="coffee"
                      height={33}
                      width={33}
                    />
                  </span>
                </motion.div>

                <motion.div variants={item} className="card card-two">
                  <strong>
                    450% <span>Average ROI</span>
                  </strong>
                </motion.div>
              </div>

              <div className=" col-xl-6 col-6">
                <motion.div variants={item} className="card card-two">
                  <strong>
                    93% <span>Client Retension</span>
                  </strong>
                </motion.div>
                <motion.div variants={item} className="card card-one last">
                  <strong className="coffee-mobile">
                    2000{" "}
                    <Image
                      src={"/icons/coffee.png"}
                      alt="coffee"
                      height={33}
                      width={33}
                    />
                  </strong>{" "}
                  <span>Cups Of Coffee</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default What;

import Image from "next/image";
import { motion } from "framer-motion";

function What() {
  return (
    <section className="what-section">
      <div className="container">
        <div className="row">
          <h1 className="home-title">What we Do</h1>
          <div className="col-lg-6">
            <Image
              src={"/home/chart.png"}
              alt="chart"
              height={388}
              width={571}
            />
          </div>
          <div className="col-lg-6">
            <p>
              {`Disruptive marketing involves using experimental tactics that
              challenge the status quo. Rather than following conventional
              marketing wisdom, disruptive marketers test daring, new tactics
              that haven't been tried before. Some work while others fall flat.
              And that's ok, that's how innovation works.`}
            </p>

            <motion.div className="row">
              <div className="col-lg-6">
                <motion.div className="card card-one position-relative bg-img">
                  <strong>
                    20 <span>Projects Completed </span>
                  </strong>
                </motion.div>

                <motion.div className="card card-two">
                  <strong>
                    450% <span>Average ROI</span>
                  </strong>
                </motion.div>
              </div>

              <div className="col-lg-6">
                <motion.div className="card card-two">
                  <strong>
                    93% <span>Client Retension</span>
                  </strong>
                </motion.div>
                <motion.div className="card card-one last">
                  <strong>
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

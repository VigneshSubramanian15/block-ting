import { motion } from "framer-motion";

const blogContent = [
  {
    id: 1,
    image: "/assets/blog/1.png",
    title: "ll About NFTs in DeFi",
    date: "1 Jan 2022",
    btnContent: "Read More",
  },
  {
    id: 2,
    image: "/assets/blog/2.png",
    title: "ll About NFTs in DeFi",
    date: "1 Jan 2022",
    btnContent: "Read More",
  },
  {
    id: 3,
    image: "/assets/blog/3.png",
    title: "ll About NFTs in DeFi",
    date: "1 Jan 2022",
    btnContent: "Read More",
  },
  {
    id: 4,
    image: "/assets/blog/3.png",
    title: "ll About NFTs in DeFi",
    date: "1 Jan 2022",
    btnContent: "Read More",
  },
  {
    id: 5,
    image: "/assets/blog/2.png",
    title: "ll About NFTs in DeFi",
    date: "1 Jan 2022",
    btnContent: "Read More",
  },
  {
    id: 6,
    image: "/assets/blog/1.png",
    title: "ll About NFTs in DeFi",
    date: "1 Jan 2022",
    btnContent: "Read More",
  },
];

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
function Blogs() {
  return (
    <div className="container blog-section">
      <div className="row">
        <h1 className="home-title">Blogs</h1>
        <div className="col-xl-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="card-wrapper"
          >
            {blogContent?.map(({ id, image, title, date, btnContent }, i) => (
              <motion.div
                variants={item}
                layoutId={i}
                key={id}
                className={`card card-${id}`}
              >
                <div className="card-body">
                  <div className="card-content">
                    <div className="img-radius">
                      <img src={image} alt={title} />
                    </div>
                    <div className="blog-content">
                      <h1>{title}</h1>
                      <p>{date}</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="button">{btnContent}</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

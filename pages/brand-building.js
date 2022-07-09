import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";

function Service() {
  const content = {
    title: "Brand Building",
    content: `  Content marketing includes things like educational articles,
        e-books, videos, entertainment, and webinars that answer
        specific questions people have and provide them with
        something they can&apos;t get elsewhere.`,
  };
  return (
    <div className="service">
      <Header page={"brand"} />
      <div className="hero-section brand">
        <ServiceHero content={content} />
      </div>
      <Features />
    </div>
  );
}

export default Service;

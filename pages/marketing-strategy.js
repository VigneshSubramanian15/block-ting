import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";
import ImageSection from "../src/components/services/ImageSection";
import { pageColor } from "../src/constant";

function Service() {
  const content = {
    title: "Marketing Strategy",
    content: `  Content marketing includes things like educational articles,
            e-books, videos, entertainment, and webinars that answer
            specific questions people have and provide them with
            something they can&apos;t get elsewhere.`,
  };
  const color = pageColor.marketingStrategyPage;
  return (
    <div className="service">
      <Header page={"marketing-strategy"} />
      <div className="hero-section marketing-strategy">
        <ServiceHero
          content={content}
          page="marketing-strategy"
          image={"/assets/service/marketing.svg"}
        />
      </div>
      <Features color={color} />
      <ImageSection color={color} />
    </div>
  );
}

export default Service;

import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";
import ImageSection from "../src/components/services/ImageSection";

function Service() {
  const content = {
    title: "Product Growth",
    content: `  Content marketing includes things like educational articles,
            e-books, videos, entertainment, and webinars that answer
            specific questions people have and provide them with
            something they can&apos;t get elsewhere.`,
  };
  return (
    <div className="service">
      <Header page={"product-growth"} />
      <div className="hero-section product-growth">
        <ServiceHero
          content={content}
          page="product-growth"
          image="/assets/service/product.svg"
        />
      </div>
      <Features />
      <ImageSection />
    </div>
  );
}

export default Service;

function BannerAdvisory() {
  return (
    <div>
      <div className="row position-relative">
        <div className="col-xl-6" style={{ zIndex: 222 }}>
          <p>
            BlockTing advisory board has been formed to offer a comprehensive
            support to our clients. With experts joining our board, we have the
            capability to provide critical advice, consultation, and suggestions
            to turn your project into the next crypto unicorn.
          </p>

          <button type="button" className="cta-btn">
            Free Consultation
          </button>
        </div>
        <div className="col-xl-6">
          <div className="advisory-banner">
            <img src="/advisory/advisory-banner.png" alt="advisory-banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAdvisory;

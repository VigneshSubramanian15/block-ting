function ListTalk() {
  const list = [
    {
      id: 1,
      description:
        "Connect with a wider player base through key opinion leaders on YouTube, Twitch, and Twitter with 15+ bespoke GameFi Influencer packages.",
    },
    {
      id: 2,
      description:
        "Take GameFi marketing to the next level by publishing in top Media - BeInCrypto, Bitcoin.com, Coingape and many more to maximize community reach",
    },
    {
      id: 3,
      description:
        "Grow player engagement through our exciting \n" +
        "performance marketing activities and advanced\n" +
        " ad placement methods.",
    },
  ];
  return (
    <div className="row position-relative">
      <div className="col-xl-8">
        <ul>
          {list?.map(({ id, description }) => (
            <li
              className="position-relative list my-4"
              style={{ fontWeight: 300, fontSize: "21px" }}
              key={id}
            >
              {description}
              <div className="bullet-icon">
                <img src={"/icons/bullet.png"} alt="bullet-icon" />
              </div>
            </li>
          ))}
        </ul>

        <button type="button" className="cta-btn">
          CTA
        </button>
      </div>
      <div className="col-xl-4">
        <img
          className="lets-banner"
          src="/lets-talk/let-talk-img.png"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default ListTalk;

function CardTalk() {
  const card = [
    {
      id: 1,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/discord.png",
    },
    {
      id: 2,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/insta.png",
    },
    {
      id: 3,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/telegram2.png",
    },
    {
      id: 4,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/airdrop.png",
    },
    {
      id: 5,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/discord.png",
    },
    {
      id: 6,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/airdrop.png",
    },
    {
      id: 7,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/insta.png",
    },
    {
      id: 8,
      title: "Discord Promotion",
      description: "Discord chat moderation 8 hours daily moderation or 24/7.",
      img: "/icons/discord.png",
    },
  ];
  return (
    <div className="lets-talk-card">
      <div className="row p-4 p-md-0">
        {card?.map(({ id, date, title, description, img }) => (
          <div className="col-6 col-xl-3 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-subtitle">{description}</div>
              </div>
              <div className="card-footer">
                <button type="button">More</button>
                <img
                  style={{ borderRadius: 0 }}
                  alt={img}
                  width={51}
                  height={51}
                  src={img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTalk;

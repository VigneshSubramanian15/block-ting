function Badge({ badge }) {
  return (
    <div className="badge-wrapper">
      {badge?.map(({ id, name }) => (
        <span key={id} className="badge rounded-pill mb-4">
          {name}
        </span>
      ))}
    </div>
  );
}

export default Badge;

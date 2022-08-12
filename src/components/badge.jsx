 function Badge({badge}) {
  return (
      <div className="badge-wrapper">
          {badge?.map(({id, name}) =>
              <span key={id} className="badge rounded-pill">
                {name}
            </span>)}
      </div>
  );
}

 export default Badge;

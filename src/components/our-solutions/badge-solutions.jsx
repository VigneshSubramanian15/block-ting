function BadgeSolutions() {
    const badges = [
        {
            id: 1,
            name: "Product Growth"
        },
        {
            id: 2,
            name: "Marketing Stratergy"
        },
        {
            id: 3,
            name: "Branding"
        },
        {
            id: 4,
            name: "New Product"
        }
    ]
    return <>
       <div className="badge-wrapper">
           {badges?.map(({id, name}) =>
               <span key={id} className="badge rounded-pill">
                {name}
            </span>)}
       </div>

    </>
}

export default BadgeSolutions;
import Badge from "../badge";

function BadgeTwoTalk() {
    const badgeData = [
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
        },
        {
            id: 5,
            name: "Product Growth"
        },
    ]
    return <div className="badge-two">
      <Badge badge={badgeData}/>
    </div>
}

export default BadgeTwoTalk;
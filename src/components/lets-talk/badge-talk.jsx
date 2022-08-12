import Badge from "../badge";

function BadgeTalk() {
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
        {
            id: 6,
            name: "Marketing Stratergy"
        },
        {
            id: 7,
            name: "Branding"
        },
        {
            id: 8,
            name: "New Product"
        },
    ]
    return <>
      <Badge badge={badgeData}/>
    </>
}

export default BadgeTalk;
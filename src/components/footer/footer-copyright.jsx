import Link from "next/link";

function FooterCopyright() {
    const link = [
        {id: 1, name: "Privacy Policy", href: "/"},
        {id: 2, name: "Trademarks", href: "/"},
        {id: 3, name: "Legal Rights", href: "/"}
    ]
    return <div className="container-fluid copyright">
        <div className="row">
            <div className="col-lg-6 copyright-left">
                <p>MS Marketing All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 copyright-right">
                {link?.map(({id, name, href}) => <Link key={id} href={href}>
                    {name}
                </Link>)}
            </div>
        </div>
    </div>
}

export default FooterCopyright;
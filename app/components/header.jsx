import Link from "next/link";

const Header = () => {
    return (
    <div className=" border border-black m-5">
        <p className="btn btn-ghost text-xl">THIS IS HEADER</p>
        <Link className="btn btn-ghost text-xl" href="./">HOME</Link>
        <Link className="btn btn-ghost text-xl" href="blog">BLOG</Link>
        <Link className="btn btn-ghost text-xl" href="about">ABOUT</Link>
    </div>
    );
}



export default Header 
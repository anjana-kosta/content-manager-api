import Link from "next/link";


const Navbar = ()=>{
    return(
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                    <Link href ="/" legacyBehavior>
                        <a className="navbar-item">
                            <h1>Content Manager</h1>
                        </a>
                    </Link>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <div className=" navbar-item">
                        <div className="control has-icons-left">
                            <input className="input is-rounded" type="email" placeholder="Search" />
                            <span className="icon is-left">
                            <i className="fa fa-search"></i>
                            </span>
                        </div>
                        </div>
                    <Link href ="/" legacyBehavior>
                        <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                         Home
                        </a>
                    </Link>
                    <Link href ="/resources/new" legacyBehavior>
                        <a className="navbar-item is-size-5 has-text-weight-semibold">
                            Add
                        </a>
                    </Link>
                    <Link href ="/about" legacyBehavior>
                        <a className="navbar-item is-size-5 has-text-weight-semibold">
                         About
                        </a>
                    </Link>
                    </div>
                    </div>
                </div>
            </nav>
    )

    
}

export default Navbar;
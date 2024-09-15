import { Link, NavLink } from "react-router-dom";
function NavBar(prop) {
  let {tok} = prop
  
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container d-flex justify-content-between ">
            <Link className="navbar-brand fw-bold" href="#">
              Exclusive
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto d-flex justify-content-center w-100 gap-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/contact"}>Contact</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/about"}>About</NavLink>
                </li>
                {!tok &&
                <li className="nav-item">
                  <NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/signUp"}>SignUp</NavLink>
                </li>
                }
                {tok &&
                <li className="nav-item">
                  <NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/signUp"} onClick={()=>localStorage.clear()}>Log Out</NavLink>
                </li>
                }
                {tok && <li className="nav-item"><NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/love"}><i className="fa-regular fa-heart"></i></NavLink></li>}
                {tok && <li className="nav-item"><NavLink className={"nav-c"} exact="true" activeclassname="active" to={"/cart"}><i className="fa-solid fa-cart-shopping"></i></NavLink></li>}
                
              </ul>
            </div>
              <form className="d-none d-lg-flex position-relative" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn text-black position-absolute  end-0" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;

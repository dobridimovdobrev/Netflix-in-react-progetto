function Navigation(props) {
  return (
    <header>
      {/* <!-- Navigazione --> */}
      <nav className="navbar navbar-expand-lg mt-2">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#" aria-label="Netflix">
            <img src={props.logo} width="92" alt="logo" title="Netflix" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-label="Home"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-label="Tv shows">
                  Tv Shows
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  aria-label="Movies"
                >
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  aria-label="Recently added"
                >
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  aria-label="My list"
                >
                  My List
                </a>
              </li>
            </ul>
            {/*  <!-- Navigazione parte destra --> */}
            <form className="d-flex align-items-center gap-4" role="search">
              <a href="#">
                <i
                  className="fa-solid fa-magnifying-glass fa-lg"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
              <a href="#">
                <img src={props.kids} width="40" height="40" alt="kids" />
              </a>
              <a href="#">
                <i
                  className="fa-solid fa-bell fa-lg"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
              {/* <!-- DROPDOWN  menu --> */}
              <li className="nav-item dropdown list-unstyled">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <img src={props.avatar} width="40" height="40" alt="avatar" />
                </a>
                <ul
                  className="dropdown-menu rounded-0  dropdown-menu-end mt-3"
                  id="profileDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i
                        className="fa-solid fa-pencil fa-xs me-2"
                        style={{ color: "#7f7f7f" }}
                      ></i>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i
                        className="fa-solid fa-cog fa-sm me-2"
                        style={{ color: "#7f7f7f" }}
                      ></i>
                      Account
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i
                        className="fa-solid fa-arrow-right-from-bracket fa-sm me-2"
                        style={{ color: "#7f7f7f" }}
                      ></i>
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

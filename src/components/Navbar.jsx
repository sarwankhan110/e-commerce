import LOGO from "../assets/Logo.png";
import APPLE from "../assets/appple.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mx-4 my-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LOGO} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              // style= "--bs-scroll-height: 100px"
            >
              <div className=" d-flex gap-1 border bordersuccess px-4 rounded-2 ">
                <img src={APPLE} alt="logo" />
                <li className="nav-item dropdown fw-medium">
                  <a
                    className="nav-link dropdown-toggle primary-green"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Grocery
                  </a>
                  <ul className="dropdown-menu border">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
            <div className="d-flex gap-3">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-4"
                // style= "--bs-scroll-height: 100px"
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contacts
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <button
                  className="btn primary-green-bg white-color fw-medium"
                  type="submit"
                >
                  Join
                </button>
                <button
                  className="btn primary-green-bg white-color fw-medium"
                  type="submit"
                >
                  Become a seller
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

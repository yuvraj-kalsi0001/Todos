import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            {props.titleName}
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {props.searchBar ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
                
              </form>
            ) : (
              ""
            )}
            <button className="btn btn-danger mx-2 active" type="submit">
                  Search
                </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.defaultProps = {
  titleName: "My Todos List",
  searchBar: "true",
};

Header.propTypes = {
  titleName: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};

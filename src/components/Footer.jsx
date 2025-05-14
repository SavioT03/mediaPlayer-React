import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container mt-5"
      style={{ marginLeft: "200px", overflowX: "hidden" }}
    >
      <div className="row gx-5 mt-5 gap-4">
        <div className="col-lg-2 ms-4">
          <Link
            style={{ textDecoration: "none", color: "cyan", fontSize: "25px" }}
            to={"/"}
          >
            <i className="fa-solid fa-headphones-simple"></i> MBeats
          </Link>{" "}
          <br />
          <p className="mt-3" style={{ color: "white" }}>
            Designed and built with all the love in the world by the Luminar
            team with the help of our Contributors
          </p>{" "}
          <br />
          <p style={{ color: "white" }}>
            Code licensed Luminar,docs CC BY 3.0
          </p>{" "}
          <br />
          <p style={{ color: "white" }}>Currently V5.3.2.0</p>
        </div>

        <div className="col-lg-2 ms-4">
          <h4>Links</h4>
          <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
            Landing Page
          </Link>{" "}
          <br />
          <Link
            style={{ textDecoration: "none", lineHeight: "2", color: "white" }}
            to={"/home"}
          >
            Home Page
          </Link>{" "}
          <br />
          <Link
            style={{ textDecoration: "none", lineHeight: "2", color: "white" }}
            to={"/history"}
          >
            History Page
          </Link>
        </div>
        <div className="col-lg-2 ms-4" style={{ lineHeight: 1 }}>
          <h4>Guides</h4>

          <p style={{ color: "white" }}>React</p>
          <p style={{ color: "white" }}>React Router</p>
          <p style={{ color: "white" }}>React Bootstrap</p>
        </div>
        <div className="col-lg-2 ms-4">
          <h4>Contact</h4>
          <div className="d-flex w-100">
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: "black",
                color: "white",
                width:"100%"
              }}
              placeholder="Enter your Email here!!"
            />
            <Button variant="primary">
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
          <div className="d-flex mt-3 gap-3" style={{ color: "white" }}>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

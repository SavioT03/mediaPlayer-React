import React from "react";
import { Link } from "react-router-dom";
import musicImg from "../assets/Music.gif";
import { Card } from "react-bootstrap";
import img1 from "../assets/poster.avif";
import img2 from "../assets/categorise.jpg";
import img3 from "../assets/history.jpg";
const Landing = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h3>
            Welcome to <span className="text-warning">MBeats</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link className="btn btn-secondary" to={"/Home"}>
            Get Started
          </Link>
        </div>

        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <img src={musicImg} alt="" />
        </div>
      </div>

      <div className="my-3">
        <h3 className="text-center mb-5">Features</h3>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can Upload, View and Remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "26rem", marginLeft: "-60px" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise vidoes according to their interests.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* Info section */}
      <div
        className="row mt-5 p-3"
        style={{
          border: "1px solid white",
          height: "400px",
          borderRadius: "20px",
          textAlign: "justify",
        }}
      >
        <div className="col-lg-5 m-4">
          <h2>Simple, Fast and Powerful</h2> <br />
          <p style={{ color: "white" }}>
            <span style={{ fontSize: "23px", color: "red" }}>
              Play Everything:{" "}
            </span>{" "}
            MBeats is simple for User Interaction, Fast and Powerful for use.
          </p>
          <br />
          <p style={{ color: "white" }}>
            <span style={{ fontSize: "23px", color: "red" }}>
              Categorize Videos:{" "}
            </span>{" "}
            MBeats categorizes vidoes of different genres, for users for easy
            navigation and access.
          </p>
          <br />
          <p style={{ color: "white" }}>
            <span style={{ fontSize: "23px", color: "red" }}>
              Manage History:{" "}
            </span>{" "}
            MBeats manages your history and watchlist in an efficient manner.
          </p>
          <br />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 mt-4 gap-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-sAOWhvheK8?si=0jQxK4hziBVXYy11"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;

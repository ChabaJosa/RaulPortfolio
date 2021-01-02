import React from "react";

export default function footer() {
  return (
    <>
      <div className="ui vertical footer inverted segment ">
        <div className="footer-btns">
          <a
            href="http://www.linkedin.com/in/rauldoejod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="ui violet basic button inverted"
              style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
            >
              <span className="label">LinkedIn</span>
            </button>
          </a>
          <a
            href="https://medium.com/@rauldoejo26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="ui violet basic button inverted"
              style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
            >
              <span className="label">Medium</span>
            </button>
          </a>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="ui violet basic button inverted"
              style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
            >
              <span className="label">Email</span>
            </button>
          </a>
        </div>
        <div className="ui container left">© RaulDoejo 2020 </div>
      </div>
    </>
  );
}

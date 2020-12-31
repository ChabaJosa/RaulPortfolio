import React from "react";

export default function footer() {
  return (
    <>
      <div className="ui vertical footer inverted segment ">
        <div className="footer-btns">
          <button
            className="ui violet basic button inverted"
            style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
          >
            <a
              href="https://grindr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">LinkedIn</span>
            </a>
          </button>
          <button
            className="ui violet basic button inverted"
            style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
          >
            <a
              href="https://grindr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Medium</span>
            </a>
          </button>
          <button
            className="ui violet basic button inverted"
            style={{ fontSize: "1rem", padding: "0.78em 1.5em" }}
          >
            <a
              href="https://grindr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Email</span>
            </a>
          </button>
        </div>
        <div className="ui container left">© RaulDoejo 2020 </div>
      </div>
    </>
  );
}

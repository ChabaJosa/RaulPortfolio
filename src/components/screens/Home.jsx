import React from "react";

import FirstContainer from "../firstContainer";
import SecondContainer from "../secondContainer";

export default function Home() {
  return (
    <div className="container-2">
      <FirstContainer />
      <SecondContainer />
      <div className="ui vertical footer segment">
        <div className='footer-btns'>
          <button className="ui black basic button">LinkedIn</button>
          <button className="ui black basic button">Medium</button>
          <button className="ui black basic button">Email</button>
        </div>
        <div className="ui container left">© RaulDoejo 2020 </div>
      </div>
    </div>
  );
}

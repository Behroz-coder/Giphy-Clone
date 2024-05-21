import React from 'react'
import{FaLinkedin ,FaGithub}from "react-icons/fa6"

function FollowOn() {
  return (
    <div className="faded-text pt-2">
      {" "}
     
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a
          href="https://www.linkedin.com/in/behrozazhar/"
          target="__blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/Behroz-coder"
          target="__blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}

export default FollowOn
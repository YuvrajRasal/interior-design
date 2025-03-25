import React from "react";
import "./GatewayContact.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function GatewayContact() {
  return (
    <div className="h-interno">
      <h1>Wanna join the Name?</h1>
      <p>It is a long established fact will be distracted.</p>
      <Link to={`/contact`}>
        <button>
          Contact Us
          <AiOutlineArrowRight style={{ marginLeft: "5px" }} color="#292F36" />
        </button>
      </Link>
    </div>
  );
}

export default GatewayContact;

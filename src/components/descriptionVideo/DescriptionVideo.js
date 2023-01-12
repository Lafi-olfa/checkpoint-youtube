import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt
} from "react-icons/io";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const DescriptionVideo = () => {
  return (
    <div style={{marginTop:"-320px",display:"flex", width: "650px"}}>
      <div id="profile-container" style={{ height: "35px", justifyContent:"space-evenly",width: "350px",
      display:"flex", borderRadius: "20px" }}>
        <img
          alt="logo"
          height="40px"
          src="https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s88-c-k-c0x00ffffff-no-rj"
        />
        <div 
        // style={{ display: "flex", flexDirection: "column" }}
        >
          <h5>Web Dev Simplified</h5>
          <p>1,17 M d’abonnés</p>{" "}
        </div>
        <button 
    style={{ border:"none" }}
        >
          {" "}
          <IoIosNotificationsOutline  style={{ fontSize:"18px" }} /> S'abonner
        </button>
      </div>
      {/* button double */}
      <div id="viewers-reaction"   style={{ height: "35px", justifyContent:"space-evenly",width: "350px",display:"flex", borderRadius: "20px" }}>
        <ButtonGroup
          aria-label="Basic example"
        //   style={{ height: "36px", width: "140px", borderRadius: "20px" }}
        >
          <Button variant="secondary" >
            {" "}
            <AiOutlineLike  style={{ fontSize:"25px"}}  />
            30 K
          </Button>
          <Button variant="secondary">
            {" "}
            <AiOutlineDislike  style={{ fontSize:"25px" }}  />{" "}
          </Button>
        </ButtonGroup>
        {/* button share */}
        <Button
          variant="secondary"
        //   style={{ height: "36px", width: "140px", borderRadius: "20px" }}
        >
            <IoMdShareAlt style={{ fontSize:"25px" }} />
          Partager
        </Button>{" "}
        {/* button dropdown */}
        {/* <Dropdown  style={{ height: "36px", width: "140px", borderRadius: "20px",color:"black", backgroundColor:"white"}}>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          ....
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
        <NavDropdown style={{height: "40px", width: "40px", borderRadius: "20px",color:"black", backgroundColor:"#6C757D"}} title="..." id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Telecharger </NavDropdown.Item>
          <NavDropdown.Item href="#action4">Extrait</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Enregistrer</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Signaler</NavDropdown.Item>
        </NavDropdown>
      </div>
     
      
    </div>
    
  );
};

export default DescriptionVideo;

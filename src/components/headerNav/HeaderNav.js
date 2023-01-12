import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiMicrophone } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function NavScrollExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        {/* partie sidebar */}
        <Navbar.Brand
          style={{
            display: "flex",
            width: "150px",
            justifyContent: "space-evenly",
          }}
          href="#"
        >
          <Button
            style={{
              display: "flex",
              width: "150px",
              backgroundColor: "white",
              color: "black",
              border: "none",
            }}
            onClick={handleShow}
          >
            ....
          </Button>

          <Offcanvas
            show={show}
            onHide={handleClose}
            backdrop="static"
            style={{ width: "200px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                <img
                  height="40px"
                  alt="logo"
                  src="https://www.bing.com/th?id=OIP._GtGNuF1vwgrzARaUkw-dwHaEK&w=296&h=166&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                />{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
              style={{ justifyContent: "center", textTransform: "capitalize" }}
            >
              <Nav.Link style={{ margin: "9px" }} href="#action1">
                Accueil
              </Nav.Link>
              <Nav.Link style={{ margin: "9px" }} href="#action2">
                shorts
              </Nav.Link>
              <Nav.Link style={{ margin: "9px" }} href="#action2">
                abonnements
              </Nav.Link>
              <Nav.Link style={{ margin: "9px" }} href="#action2">
                bibliotheque
              </Nav.Link>
              <Nav.Link style={{ margin: "9px" }} href="#action2">
                historique
              </Nav.Link>
              <p style={{ margin: "9px" }}>
                Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un
                commentaire et vous abonner.
              </p>
              <Button
                style={{ margin: "9px", color: "blue", background: "white" }}
              >
                {" "}
                se connecter
              </Button>
              {/*  */}
              <h5> explorer</h5>
              <Nav.Link href="#action2">tendances</Nav.Link>
              <Nav.Link href="#action2">musique</Nav.Link>
              <Nav.Link href="#action2">jeux videos</Nav.Link>
              <Nav.Link href="#action2">sport</Nav.Link>
              <Nav.Link href="#action2">chaines</Nav.Link>

              {/*  */}
              <h5> Autres contenus YouTube</h5>
              <Nav.Link href="#action2">youtube music</Nav.Link>
              <Nav.Link href="#action2">youtube kids</Nav.Link>
              <Nav.Link href="#action2">youtube tv</Nav.Link>
              {/*  */}
              <NavDropdown.Divider />

              <Nav.Link href="#action2">parametres</Nav.Link>
              <Nav.Link href="#action2">historique de signalement</Nav.Link>
              <Nav.Link href="#action2">aide</Nav.Link>
              <Nav.Link href="#action2">envoyer un commentaire</Nav.Link>
            </Offcanvas.Body>
          </Offcanvas>
          {/*  */}
          <img
            height="40px"
            alt="logo"
            src="https://www.bing.com/th?id=OIP._GtGNuF1vwgrzARaUkw-dwHaEK&w=296&h=166&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div style={{ display: "flex" }}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  style={{
                    color: "black",
                    backgroundColor: "white",
                  }}
                >
                  <BsSearch />
                </Button>
              </Form>

              <Nav.Link href="">
                <BiMicrophone />{" "}
              </Nav.Link>
            </div>
            <div style={{ display: "flex" }}>
              <Nav.Link href="#action2">
                {" "}
                <AiOutlineVideoCameraAdd />
              </Nav.Link>
              <Nav.Link href="#features">
                <IoMdNotificationsOutline />
              </Nav.Link>

              {/*  */}

              {/* profil */}
              <NavDropdown title="Profil" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  changer de compte
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  se deconnecter
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

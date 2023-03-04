import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <h6 className="mt-2">Find us</h6>
        <div class="d-grid gap-2 col-6 ">
          <ListGroup>
            <ListGroup.Item className="mb-2">
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaWhatsapp /> Whatsapp
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaTwitter /> Twitter
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;

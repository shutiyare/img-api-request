import React, { useState, useEffect } from "react";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import "./userinputs.css";
import ImageList from "./ImageList";
import axios from "axios";
function Inpusearch() {
  const [shutiye, setShutiye] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const onSearchSubmit = async (event) => {
      const response = await axios.get(
        `https://pixabay.com/api/?key=37061436-1e284ef358e672107bfefc2bf&q=${event}&image_type=photo`
      );
      setImages(response.data.hits);
      //   console.log(images);
    };
    // onSearchSubmit(shutiye);
    const onFormSubmit = (e) => {
      e.preventDefault();
      //   onSearchSubmit(shutiye);
    };
    // onFormSubmit(shutiye);

    onSearchSubmit(shutiye);
  }, [shutiye, []]);

  return (
    <div>
      <Container className=" ">
        <Form>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <input
              type="text"
              placeholder="search"
              className="p-2 w-75 m-1"
              onChange={(e) => setShutiye(e.target.value)}
              value={shutiye}
            />
          </Form.Group>
        </Form>
        <p>{shutiye}</p>
        {}
        <ImageList images={images} />
      </Container>
    </div>
  );
}

export default Inpusearch;

import React from "react";
import { Image, Container } from "react-bootstrap";
function ImageList(props) {
  const images = props.images.map((image) => {
    return (
      <Container>
        <div className="w-75">
          <Image
            key={image.id}
            src={image.webformatURL}
            className="rounded m-1"
          />
        </div>
      </Container>
    );
  });
  return <div>{images}</div>;
}
export default ImageList;

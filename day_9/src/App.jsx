import React from "react";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const [degree, setDegree] = useState(0);

  const images = [
 "https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg",
     "https://posterjack.ca/cdn/shop/articles/landscape_photography_tips_featured_image.jpg?v=1563408049&width=2048",
     "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
     "https://www.aaronreedphotography.com/images/xl/The-Wash-Web-2019.jpg",
   ];


  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Slider
      </h1>

      <img
        src={images[index]}
        alt=""
        style={{
          width: "500px",
          height: "300px",
        }}
      />

      <br />

      <button
        onClick={() =>
          setIndex(index > 0 ? index - 1 : images.length - 1)
        }
        style={{
          margin: "10px",
          padding: "10px 20px",
        }}
      >
        Left
      </button>

      <button
        onClick={() =>
          setIndex(index < images.length - 1 ? index + 1 : 0)
        }
        style={{
          margin: "10px",
          padding: "10px 20px",
        }}
      >
        Right
      </button>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ backgroundColor: "black", color: "white" }}>
          Rotate Image
        </h1>

        <img
          src="https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg"
          alt=""
          style={{
            width: "500px",
            height: "300px",
            transform: `rotate(${degree}deg)`,
          }}
        />

        <br />

        <button
          onClick={() => setDegree(degree - 90)}
          style={{
            margin: "10px",
            padding: "10px 20px",
          }}
        >
          Rotate Left
        </button>

        <button
          onClick={() => setDegree(degree + 90)}
          style={{
            margin: "10px",
            padding: "10px 20px",
          }}
        >
          Rotate Right
        </button>
      </div>
    </div>
  );
};

export default App;
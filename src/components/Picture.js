/* src/components/Picture.js */
import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt={data.alt} />
      </div>

      <a
        className="download"
        target="_blank"
        rel="noreferrer"
        href={data.src.large}
      >
        下載圖片
      </a>
    </div>
  );
};

export default Picture;

import React, { useState, useEffect } from "react";
import { IMAGES } from "./Images";
import "./ImageLoader.css";
function ImageLoader({ cname, num }) {
  const [imgsLoaded, setImgsLoaded] = useState([false, false]);

  const loadImage = (image, index) => {
    return new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = image.url;

      loadImg.onload = () => {
        setTimeout(() => {
          resolve(index);
        }, 500);
      };

      loadImg.onerror = (err) => reject(err);
    });
  };

  useEffect(() => {
    Promise.all([
      loadImage(IMAGES[0], 0),
      loadImage(IMAGES[1], 1),
      loadImage(IMAGES[2], 2),
      loadImage(IMAGES[3], 3),
      loadImage(IMAGES[4], 4),
      loadImage(IMAGES[5], 5),
      loadImage(IMAGES[6], 6),
      loadImage(IMAGES[7], 7),
      loadImage(IMAGES[8], 8),
      loadImage(IMAGES[9], 9),
      loadImage(IMAGES[10], 10),
      loadImage(IMAGES[11], 11),
      loadImage(IMAGES[12], 12),
      loadImage(IMAGES[13], 13),

      loadImage(IMAGES[14], 14),
      loadImage(IMAGES[15], 15),
      loadImage(IMAGES[16], 16),
      loadImage(IMAGES[17], 17),

      loadImage(IMAGES[18], 18),
      loadImage(IMAGES[19], 19),
      loadImage(IMAGES[20], 20),
      loadImage(IMAGES[21], 21),

      loadImage(IMAGES[22], 22),
      loadImage(IMAGES[23], 23),

      loadImage(IMAGES[24], 24),
      loadImage(IMAGES[25], 25),
      loadImage(IMAGES[26], 26),
      loadImage(IMAGES[27], 27),
      loadImage(IMAGES[28], 28),
      loadImage(IMAGES[29], 29),
    ])
      .then((results) => {
        results.forEach((index) => {
          setImgsLoaded((prev) => {
            const updatedState = [...prev];
            updatedState[index] = true;
            return updatedState;
          });
        });
      })
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  return (
    <>
      {imgsLoaded[num] ? (
        <img
          className={cname}
          key={IMAGES[num].id}
          src={IMAGES[num].url}
          alt=""
        />
      ) : (
        <div class="loader"></div>
      )}
    </>
  );
}

export default ImageLoader;

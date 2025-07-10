import React, { useState } from "react";
import Circles from "../Miscellaneous/Circles";
import heartImg from '../assets/heart.png';
import oblongImg from '../assets/oblong.png';
import ovalImg from '../assets/oval.png';
import roundImg from '../assets/round.png';
import squareImg from '../assets/square.png';




function FaceAnalyzer() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bodyType, setBodyType] = useState("");




  const faceShapeColors = {
    "#373028": [
      "Navy Blue",
      "Black",
      "Charcoal",
      "Burgundy",
      "Maroon",
      "Olive",
      "Rust",
      "Gold",
      "Cream",
      "Peach",
    ],
    "#422811": [
      "Navy Blue",
      "Brown",
      "Khaki",
      "Olive",
      "Maroon",
      "Mustard",
      "Teal",
      "Tan",
      "Rust",
      "Burgundy",
    ],
    "#513B2E": [
      "Cream",
      "Beige",
      "Olive",
      "Burgundy",
      "Red",
      "Orange",
      "Mustard",
      "Bronze",
      "Teal",
      "Peach",
    ],
    "#6F503C": [
      "Beige",
      "Brown",
      "Green",
      "Khaki",
      "Cream",
      "Peach",
      "Lime Green",
      "Olive",
      "Maroon",
      "Rust",
      "Mustard",
    ],
    "#81654F": [
      "Beige",
      "Off White",
      "Sea Green",
      "Cream",
      "Lavender",
      "Mauve",
      "Burgundy",
      "Yellow",
      "Lime Green",
    ],
    "#9D7A54": [
      "Olive",
      "Khaki",
      "Yellow",
      "Sea Green",
      "Turquoise Blue",
      "Coral",
      "White",
      "Gold",
      "Peach",
    ],
    "#BEA07E": [
      "Coral",
      "Sea Green",
      "Turquoise Blue",
      "Pink",
      "Lavender",
      "Rose",
      "White",
      "Peach",
      "Teal",
      "Fluorescent Green",
    ],
    "#E5C8A6": [
      "Turquoise Blue",
      "Peach",
      "Teal",
      "Pink",
      "Red",
      "Rose",
      "Off White",
      "White",
      "Cream",
      "Gold",
      "Yellow",
    ],
    "#E7C1B8": [
      "Pink",
      "Rose",
      "Peach",
      "White",
      "Off White",
      "Beige",
      "Lavender",
      "Teal",
      "Fluorescent Green",
    ],
    "#F3DAD6": [
      "White",
      "Cream",
      "Peach",
      "Pink",
      "Rose",
      "Lavender",
      "Mustard",
      "Lime Green",
      "Light Blue",
      "Fluorescent Green",
    ],
    "#FBF2F3": [
      "Soft Pastels (Peach, Lavender, Pink)",
      "White",
      "Off White",
      "Rose",
      "Light Blue",
      "Sea Green",
      "Fluorescent Green",
      "Silver",
      "Cream",
      "Tan",
    ],
  };

  const skintone_names = {
    "#373028": "Deepest Skin",
    "#422811": "Very Deep",
    "#513B2E": "Deep Brown",
    "#6F503C": "Medium Brown",
    "#81654F": "Tan",
    "#9D7A54": "Light Tan",
    "#BEA07E": "Medium Fair",
    "#E5C8A6": "Light Fair",
    "#E7C1B8": "Warm Fair",
    "#F3DAD6": "Very Fair",
    "#FBF2F3": "Pale",
  };

  const colorHexCodes = {
    "Navy Blue": "#000080", // Deep navy blue
    Black: "#000000", // True black
    Charcoal: "#36454F", // Dark grayish-blue
    Burgundy: "#800020", // Dark red-wine
    Maroon: "#800000", // Dark reddish-brown
    Olive: "#808000", // Dark yellow-green
    Rust: "#B7410E", // Reddish-brown
    Gold: "#FFD700", // Bright metallic gold
    Cream: "#FFFDD0", // Light yellowish-white
    Peach: "#FFE5B4", // Pale orange-pink
    Brown: "#8B4513", // Saddle brown
    Khaki: "#F0E68C", // Light yellow-brown
    Mustard: "#FFDB58", // Bright yellow-brown
    Teal: "#008080", // Blue-green
    Tan: "#D2B48C", // Light brown
    Beige: "#F5F5DC", // Pale sandy fawn
    Red: "#FF0000", // Bright red
    Orange: "#FFA500", // Standard orange
    Bronze: "#CD7F32", // Metallic brown
    Green: "#008000", // Pure green
    "Lime Green": "#32CD32", // Bright green
    "Off White": "#FAF9F6", // Slightly warm white
    "Sea Green": "#2E8B57", // Medium green
    Lavender: "#E6E6FA", // Pale purple
    Mauve: "#E0B0FF", // Soft violet
    Yellow: "#FFFF00", // Bright yellow
    "Turquoise Blue": "#40E0D0", // Bright aqua
    Coral: "#FF7F50", // Pinkish orange
    White: "#FFFFFF", // Pure white
    Pink: "#FFC0CB", // Light red tint
    Rose: "#FF007F", // Deep pink
    "Fluorescent Green": "#39FF14", // Neon green
    "Light Blue": "#ADD8E6", // Soft blue
    "Soft Pastels (Peach, Lavender, Pink)": "#FFDDE1", // Very soft blush
    Silver: "#C0C0C0", // Metallic silver
  };

const faceShapeImages = {
  Heart: heartImg,
  Oblong: oblongImg,
  Oval: ovalImg,
  Round: roundImg,
  Square: squareImg,
};





  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

const handleSubmit = async () => {
  if (!image) return;
  setLoading(true);

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = 512; // Max width/height

        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxSize) {
            height *= maxSize / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width *= maxSize / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const base64 = canvas.toDataURL("image/jpeg", 0.7); // 0.7 = 70% quality
        resolve(base64.split(",")[1]); // remove data:image/jpeg;base64,
      };
      img.src = URL.createObjectURL(file);
    });
  };

  console.log("compress done")

  try {
    const base64Image = await compressImage(image);

    console.log("api call start")

    const response = await fetch("https://python-backend-mg86.onrender.com/api/result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_data: base64Image }),
    });

    console.log("api call done")

    const data = await response.json();
    setResult(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    alert("Error while processing image");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-start mt-16 px-4  py-12 bg-white">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
        Face Analyzer
      </h1>

      <div className="flex flex-col items-center gap-4 w-full max-w-md">
  {/* File Upload */}
  <label
    htmlFor="image-upload"
    className="cursor-pointer border border-black text-black  hover:bg-black hover:text-white  px-8 py-2 font-semibold"
  >
    {image ? "Change Image" : "Choose Image"}
  </label>
  <input
    id="image-upload"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />

  {/* Preview */}
  {preview && (
    <img
      src={preview}
      alt="preview"
      className="w-64 h-64 object-cover rounded-lg shadow-md"
    />
  )}

  {/* Dropdown */}
  <div className="w-full">
    <label htmlFor="bodyType" className="block text-m text-black-700 mb-1 font-semibold">
      Select Body Type
    </label>
    <select
      id="bodyType"
      name="bodyType"
      value={bodyType}
      onChange={(e) => setBodyType(e.target.value)}
      className="w-5/2 border border-gray-300  px-4 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
    >
      <option value="">-- Select --</option>
      <option value="average">Average Height and Weight/Thin</option>
      <option value="heavy">Average Height and Heavyset</option>
      <option value="tall">Average Weight and Tall</option>
      <option value="tallThin">Tall and Thin</option>
      <option value="shortHeavy">Short and Heavyset</option>
    </select>
  </div>
</div>


      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-black text-white px-8 py-2 mt-5 font-semibold  hover:opacity-90 transition"
      >
        {loading ? "Processing..." : "Analyze"}
      </button>

      
            {/* <div className="mb-4 text-gray-600 flex flex-wrap justify-center gap-6 pt-10 ">
  {Object.entries(colorHexCodes).map(([colorName, hexCode], key) => (
    <Circles
      key={key}
      hexcolor={hexCode}
      colorname={colorName}
    />
  ))}
</div> */}

      



      {result && (
        <div className="mt-10 max-w-xl w-full text-center">
           {/* Face Shape Result */}
           <div>
  <h2 className="text-xl font-bold mb-2">Face Shape</h2>
  <img
    src={faceShapeImages[result.face_shape.predicted]}
    alt={result.face_shape.predicted}
    className="w-28 h-28 object-contain mx-auto"
  />
  <p className="text-lg mb-2">{result.face_shape.predicted}</p>
  
</div>
          <div className="flex justify-around  py-10">
           


            {/* Skin Color Result */}
            <div>
              <h2 className="text-xl font-bold mb-2">Skin Tone</h2>
              <Circles
                hexcolor={result.skin_color.faces[0].skin_tone}
                colorname={skintone_names[result.skin_color.faces[0].skin_tone]}
              />
            </div>

            {/* Skin Color Result */}
            <div>
              <h2 className="text-xl font-bold mb-2">Skin Colors</h2>
              <div className="flex justify-center gap-5">
                <Circles
                  hexcolor={result.skin_color.faces[0].dominant_colors[0].color}
                  colorname={
                    result.skin_color.faces[0].dominant_colors[0].percent + "%"
                  }
                />
                <Circles
                  hexcolor={result.skin_color.faces[0].dominant_colors[1].color}
                  colorname={
                    result.skin_color.faces[0].dominant_colors[1].percent + "%"
                  }
                />
              </div>
            </div>
          </div>
          {/* Suggested Colors */}
          <div>
          <h3 className="text-md font-semibold mb-1">Suggested Colors:</h3>
          <div className="mb-4 text-gray-600 flex flex-wrap justify-center gap-6">

            {faceShapeColors[result.skin_color.faces[0].skin_tone]
              ? faceShapeColors[result.skin_color.faces[0].skin_tone].map(
                  (item, key) => (
                    <Circles
                      key={key}
                      hexcolor={colorHexCodes[item]}
                      colorname={item}
                    />
                  )
                )
              : "No colour Suggested"}

          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FaceAnalyzer;

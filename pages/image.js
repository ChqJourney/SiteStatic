import React, { useRef, useState } from "react";
import Canvas from "../components/tools/photoneeCanvas";

export default function ImagePage() {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState({});

  function imageSelected(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      if (selectedFile.type.match("image.*")) {
        console.log("file match");
        const image = new Image();
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (event) => {
          console.log("inreader");
          if (event.target.readyState == FileReader.DONE) {
            image.src = event.target.result;
            image.onload = () => {
              const width = image.width;
              const height = image.height;
              console.log(width);
              const mov = (context) => {
                context.drawImage(image, 0, 0);
              };
              setImageData({ width: width, height: height, draw: mov });
            };
          }
        };
      }
      // image.src =selectedFile
      // image.onload=()=>{
      //           const width=image.width
      //           const height=image.height

      //           const drawing=context=>{
      //               context.drawImage(image,0,0)
      //           }
      //           setImageData({width:width,height:height,draw:drawing})
      //       }
    }
  }
  let sepiaFilter = function(imgData) {
    let d = imgData.data
    for (let i = 0; i < d.length; i += 4) {
      let r = d[i]
      let g = d[i + 1]
      let b = d[i + 2]
      d[i] = (r * 0.393) + (g * 0.769) + (b * 0.189) // red
      d[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168) // green
      d[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131) // blue
    }
    return imgData
  }
  function changePic(){
    const mod=function(context){
        let data=context.getImageData(0,0,imageData.width,imageData.height)
    context.putImageData(sepiaFilter(data),0,0)
    }
    setImageData({...imageData,modify:mod})
  }
  return (
    <div className="container mx-auto justify-center">
      <Canvas
        className="w-6/12 h-6/12 border-2"
        width={imageData.width}
        height={imageData.height}
        draw={imageData.draw}
        modify={imageData.modify}
        alt="canvas"
      />

      <input
        type="file"
        onChange={imageSelected}
        className="justify-center w-auto"
      />
      <button className="btn-color w-48" onClick={changePic}>Click</button>
    </div>
  );
}

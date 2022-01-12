import React, { useEffect, useRef, useState } from "react";
import Canvas from "../components/tools/photoneeCanvas";

export default function ImagePage() {
  const [imageData, setImageData] = useState({});
  const [clipImageData,setClipImageData]=useState({})
 
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
              let scaleFactor = 1;
              const width = image.width;
              const height = image.height;
              if (height > 600||width>600) scaleFactor = Math.min(600 / height,600/width);
              const mov = (context) => {
                if (scaleFactor === 1) {
                  context.drawImage(image, 0, 0);
                } else {
                  context.width = image.width * scaleFactor;
                  context.height = image.height * scaleFactor;
                  context.drawImage(image, 0, 0, context.width, context.height);
                  //   context.scale(scaleFactor, scaleFactor);
                }
              };
              setImageData({
                width: width * scaleFactor,
                height: height * scaleFactor,
                draw: mov,
              });
            };
          }
        };
      }
     
    }
  }
  let sepiaFilter = function (imgData) {
    let d = imgData.data;
    for (let i = 0; i < d.length; i += 4) {
      let r = d[i];
      let g = d[i + 1];
      let b = d[i + 2];
      d[i] = r * 0.393 + g * 0.769 + b * 0.189; // red
      d[i + 1] = r * 0.349 + g * 0.686 + b * 0.168; // green
      d[i + 2] = r * 0.272 + g * 0.534 + b * 0.131; // blue
    }
    return imgData;
  };
  function changePic() {
    const mod = function (context) {
      let data = context.getImageData(0, 0, imageData.width, imageData.height);
      context.putImageData(sepiaFilter(data), 0, 0);
    };
    setImageData({ ...imageData, modify: mod });
  }
  function testColor(target, current, inSideBoundary) {
    let range = inSideBoundary ? 0.2 : 0.9;
    for (let i = 0; i < 3; i++) {
      if (
        !(
          (1 - range) * target[i] <= current[i] &&
          (1 + range) * target[i] >= current[i]
        )
      )
        return false;
    }
    return true;
  }
  
  function calculateBgColor(ctx) {
    let tl = ctx.getImageData(0, 0, 1, 1).data;
    let tr = ctx.getImageData(imageData.width - 1, 0, 1, 1).data;
    let br = ctx.getImageData(
      imageData.width - 1,
      imageData.height - 1,
      1,
      1
    ).data;
    let bl = ctx.getImageData(0, imageData.height - 1, 1, 1).data;

    return [
      (tl[0] + tr[0] + br[0] + bl[0]) / 4,
      (tl[1] + tr[1] + br[1] + bl[1]) / 4,
      (tl[2] + tr[2] + br[2] + bl[2]) / 4,
      0,
    ];
  }
  function removeBackground() {
    const removeBg = (ctx) => {
      //step 1: get bitArray Data
      let img = ctx.getImageData(0, 0, imageData.width, imageData.height);
      var width = imageData.width;
      var height = imageData.height;
      //step 2: get background color
      const backgroundColor = calculateBgColor(ctx);
      console.log(backgroundColor)
      //step 3: horizontal scan with boundary detect
      for (let row = 0; row < height; row++) {
        let inSideBoundary = false;
        let lastPixelBgColor = true;
        for (let col = 0; col < width; col++) {
          const pixIndex = row * width * 4 + col * 4;
          var closeToTargetBgColor = testColor(
            [
              img.data[pixIndex],
              img.data[pixIndex + 1],
              img.data[pixIndex + 2],
            ],
            backgroundColor,
            inSideBoundary
          );
          if (closeToTargetBgColor) {
            img.data[pixIndex + 3] = 0;
            lastPixelBgColor = true;
          } else {
            if (lastPixelBgColor) {
              inSideBoundary = false;
            } else {
              inSideBoundary = true;
            }
          }
        }
      }
      ctx.putImageData(img, 0, 0);
      //   for (let row = 0; row < imageData.height; row++) {
      //     let left = row * 4 * imageData.width;
      //     let right = left + 4 * imageData.width - 1 - 3;
      //     let leftF = false;
      //     let rightF = false;
      //     while (!leftF || !rightF) {
      //         if (!leftF) {
      //             if (testColor([pixiArr[left], pixiArr[left + 1], pixiArr[left + 2]], backgroundColor)) {
      //                 pixiArr[left + 3] = 0;
      //                 left += 4;
      //             } else leftF = true;
      //         }
      //         if (!rightF) {
      //             if (testColor([pixiArr[right], pixiArr[right + 1], pixiArr[right + 2]], backgroundColor)) {
      //                 pixiArr[right + 3] = 0;
      //                 right -= 4;
      //             } else rightF = true;
      //         }
      //         if (left == right) {
      //             leftF = true;
      //             rightF = true;
      //         };
      //     }
      // }
      // //step 4: vertical scan with boundary detect
      // for (let col = 0; col < imageData.width; col++) {
      //     let top = col * 4; // 指向列头
      //     let bottom = top + (imageData.height - 2) * imageData.width * 4 + imageData.width * 4; // 指向列尾
      //     let topF = false;
      //     let bottomF = false;
      //     while (!topF || !bottomF) {
      //         if (!topF) {
      //             if (testColor([pixiArr[top], pixiArr[top + 1], pixiArr[top + 2]], backgroundColor)) {
      //                 pixiArr[top + 3] = 0;
      //                 top += imageData.width * 4;
      //             } else topF = true;
      //         }
      //         if (!bottomF) {
      //             if (testColor([pixiArr[bottom], pixiArr[bottom + 1], pixiArr[bottom + 2]], backgroundColor)) {
      //                 pixiArr[bottom + 3] = 0;
      //                 bottom -= imageData.width * 4;
      //             } else bottomF = true;
      //         }

      //         if (top == bottom) {
      //             topF = true;
      //             bottomF = true;
      //         };
      //     }
      // }

      //   for (let i = 0; i < img.data.length; i += 4) {
      //     let r = img.data[i];
      //     let g = img.data[i + 1];
      //     let b = img.data[i + 2];
      //     if (r === 255 && g === 255 && b === 255) {
      //       img.data[i + 3] = 0;
      //     }
      //   }

      //step 5: refresh image data in canvas
    };
    setImageData({ ...imageData, modify: removeBg });
  }
  function clipPic(){
      const clip=(ctx)=>{
          ctx.fillStyle="rgba(0,0,0,0.4)"
          ctx.strokeStyle="rgba(0,143,255,1)"
          ctx.globalCompositeOperation='source-over'
          ctx.fillRect(0,0,imageData.width,imageData.height)
      }
      setClipImageData({
        width: imageData.width,
        height: imageData.height,
        draw: clip,
        clipStatus:true
      })
    //   setClipObj({...clipObj,clipStatus:true})
  }
  
  function fetchCoordinates(obj){
      
      console.log(obj)
  }
  
  return (
    <div className="container h-screen my-2  justify-center">
      <div 
       className="w-full bg-purple-400 relative h-5/6 flex items-center justify-center border-2 p-2 min-h-min border-dashed ${clipObj.clipStatus"
      >
        <Canvas
        className="h-full"
          width={imageData.width}
          height={imageData.height}
          draw={imageData.draw}
          modify={imageData.modify}
          
        
        />
        <Canvas
        className="h-full"
          width={clipImageData.width}
          height={clipImageData.height}
          draw={clipImageData.draw}
          clipStatus={true}
          popup={fetchCoordinates}
        />
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="btn-color flex items-center px-2 my-2">
          <label
            htmlFor="file-upload"
            onChange={imageSelected}
            draggable
            className="w-full h-full flex items-center justify-center cursor-pointer rounded-md text-white"
          >
            <span>Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
        </div>
        
        <button className="mx-2 btn-color w-48" onClick={changePic}>
          Filter
        </button>
        <button className="mx-2 btn-color w-48" onClick={removeBackground}>
          Remove background
        </button>
        <button className="mx-2 btn-color w-48" onClick={clipPic}>
          Clip
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/layouts/layout";
import Canvas from "../../components/tools/canvas";

export default function RemoveBg() {
  const [imageData, setImageData] = useState({file:'', width: 500, height: 400,isJobDone:false })
  const [outputUrl,setOutputUrl]=useState({url:'',text:''})
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
              if (height > 600 || width > 600)
                scaleFactor = Math.min(600 / height, 600 / width);
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
                file:selectedFile.name,
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
      console.log(backgroundColor);
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
     
    };
    setImageData({ ...imageData, modify: removeBg,isJobDone:true });
    const data=outputAction()
    setOutputUrl(data)
  }
  function outputAction(){
    
  }

  return (
    <Layout>

    <div className="h-screen w-full my-2 justify-center min-h-fit pl-48 pr-48">
      <div className="w-full  bg-gray-400 grid row-auto justify-center border-2 p-2 min-h-min border-dashed">
        <Canvas
        file={imageData.file}
          width={imageData.width}
          height={imageData.height}
          draw={imageData.draw}
          modify={imageData.modify}
          isJobDone={imageData.isJobDone}
        />
      </div>
      
      
      <div className="flex w-full items-center px-2 justify-center">
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

        <button className="mx-2 btn-color" onClick={removeBackground}>
          Remove background
        </button>
      </div>
    </div>
    </Layout>
  );
}
// RemoveBg.getLayout = function getLayout(page) {
//   return (
//       <RecoilRoot>
//       <GlobalLayout>
//           <Layout>
//         {page}
//           </Layout>
//       </GlobalLayout>
//       </RecoilRoot>);
  
// }
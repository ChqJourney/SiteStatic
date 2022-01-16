import React, { useEffect, useRef, useState } from "react";

export const ClipCanvas = ({ withCrop }) => {
  const picCanvas = useRef(null);
  const father=useRef(null)
  const [size, setSize] = useState({ w: 300, h: 300 });
  const effectCanvas = useRef(null);
  const [context, setContext] = useState(null);
  const [maskContext,setMaskContext]=useState(null)
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
              setSize({ w: width * scaleFactor, h: height * scaleFactor });
              mov(context);
            };
          }
        };
      }
    }
  }
  const [isCrop, setIsCrop] = useState(false);
  
  useEffect(() => {
    let x = 0;
    let y = 0;
    
    let mousedown=false
    function handleMouseDown(evt) {
        maskContext.clearRect(0,0,size.w,size.h)
        maskContext.fillStyle='rgb(255,255,255,0.7)'
        maskContext.fillRect(0,0,size.w,size.h)
        mousedown=true
      x = evt.offsetX;
      y = evt.offsetY;
    }
  
    function handleMouseUp(evt) {
      if (isCrop && context) {
        maskContext.clearRect(x, y, evt.offsetX-x, evt.offsetY-y);
        // drawLine(context,x, y, evt.offsetX, evt.offsetY);
        x = 0;
        y = 0;
        setIsCrop(false);
        mousedown=false
      }
    }
  
    function handleMouseMove(evt) {
      if (isCrop && context&&mousedown) {
        maskContext.clearRect(x, y, evt.offsetX-x, evt.offsetY-y);
        // Draw our path
        // drawLine(context, x, y, evt.offsetX, evt.offsetY);
        // x = evt.offsetX;
        // y = evt.offsetY;
        // context.beginPath();
        // context.moveTo(start.x, start.y);
        // context.lineTo(end.x, end.y);
        // context.strokeStyle = 'red';
        // context.lineWidth = 3;
        // context.stroke();
        // context.closePath();
      }
    }
    if (isCrop) {
      effectCanvas.current.addEventListener("mousedown", handleMouseDown);
      effectCanvas.current.addEventListener("mouseup", handleMouseUp);
      effectCanvas.current.addEventListener("mousemove", handleMouseMove);
    } else {
      effectCanvas.current.removeEventListener("mousedown", handleMouseDown);
      effectCanvas.current.removeEventListener("mouseup", handleMouseUp);
      effectCanvas.current.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isCrop,size]);
  function beganCrop() {
    console.log(maskContext)
    maskContext.fillStyle = "rgb(255,255,255,0.7)";
    maskContext.fillRect(0, 0, size.w, size.h);
    setIsCrop(true);
  }
  useEffect(() => {
    function drawLine(context, x1, y1, x2, y2) {
      context.beginPath();
      context.strokeStyle = "black";
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }

    const renderCtx = picCanvas.current.getContext("2d")
    const maskCtx=effectCanvas.current.getContext('2d')
    setContext(renderCtx)
    setMaskContext(maskCtx)


    // return function cleanup() {
    //   if (effectCanvas.current) {
    //     effectCanvas.current.removeEventListener("mousedown", handleMouseDown)
    //     effectCanvas.current.removeEventListener("mouseup", handleMouseUp)
    //     effectCanvas.current.removeEventListener("mousemove", handleMouseMove)
    //   }
    // };
  }, [context,maskContext]);

  return (
    <div className="min-h-min flex justify-center">
      <div ref={father} className="relative z-50 border-2 flex min-h-min justify-center">
        <canvas
          className={`absolute ${isCrop?" cursor-crosshair":""}`}
          width={size.w}
          height={size.h}
          ref={effectCanvas}
        ></canvas>
          <canvas className="absolute z-10" width={size.w} height={size.h} ref={picCanvas} />
      </div>
      <div className={`absolute top-3/4 w-full h-1/12 flex justify-center`}>
        <div className="btn-color w-48 flex items-center">
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
        <button className="btn-color w-48 mx-2" onClick={beganCrop}>
          Crop Picture
        </button>
        <button className="btn-color w-48 mx-2">Remove Background</button>
      </div>
        
      {withCrop && <img src={clipPic} alt="clip picture" />}
    </div>
  )
};

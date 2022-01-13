import React, { useEffect, useRef, useState } from "react";

export const ClipCanvas = ({ withCrop }) => {
  const picCanvas = useRef();
  const [size,setSize]=useState({w:300,h:300})
  const effectCanvas = useRef(null);
  const [context, setContext] = useState(null);
  
  useEffect(() => {
    let mouseDown = false;
    let paddingTop=0
    let paddingLeft=0
    let x = 0;
    let y = 0;

    function handleMouseDown(evt) {
      mouseDown = true;
      x = evt.offsetX;
      y = evt.offsetY
    }

    function handleMouseUp(evt) {
      if (mouseDown && context) {
        drawLine(context,x, y, evt.offsetX, evt.offsetY);
        x = 0;
        y = 0;
        mouseDown = false;
      }
    }

    function handleMouseMove(evt) {
      if (mouseDown && context) {
        // Draw our path
        drawLine(context, x, y, evt.offsetX, evt.offsetY);
        x = evt.offsetX
        y = evt.offsetY
        // context.beginPath();
        // context.moveTo(start.x, start.y);
        // context.lineTo(end.x, end.y);
        // context.strokeStyle = 'red';
        // context.lineWidth = 3;
        // context.stroke();
        // context.closePath();
      }
    }
    function drawLine(context, x1, y1, x2, y2) {
      context.beginPath();
      context.strokeStyle = "black";
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }

    if (effectCanvas.current) {
      const renderCtx = effectCanvas.current.getContext("2d");

      if (renderCtx) {
          
        effectCanvas.current.addEventListener("mousedown", handleMouseDown);
        effectCanvas.current.addEventListener("mouseup", handleMouseUp);
        effectCanvas.current.addEventListener("mousemove", handleMouseMove);
        
        // canvasOffsetLeft = effectCanvas.current.offsetLeft;
        // canvasOffsetTop = effectCanvas.current.offsetTop;

        setContext(renderCtx);
      }
    }

    return function cleanup() {
      if (effectCanvas.current) {
        effectCanvas.current.removeEventListener("mousedown", handleMouseDown);
        effectCanvas.current.removeEventListener("mouseup", handleMouseUp);
        effectCanvas.current.removeEventListener("mousemove", handleMouseMove);

        
      }
    };
  }, [context]);

  return (
    <div className="min-h-min flex justify-center">
      
        <div className="relative z-10 flex min-h-min justify-center">
          <canvas className="absolute top-10 border-2" width={400} height={400} ref={effectCanvas}></canvas>
        </div>
        {/* <div className="absolute inset-0 z-50 flex justify-center">
          <canvas width={300} height={300} ref={picCanvas} />
        </div> */}
      <div className="absolute top-3/4 w-full h-1/12 flex justify-center">
        <button className="btn-color w-48 mx-2">Open Picture</button>
        <button className="btn-color w-48 mx-2">Crop Picture</button>
        <button className="btn-color w-48 mx-2">Remove Background</button>
      </div>
      {withCrop && <img src={clipPic} alt="clip picture" />}
    </div>
  );
};

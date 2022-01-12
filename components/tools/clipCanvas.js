import React, { useEffect, useRef, useState } from "react";

export const ClipCanvas = ({ withCrop }) => {
  const picCanvas = useRef();
  const effectCanvas = useRef();
  const [clipPic, setClipPic] = useState(null);

  const mouseMove = (e) => {};
  const mouseDown = (e) => {};
  const mouseUp = (e) => {};

  useEffect(() => {
    const ctx = effectCanvas.current.getContext("2d");
    console.log(effectCanvas.current.width);
    ctx.strokeStyle = "rgb(0,0,0,0.5)";
    ctx.strokeRect(0, 0, 300, 300);
  }, []);
  return (
    <div className="min-h-[36rem]">
      <div className="relative w-full min-h-[32rem] my-2">
        <div className="absolute inset-0 z-10 flex justify-center">
          <canvas width={300} height={300}
            ref={effectCanvas}
            onMouseMove={(e) => mouseMove(e)}
            onMouseDown={(e) => mouseDown(e)}
            onMouseUp={(e) => mouseUp(e)}
          />
        </div>
        <div className="absolute inset-0 z-0 flex justify-center">
          <canvas width={300} height={300} ref={picCanvas} />
        </div>
      </div>
      {withCrop && <img src={clipPic} alt="clip picture" />}
      <div className="w-full h-1/12 flex justify-center">
        <button className="btn-color w-48 mx-2">Open Picture</button>
        <button className="btn-color w-48 mx-2">Crop Picture</button>
        <button className="btn-color w-48 mx-2">Remove Background</button>
      </div>
    </div>
  );
};

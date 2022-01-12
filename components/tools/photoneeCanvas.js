import React, { useEffect, useState } from 'react';



const Canvas = ({draw, height, width,modify,clipStatus,popup}) => {
    let isCroping=false
  const canvas = React.useRef();
const [clipObj,setClipObj]=useState({clipStatus:false,startP:[0,0],endP:[0,0]})
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    if(draw){
        draw(context);
    }
    if(modify){
        modify(context);
    }
  },[draw,modify]);
useEffect(()=>{
    const context = canvas.current.getContext('2d');
    context.clearRect(0, 0, context.width, context.height)
    context.beginPath()
    //遮罩层
    context.globalCompositeOperation = 'source-over'
    context.fillRect(0, 0, context.width, context.height)
    let x=clipObj.startP[0]
    let y=clipObj.startP[1]
    let w=clipObj.endP[0]
    let h=clipObj.endP[1]
    //画框
    context.globalCompositeOperation = 'destination-out'
    context.fillRect(x,y,w,h)
    //描边
    context.globalCompositeOperation = 'source-over'
    context.moveTo(x, y)
    context.lineTo(x + w, y)
    context.lineTo(x + w, y + h)
    context.lineTo(x, y + h)
    context.lineTo(x, y)
    // context.stroke()
    context.closePath()
    
},[clipObj])
useEffect(()=>{
    if(!isCroping){
        const clipCanvasCtx=canvas.current.getContext('2d')
        clipCanvasCtx.clearRect(
            0,
            0,
            canvas.current.clientWidth,
            canvas.current.clientHeight
          )
    }
},[isCroping])
  function mouseDown(e){
    console.log(clipObj)
    isCroping=true
    if(clipStatus){

        setClipObj({...clipObj,startP:[e.clientX-canvas.current.offsetLeft,e.clientY-canvas.current.offsetTop]})
    }
  // setClipObj({clipStatus:true,...clipObj})
        
  //   const down=ctx=>{
  //     // ctx.clearRect(e.clientX,e.clentY,0,0)
  //   }
  //   setImageData({...imageData,draw:down})
}
function mouseMove(e){
  // setClipObj({...clipObj,startP:[e.screenX,e.screenY],endP:[e.clientX,e.clientY],otherP:[e.pageX,e.pageY]})
    if(isCroping){
        setClipObj({...clipObj,endP:[e.clientX-canvas.current.offsetLeft,e.clientY-canvas.current.offsetTop]})
    }
    
      // clipObj={...clipObj,endP:[e.clientX,e.clientY]}
      
}
function mouseUp(e){
    isCroping=false
      setClipObj({...clipObj,endP:[e.clientX-canvas.current.offsetLeft,e.clientY-canvas.current.offsetTop]})

      popup(clipObj)
      // setClipObj({...clipObj,clipStatus:false})
      // console.log(clipObj)
}


  return (
      <>
          
          <canvas className='absolute inline-block'  ref={canvas} 
          onMouseMove={(e)=>mouseMove(e)} onMouseDown={(e)=>mouseDown(e)} onMouseUp={mouseUp}
          height={height} width={width} />
          <div className='left-0 absolute'>{
              clipStatus?(<p>{clipObj.endP[0]},{clipObj.endP[1]}</p>):""
              }
              
          </div>
      </>
    
  );
};

export default Canvas
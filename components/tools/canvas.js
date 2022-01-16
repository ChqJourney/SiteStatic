import React, { useEffect, useState } from 'react';



const Canvas = ({file,draw, height, width,modify,isJobDone}) => {
    
  const canvas = React.useRef();
  const [outputUrl,setOutputurl]=useState({url:'',text:''})
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    if(draw){
        draw(context);
    }
    if(modify){
        modify(context);
    }
    if(isJobDone&&draw&&modify&&context){
      console.log(canvas.current)
      const data=canvas.current.toDataURL()
      setOutputurl({url:data,text:`download ${file}`})
    }
  },[draw,modify,isJobDone]);
  // useEffect(()=>{
    
  //   if(isJobDone&&draw&&modify){
  //     const data=canvas.current.toDataUrl('image/jpeg', 1.0)
  //     setOutputurl({outputRrl:data,text:'download'})
  //   }
  // },[isJobDone,draw,modify])


  return (
      <>
          <div>

          <canvas   ref={canvas} 
          height={height} width={width}></canvas>
          </div>
          {isJobDone&&(<div className="w-full h-12 flex items-center justify-center">
        <a href={outputUrl.url??""} download={file}>{outputUrl.text??""}</a>
      </div>)}
      </>
    
  );
};

export default Canvas
import React, { useEffect, useState } from 'react';

const Canvas = ({file,draw, height, width,modify,output}) => {
    
  const canvas = React.useRef();
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    if(draw){
        draw(context);
    }
    if(modify){
        modify(context);
    }
    if(draw&&modify&&context){
      console.log(canvas.current)
      const data=canvas.current.toDataURL()
      output({url:data,text:`download remove-bg-${file} here`})
    }
  },[draw,modify]);
  // useEffect(()=>{
    
  //   if(isJobDone&&draw&&modify){
  //     const data=canvas.current.toDataUrl('image/jpeg', 1.0)
  //     setOutputurl({outputRrl:data,text:'download'})
  //   }
  // },[isJobDone,draw,modify])


  return (
      <>
        

          <canvas   ref={canvas} 
          height={height} width={width}></canvas>
        
         
      </>
    
  );
};

export default Canvas
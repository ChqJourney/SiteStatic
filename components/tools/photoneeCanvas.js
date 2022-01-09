import React, { useEffect, useState } from 'react';

const Canvas = ({draw, height, width,modify}) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    if(draw){
        draw(context);
    }
    if(modify){
        modify(context);
    }
  });

  

  return (
    <canvas className='absolute'  ref={canvas} 
    
    height={height} width={width} />
  );
};

export default Canvas
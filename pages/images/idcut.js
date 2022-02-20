/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { SizeBox } from "../../components/tools/sizeBox";

export default function IdCut() {
  const imageToCut = useRef();
  const cutRope = useRef();
  const paintBoard=useRef()
  const t = useTranslation("common");
  const [uploadedImage, setUploadedImage] = useState({
    url: "",
    naturalWidth: 0,
    naturalHeight: 0,
    width: 0,
    height: 0,
  });
  const handStop = (e) => {
    const info = imageToCut.current.getBoundingClientRect();
    console.log(uploadedImage);
  };
  const imageOnload = (e) => {
    setUploadedImage({
      ...uploadedImage,
      naturalWidth: e.target.naturalWidth,
      naturalHeight: e.target.naturalHeight,
      width: e.target.width,
      height: e.target.height,
    });
  };
  function imageSelected(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      if (selectedFile.type.match("image.*")) {
        console.log("file match");
        
        var reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (event) => {
          console.log("inreader");
          if (event.target.readyState == FileReader.DONE) {
            setUploadedImage({...uploadedImage,url:event.target.result})
          }
        };
      }
    }
  }
 
  return (
  <div className="container mx-auto mt-10 flex-col flex max-w-7xl">
        <div className="text-2xl font-medium text-gray-600 text-center">
          choose size
        </div>
        <div className="grid grid-cols-4 max-w-7xl gap-4 p-10">
          <SizeBox title={"1 inch"} description={"25 mm x 35 mm"} />
          <SizeBox title={"1 inch"} description={"25 mm x 35 mm"} />
          <SizeBox title={"1 inch"} description={"25 mm x 35 mm"} />
          <SizeBox title={"1 inch"} description={"25 mm x 35 mm"} />
        </div>
        <div className="max-w-7xl px-10">
          <div className="static lg:flex bg-gray-200 rounded-md p-2">
            <div className="p-4 m-4 bg-white rounded-md flex-col mx-auto relative overflow-auto flex  lg:w-3/12 items-center">
              <p className="top-2">uploaded picture</p>
              <div className="w-full h-full rounded-md border flex items-center border-gray-800">
                <img
                  src={uploadedImage.url}
                  onLoad={imageOnload}
                  ref={imageToCut}
                  className={` ${
                    uploadedImage.url ? "" : "hidden"
                  } z-10`}
                  alt="uploaded image"
                />
              </div>

              <Draggable onStop={handStop}>
                <div
                  ref={cutRope}
                  className={` border-8 ${
                    uploadedImage.url ? "" : "hidden"
                  } bg-transparent border-red-600 absolute z-30 rounded-sm  w-24 h-24`}
                ></div>
              </Draggable>
              
                <label className={`absolute cursor-pointer hover:text-sky-400 m-auto flex flex-col items-center ${uploadedImage.url?"hidden":""} left-0 right-0 top-1/4 text-center`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                  <span>click here to open images</span>
                <input type="file" className=" sr-only" onChange={imageSelected}/>
                </label>
              
            </div>
            <div className="p-4 m-4 bg-white relative rounded-md mx-auto flex-col flex w-full lg:w-9/12 justify-center items-center">
              <p>generated picture</p>
              <div className="border-dashed border relative rounded-sm border-gray-600 h-96 min-h-max  min-w-full">
                <canvas ref={paintBoard}/>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button onClick={()=>setUploadedImage({
    url: "",
    naturalWidth: 0,
    naturalHeight: 0,
    width: 0,
    height: 0,
  })}
            className="w-3/12 h-12 border mx-4 border-gray-500 bg-gray-100 rounded-2xl">
             New
            </button>
            <button className="w-3/12 h-12 border mx-4 border-gray-500 bg-slate-200 rounded-2xl">
             Generat
            </button>
          </div>
        </div>
      </div>
  );
}
export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    },
  };
};

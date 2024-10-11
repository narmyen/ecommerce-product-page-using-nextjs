import React from "react";
import SlideImage from "./SlideImage";
import Details from "./Details";

function ShowDetail() {
  return (
    <div className=" flex justify-center mt-8 gap-2 px-32 w-full">
      <SlideImage />
      <Details />
    </div>
  )
}

export default ShowDetail;
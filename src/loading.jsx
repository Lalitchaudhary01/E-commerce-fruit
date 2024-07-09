import React from "react";
import { ImSpinner6 } from "react-icons/im";

function Loading(){
  return <div className="grow text-3xl flex justify-center items-center">
    <ImSpinner6 className="animate-spin text-3xl text-orange-500"/>
  </div>
}

export default Loading;
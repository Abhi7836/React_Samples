import React from "react";
import ReactPlayer from "react-player";

export default function App() {
  return (
    <div className="App">
      <ReactPlayer
        controls
        width="450px"
        Height="200"
        url="https://www.youtube.com/watch?v=qM9Ma1Mc01w"
        onReady={() => {
          console.log("on Ready call back");
        }}
        onStart={() => {
          console.log("on Start call back");
        }}
        onPause={() => {
          console.log("on Pause call back");
        }}
        onEnded={() => {
          console.log("on Ended call back");
        }}
        onError={() => {
          console.log("on Error call back");
        }}
      />
    </div>
  );
}

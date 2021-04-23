import React from "react";
import { Button } from "react-bootstrap";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

export default function Tooltip() {
  const ColouredToolTip = () => {
    return <span style={{ color: "yellow" }}>coloured Tooltip, right</span>;
  };
  //const CustomChild = forwardRef((props, ref) => {
  //return <div ref={ref}>Fisrt line</div>;
  //});

  return (
    <div className="App">
      <Tippy
        position="left"
        arrow={false}
        delay={1000}
        content="arrow false, delay 1sec, left"
      >
        <Button variant="dark" className="py-2 mx-2 my-4" size="lg">
          Tooltip 1
        </Button>
      </Tippy>
      <Tippy
        content={<span style={{ color: "orange" }}>coloured Tooltip</span>}
      >
        <Button variant="dark" className="py-2 mx-2 my-4" size="lg">
          ToolTip 2
        </Button>
      </Tippy>
      <Tippy placement="right" content={<ColouredToolTip />}>
        <Button variant="dark" className="py-2 mx-2 my-4" size="lg">
          ToolTip 3
        </Button>
      </Tippy>
      {/*<Tippy content={<ColouredToolTip />}>
        <CustomChild />
  </Tippy>*/}
    </div>
  );
}

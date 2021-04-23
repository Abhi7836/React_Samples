import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//there are 6 posible positions for a toast notification
// there are 4 built in tyoes
toast.configure();

export default function Toast() {
  const notify = () => {
    toast("Basic Notification", { position: toast.POSITION.TOP_LEFT });
    toast.success("Sucess ,top right, autoclose 8sec", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000
    });
    toast.info("Info Notification", { position: toast.POSITION.TOP_CENTER });
    toast.warn("Warn Notification", { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("Error Notification,autoclose flase", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false
    });
    toast("Basic Notification", { position: toast.POSITION.BOTTOM_CENTER });
  };
  return (
    <Button block className="py-2 my-4" size="lg" onClick={notify}>
      Notify!
    </Button>
  );
}

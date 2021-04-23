import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function Modaldiy() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="outline-primary"
        block
        className="py-2 my-4"
        size="lg"
        onClick={() => setModalIsOpen(true)}
      >
        Open modal
      </Button>
      <Modal
        closeButton
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>modal title</h2>
        <p>modal body</p>
        <Button size="lg" onClick={() => setModalIsOpen(false)}>
          close modal
        </Button>
      </Modal>
    </div>
  );
}

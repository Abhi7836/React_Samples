import React from "react";
import "./bootstrap.min.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Modaldiy from "./components/Modaldiy";
import ToolTip from "./components/ToolTip";
import Datepicker from "./components/Datepicker";
import Player from "./components/Player";

export default function App() {
  return (
    <div>
      <Header />
      <main className="py-3 mx-5">
        <Toast />
        <Modaldiy />
        <ToolTip />
        <Datepicker />
        <Player />
      </main>
      <Footer />
    </div>
  );
}

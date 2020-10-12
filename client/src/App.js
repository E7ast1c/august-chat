import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import AsideSection from "./components/AsideSection";
import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";
import SetupSocket from "./mixins/sockets";

function App() {
  useEffect(() => {
    SetupSocket();
    console.log('effect');
  });

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <HeaderSection />
        </header>
        <div className="General">
          <aside className="Aside-section">
            <AsideSection />
          </aside>
          <main className="Main-section">
            <MainSection />
          </main>
        </div>
      </div>
      <footer className="footer">
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;

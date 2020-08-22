import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/HeaderSection.jsx'
import AsideSection from './components/AsideSection.jsx'
import SetupSocket from './mixins/sockets'


function App() {
  useEffect(() => {
    SetupSocket()
    console.log("effect")
  });

  return (<div className="App" >
        <header><HeaderSection /></header>
        <aside>
          <AsideSection/>
        </aside>
        <main>
            Main
        </main>
        <footer>
          Footer
        </footer>
  </div >
  );
}

export default App;
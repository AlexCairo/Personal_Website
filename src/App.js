import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import NavbarComponent from "./components/NavbarComponent";
import { useState } from "react";

function App() {

    const [ openNav, setOperNav ] = useState(false);
    const openNavFunction = () => setOperNav(!openNav);
    const closeNav = () => setOperNav(false);

  return (
    <>
      <NavbarComponent openNav = {openNav} closeNav = {closeNav} toggleNav = {openNavFunction} />
      <MainComponent openNav = {openNav} toggleNav = {openNavFunction}/>
      <FooterComponent />  
    </>
  );
}

export default App;

import "./App.css";
import Banner from "./component/Banner";
import ContactUs from "./component/ContactUs";
import NavBar from "./component/NavBar";
import Project from "./component/Project";
import Skills from "./component/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;

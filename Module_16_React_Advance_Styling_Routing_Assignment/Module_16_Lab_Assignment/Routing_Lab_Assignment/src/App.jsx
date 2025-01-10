
/*

    Task 1:
        • Set up a basic React Router with two routes: one for a Home page and one for
        anAbout page. Display the appropriate content based on the URL.
    Task 2:
        • Create a navigation bar using React Router’s Linkcomponent that allows users to
        switch between the Home, About, and Contact pages.

*/
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import GlobalStyles from "./Styles/GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  

    return (
      
      <BrowserRouter>
          <GlobalStyles />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>

    )
}

export default App

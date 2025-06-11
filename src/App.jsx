import Navbar from "./components/Navbar";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
// import Section4 from "./components/Sections/Section4";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";
import Section7 from "./components/Sections/Section7/indes";


function App() {

  return (
    <>
      <main className="bg-background-color overflow-x-hidden">
        <Navbar />

        <Section1 />

        <Section2/>

        <Section7/>

        <Section3/>

        <Section4 />

        <Section5/>

        <Section6/>
      </main>

    </>
  );
}

export default App;

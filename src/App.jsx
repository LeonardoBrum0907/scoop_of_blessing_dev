import Navbar from "./components/Navbar";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
// import Section4 from "./components/Sections/Section4";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";


function App() {

  return (
    <>
      <main className="bg-green-main overflow-x-hidden">
        <Navbar />

        <Section1 />

        <Section2 id="section-2" />

        <Section3 id="section-3" />

        <Section4 id="section-4" />

        <Section5 id="section-5" />

        <Section6 id="section-6" />
      </main>

    </>
  );
}

export default App;

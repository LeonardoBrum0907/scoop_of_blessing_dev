import Section from "../../SectionLayout"
import proposito from "/assets/imagenspipo/img_proposito.png";

const Section4 = () => {

      return (
            <Section id="section-4" className="bg-background-color flex flex-col items-center justify-center">
                  <h1 className=" text-orange title text-[4rem] w-5/6 text-center personalized-tracking">Crafted with care. Shared with love.</h1>
                  <p className=" text-text-color w-5/6 text-[0.9rem] text-center">We craft outstanding ice cream to fund global missions, passionately dedicated to sharing the Gospel with over 3 billion unreached people. Because genuine ice cream blesses others.</p>
                  <div className="w-full"><img src={proposito} alt="imagem proposito" /></div>
            </Section>
      )
}

export default Section4
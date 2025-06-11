import Section from "../../SectionLayout"
import infoimg01 from "/assets/imagenspipo/img_infografico_01.png";
import infoimg02 from "/assets/imagenspipo/img_infografico_02.png";
import infoimg03 from "/assets/imagenspipo/img_infografico_03.png";
import infoimg04 from "/assets/imagenspipo/img_infografico_04.png";
import infoimg05 from "/assets/imagenspipo/img_infografico_05.png";
import infoimg06 from "/assets/imagenspipo/img_infografico_06.png";


const Section7 = () => {

  return (
    <Section id="section-7 flex flex-col">
      <div className="flex flex-col gap-20">

        <div className="flex justify-center">
          <div className="w-2/3 flex flex-row gap-4">
            <img src={infoimg01} alt="imagem de frutas" className="w-1/2" />
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className=" text-start title text-text-color text-[2rem]">WE HAVE IT ALL… EXCEPT COWS!</h1>
              <p className="text-text-color text-start">We don’t raise cattle, but everything else—we make with our own hands.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-2/3">
            <div className="flex flex-row justify-center items-center">
              <div className="w-1/2 flex flex-col gap-4">
                <h1 className="title text-start text-text-color text-[2rem]">A SPARK CHANGES EVERYTHING.</h1>
                <p className="text-text-color text-start w-2/4">It all starts with an idea: a smell, a memory, a trip to the farmers market, or a tip from Grandma or a famous chef.</p>
              </div>
              <img src={infoimg02} alt="imagem de uma pessoa pensando" className="w-2/6" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-2/3">
            <div className="flex flex-row justify-center items-center gap-6">
              <img src={infoimg03} alt="imagem de um livro de receita" className="w-1/2" />
              <div className="flex flex-col gap-4 w-2/3">
                <h1 className="text-text-color title text-start text-[2rem]">CREATION.</h1>
                <p className="text-text-color text-start">We write everything down, run tests, explore combinations, and fine-tune recipes. Each flavor is born from research, trial, and passion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-2/3">
            <div className="flex flex-row justify-center items-center">
              <div className="w-2/3 flex flex-col gap-4">
                <h1 className="title text-start text-text-color text-[2rem]">PRODUCTION.</h1>
                <h2 className="text-text-color text-start w-4/5 font-thin">We make EVERYTHING here:</h2>
                <ul className="text-text-color text-start list-disc list-inside">
                  <li>Pasteurized bases</li>
                  <li>Fresh fruit jams</li>
                  <li>Nut pastes</li>
                  <li>Crunchy toppings</li>
                </ul>
              </div>
              <div>
                <img src={infoimg04} alt="imagem de processo de produção" className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-2/3">
            <div className="flex flex-row justify-center items-center gap-6">
              <img src={infoimg05} alt="imagem de pessoas chupando sorvete" className="w-3/5" />
              <div className="flex flex-col gap-4 w-2/3">
                <h1 className="text-text-color title text-start text-[2rem]">FINAL RESULT.</h1>
                <p className="text-text-color w-1/2 text-justify">Artisanal, fresh ice cream—made right in front of you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-3/4 flex flex-row gap-4 items-center">
            <div className="w-1/2 flex justify-end items-center h-1/2 flex-col gap-3">
              <div className="flex gap-2">
                <div className="bg-[#F6A314] rounded-xl w-9 h-10 translate-y-[-50%]"></div>
                <div className="bg-[#E94C32] rounded-2xl w-12 h-14"></div>
              </div>
              <div className="flex gap-1">
                <div className="bg-[#F2E2D9] rounded-full w-6 h-6 translate-y-[-50%]"></div>
                <div className="bg-[#F2E2D9] rounded-full w-12 h-12"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h1 className=" text-start title text-text-color text-[2rem]">FROM SCRATCH TO YOUR HANDS.
              </h1>
              <h2 className="text-text-color text-start uppercase title ml-[0.1rem]">Every single day.</h2>
            </div>
            <img src={infoimg06} alt="sorvete" className="w-1/3" />
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Section7
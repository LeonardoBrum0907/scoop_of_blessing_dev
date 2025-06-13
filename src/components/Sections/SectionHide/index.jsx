import Section from "../../SectionLayout";
import infoimg01 from "/assets/imagenspipo/img_infografico_01.png";
import infoimg02 from "/assets/imagenspipo/img_infografico_02.png";
import infoimg03 from "/assets/imagenspipo/img_infografico_03.png";
import infoimg04 from "/assets/imagenspipo/img_infografico_04.png";
import infoimg05 from "/assets/imagenspipo/img_infografico_05.png";
import infoimg06 from "/assets/imagenspipo/img_infografico_06.png";
//import bg_mobile from "/assets/imagenspipo/image_mobile.png";
//import bg_desktop from "/assets/imagenspipo/image_desktop.png";


const SectionHide = ({isOpen}) => {
  console.log(isOpen)

  return (
    <Section id="section-hide" className={`flex justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="flex flex-col justify-center items-center gap-[10rem] xl:gap-[0rem] py-[6rem] xl:py-[0] xl:pb-[4rem] bg-guiamobile bg-center bg-no-repeat bg-[length:1rem_100%]
      xl:bg-guiadesktop xl:bg-no-repeat xl:bg-[center_top_13rem] xl:bg-[length:82%_74%] xl:max-w-[1300px]">

        <div className="flex justify-between items-center bg-background-color xl:bg-transparent py-6 xl:py-0">
          <div className=" flex flex-row justify-center items-center gap-[1rem] xl:gap-0 xl:h-[14rem]">
            <img src={infoimg01} alt="imagem de frutas" className="w-[10rem] h-[8rem] xl:h-full xl:w-[35%]" />
            <div className="flex flex-col items-center justify-center gap-[1rem] xl:w-[50%] xl:px-[2rem]">
              <h1 className="text-start font-bold leading-none text-text-color text-[1.6rem] xl:text-[2rem] tracking-tight">WE HAVE IT ALL… EXCEPT COWS!</h1>
              <p className="text-black text-start">We don’t raise cattle, but everything else—we make with our own hands.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-background-color xl:bg-transparent py-6 xl:py-0 xl:mt-[3rem]">
          <div className="xl:w-2/3">
            <div className="flex flex-row justify-center xl:justify-end items-center gap-[2rem] xl:gap-0">
              <div className="w-1/2 xl:w-2/3 flex flex-col gap-4 xl:pl-[6rem]">
                <h1 className="font-bold leading-none text-start text-text-color text-[1.6rem] xl:text-[2rem] tracking-tight">A SPARK CHANGES EVERYTHING.</h1>
                <p className="text-black text-start xl:w-3/4">It all starts with an idea: a smell, a memory, a trip to the farmers market, or a tip from Grandma or a famous chef.</p>
              </div>
              <img src={infoimg02} alt="imagem de uma pessoa pensando" className="w-2/6 xl:w-[11rem] 2xl:w-[10rem]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-background-color xl:bg-transparent xl:bg-none py-6 xl:py-0 xl:mt-[4rem]">
          <div className="xl:w-2/3">
            <div className="flex flex-row justify-center items-center gap-8">
              <img src={infoimg03} alt="imagem de um livro de receita" className="w-1/2 xl:w-2/6" />
              <div className="flex flex-col gap-4 xl:w-4/6">
                <h1 className="text-text-color font-bold leading-none text-start text-[1.6rem] xl:text-[2rem] tracking-tight">CREATION.</h1>
                <p className="text-black text-start xl:w-3/4">We write everything down, run tests, explore combinations, and fine-tune recipes. Each flavor is born from research, trial, and passion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-background-color xl:bg-transparent py-6 xl:py-0 xl:mt-[6rem] 2xl:mt-[5rem]">
          <div className="xl:w-2/3">
            <div className="flex flex-row justify-center items-center">
              <div className="w-2/3 flex flex-col justify-center items-center gap-4 xl:gap-0">
                <h1 className="font-bold leading-none text-start text-text-color text-[1.6rem] xl:text-[2rem] tracking-tight">PRODUCTION.</h1>
                <h2 className="text-text-color text-wrap md:text-center xl:text-start w-4/5 xl:w-full font-thin">We make EVERYTHING here:</h2>
                <ul className="text-black text-start list-disc list-inside">
                  <li>Pasteurized bases</li>
                  <li>Fresh fruit jams</li>
                  <li>Nut pastes</li>
                  <li>Crunchy toppings</li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <img src={infoimg04} alt="imagem de processo de produção" className="h-[36%] xl:h-full xl:w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-background-color xl:bg-transparent py-6 xl:py-0 xl:mt-[3rem]">
          <div className="xl:w-2/3">
            <div className="flex flex-row justify-center items-center gap-6">
              <img src={infoimg05} alt="imagem de pessoas chupando sorvete" className="w-2/4 xl:w-3/5" />
              <div className="flex flex-col gap-[1rem] w-2/3">
                <h1 className="text-text-color font-bold leading-none text-start text-[1.6rem] xl:text-[2rem] tracking-tight">FINAL RESULT.</h1>
                <p className="text-black xl:w-1/2">Artisanal, fresh ice cream—made right in front of you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-background-color xl:bg-transparent py-6 xl:py-0 xl:mt-[3rem]"> 
          <div className="xl:w-3/4 flex flex-row gap-[1rem] items-center justify-center">
            <div className="w-1/2 flex justify-center items-center xl:items-end h-1/2 flex-col gap-3">
              <div className="flex gap-2">
                <div className="bg-[#F6A314] rounded-xl w-9 h-10 translate-y-[-50%]"></div>
                <div className="bg-[#E94C32] rounded-2xl w-12 h-14"></div>
              </div>
              <div className="flex gap-1">
                <div className="bg-[#F2E2D9] rounded-full w-6 h-6 translate-y-[-50%]"></div>
                <div className="bg-[#F2E2D9] rounded-full w-12 h-12"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-background-color xl:py-4">
              <h1 className="text-start pl-[1rem] font-bold leading-none text-text-color text-[1.6rem] xl:pl-[0rem] xl:text-[2rem] tracking-tight">FROM SCRATCH TO YOUR HANDS.</h1>
              <h2 className="text-text-color text-start pl-[1rem] uppercase font-bold leading-none xl:pl-[0rem]">Every single day.</h2>
            </div>
            <img src={infoimg06} alt="sorvete" className="w-1/3 xl:w-2/6" />
          </div>
        </div>

      </div>
    </Section>
  )
}

export default SectionHide
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
import Section from '../../SectionLayout';
import ilustracao from "/assets/imagenspipo/img_ilustracao.png";


const Section1 = () => {
      // useGSAP(() => {
      //       gsap.fromTo('.fade-in', {
      //             opacity: 0,
      //             y: 100,
      //             delay: 0.5,
      //             duration: 0.2,
      //       }, {
      //             opacity: 1,
      //             y: 0,
      //             delay: 0.5,
      //             duration: 0.2,
      //       })
      // }, [])

      return (
            <section id="section-1" className="flex flex-col sm:flex-row w-full mt-[94px] items-center justify-center gap-3 pb-4">
                  <div className=''><h2 className='text-purple md:text-3xl font-light text-center'>WHERE EVERY <b>SCOOP</b></h2></div>
                  <div className='w-3/4 sm:w-2/4'><img src={ilustracao} alt="imagem de ilustraçao" /></div>
                  <div className=''><h2 className='text-purple md:text-3xl font-light text-center'>TELLS A <b>STORY</b></h2></div>
            </section>
      )
}

export default Section1
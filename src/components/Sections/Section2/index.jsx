import { useState } from 'react';
import Section from '../../SectionLayout';
import sorveteimg from "/assets/imagenspipo/img_sorvetes_01.png";
import SectionHide from '../SectionHide/indes';

const Section2 = () => {
      const [isOpen, setIsOpen] = useState(false)

      // const el = React.useRef();
      // const tl = React.useRef();

      // React.useLayoutEffect(() => {
      //       gsap.registerPlugin(useGSAP, ScrollTrigger);

      //       gsap.to('.left', {
      //             x: 0,
      //             opacity: 1,
      //             scrollTrigger: {
      //                   trigger: '.animation',
      //                   start: "top bottom",
      //                   end: "80% 90%",
      //                   scrub: true,
      //                   // markers: true,
      //             },
      //       })

      //       const ctx = gsap.context(() => {
      //             tl.current = gsap.timeline({
      //                   scrollTrigger: {
      //                         trigger: ".animation-timeline",
      //                         scrub: true,
      //                         // markers: true,
      //                         start: "top bottom",
      //                         end: "80% 90%",
      //                   }
      //             })
      //                   .fromTo("#animation-item-1", {
      //                         opacity: 0,
      //                         y: 160,
      //                   }, {
      //                         opacity: 1,
      //                         y: 0,
      //                   })
      //                   .fromTo("#animation-item-2", {
      //                         opacity: 0,
      //                         y: 160,
      //                   }, {
      //                         opacity: 1,
      //                         y: 0,
      //                   })
      //             // .fromTo("#animation-item-3", {
      //             //       opacity: 0,
      //             //       x: 160,
      //             // }, {
      //             //       opacity: 1,
      //             //       x: 0,
      //             // })
      //       }, el)

      //       return () => {
      //             gsap.killTweensOf('.animation-timeline');
      //       }
      // }, [])
      return (
            <>
                  <Section id="section-2" className="bg-background-color flex flex-col md:flex-row">
                        <div className='flex flex-col items-center'>
                              <h1 className='text-orange text-[4rem] title mb-4 personalized-tracking'>A scoop of our story</h1>
                              <p className='text-text-color'>Think of us as your emotional support scoop — handcrafted with passion, scooped with pride, and taste-tested (maybe too much) for your happiness. Made with natural ingredients and plenty of love. Take a peek at some of our processes below.</p>
                              <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='text-orange border-4 border-orange rounded-full py-2 px-6 uppercase tracking-[0.3rem] mt-[3rem] h-[4rem]'>FIND OUT MORE</button>
                        </div>
                        <div className='md:w-2/4 flex-shrink-0'>
                              <img src={sorveteimg} alt="imagem do sorvete" className="w-[100%]" />
                        </div>
                  </Section>
                  <SectionHide isOpen={isOpen}/>
            </>
      )
}

export default Section2
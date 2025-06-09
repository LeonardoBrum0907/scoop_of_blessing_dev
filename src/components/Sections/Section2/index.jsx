import Section from '../../SectionLayout';
import sorveteimg from "/assets/imagenspipo/img_sorvetes_01.png";

const Section2 = () => {
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
            <Section id="section-2" className="bg-background-color flex gap-8">
                  <div className='flex flex-col gap-6'>
                        <h1 className='text-orange text-[4rem] title'>A scoop of our story</h1>
                        <p className='text-text-color'>Think of us as your emotional support scoop — handcrafted with passion, scooped with pride, and taste-tested (maybe too much) for your happiness. Made with natural ingredients and plenty of love. Take a peek at some of our processes below.</p>
                        <button className='border-2 border-orange px-4 py-2 rounded-full text-orange tracking-widest uppercase'>find out more</button>
                  </div>
                  <div className='w-2/4 flex-shrink-0'>
                        <img src={sorveteimg} alt="imagem do sorvete" className="w-[100%]"/>
                  </div>
            </Section>
      )
}

export default Section2
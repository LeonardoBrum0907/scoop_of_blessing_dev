import Section from '../../SectionLayout';

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
            <Section id="section-2" className="bg-blue-700 flex flex-col gap-9 relative">
                  <h1>SESSÃO 2</h1>
            </Section>
      )
}

export default Section2
import Section from '../../SectionLayout';


const Section3 = () => {

   // React.useLayoutEffect(() => {
   //       gsap.registerPlugin(useGSAP, ScrollTrigger);

   //       gsap.context(() => {
   //             tl.current = gsap.timeline({
   //                   scrollTrigger: {
   //                         trigger: ".animation-timeline",
   //                         scrub: true,
   //                         // markers: true,
   //                         start: "top bottom",
   //                         end: "70% 90%",
   //                   }
   //             })
   //                   .fromTo("#animation-to-right", {
   //                         opacity: 0,
   //                         x: -160,
   //                   }, {
   //                         opacity: 1,
   //                         x: 0,
   //                   })
   //                   .fromTo("#animation-to-left", {
   //                         opacity: 0,
   //                         x: 160,
   //                   }, {
   //                         opacity: 1,
   //                         x: 0,
   //                   })
   //       }, element)

   //       return () => {
   //             gsap.killTweensOf('.animation-timeline');
   //       }
   // }, [])

   return (
      <div className='bg-[url("/assets/imagenspipo/img_video_bg.png")] bg-cover bg-center w-full flex justify-center'>
         <Section id="section-3" className="flex items-center justify-center md:justify-end gap-4">
            <div className='md:w-2/5 bg-background-color flex flex-col items-center p-8 rounded-[2rem] md:bg-transparent'>
               <h1 className='mb-4 title text-pink'>Team delicious</h1>
               <p className='text-text-color'>Scoop of Blessing is a Brazilian-born (Matteo Sorveteria Criativa), award-winning craft ice cream company, now in the U.S., creating natural ice creams while empowering individuals with disabilities through strategic partnerships.</p>
               {/* <button className=' text-white bg-pink rounded-full py-2 px-6 uppercase tracking-[0.3rem]'>See the Magic Behind the Cone</button> */}
            </div>
         </Section>
      </div>
   )
}

export default Section3
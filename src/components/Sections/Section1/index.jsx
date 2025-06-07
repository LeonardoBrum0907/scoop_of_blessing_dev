// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
import Section from '../../SectionLayout';

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
            <Section id="section-1" className="mt-[5rem]">

                  <h1 className='title text-orange text-[7rem]'>A scoop of our story</h1>
                  <p className='text-text-color'>Think of us as your emotional support scoop — handcrafted with passion, scooped with pride, and taste-tested (maybe too much) for your happiness. Made with natural ingredients and plenty of love. Take a peek at some of our processes below.</p>
            </Section>
      )
}

export default Section1
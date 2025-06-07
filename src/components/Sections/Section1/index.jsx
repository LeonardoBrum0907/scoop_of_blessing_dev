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
                  <h1>SESSÃO 1</h1>
            </Section>
      )
}

export default Section1
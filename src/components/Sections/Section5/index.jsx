import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from "react";
import Section from "../../SectionLayout";
import cafeteira from "/assets/images/cafeteira.png";
import calendario from "/assets/images/calendario.png";
import losangulo from "/assets/images/grafismo_amarelo.png";


const Section5 = () => {

      // React.useLayoutEffect(() => {
      //       gsap.registerPlugin(useGSAP, ScrollTrigger);

      //       gsap.to('.up-section-5', {
      //             y: 0,
      //             opacity: 1,
      //             scrollTrigger: {
      //                   trigger: '.section-5',
      //                   start: "top bottom",
      //                   end: "90% 90%",
      //                   scrub: true,
      //                   // markers: true,
      //             },
      //       })
      //       gsap.to('.right-section-5', {
      //             x: 0,
      //             opacity: 1,
      //             scrollTrigger: {
      //                   trigger: '.section-5',
      //                   start: "top bottom",
      //                   end: "90% 90%",
      //                   scrub: true,
      //                   // markers: true,
      //             },
      //       })
      // }, [])

      return (
            <Section id="section-5" className="bg-blue-500">
                  <h1>SESSÃO 5</h1>
            </Section>
      )
}

export default Section5
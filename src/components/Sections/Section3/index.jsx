import emailjs from '@emailjs/browser';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from "react";
import Input from "../../Input";
import Section from '../../SectionLayout';
import brasileiroEmKaty from "/assets/images/brasileiro_katy.png";
import cafezinho from "/assets/images/cafezinho.png";


const Section3 = () => {
      const element = React.useRef();
      const tl = React.useRef();
      const [name, setName] = React.useState('');
      const [email, setEmail] = React.useState('');
      const [phone, setPhone] = React.useState('');
      const [instagram, setInstagram] = React.useState('');

      function sendEmail(e) {
            e.preventDefault();

            if (name === "" || email === "" || phone === "" || instagram === "") {
                  alert("Preencha todos os campos");
                  return;
            }

            const templateParams = {
                  from_name: name,
                  phone: phone,
                  email: email,
                  instagram: instagram

            }

            emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_USER_ID)
            .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
                  setName('');
                  setEmail('');
                  setPhone('');
                  setInstagram('');
                  alert("Dados enviados com sucesso!");
            }, (err) => {
                  console.log('ERRO:', err);
                  alert("Tente novamente mais tarde.");
            })
      }

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
            <Section id="section-3" className="bg-red-500">
                  <h1>SESSÃO 3</h1>
            </Section>
      )
}

export default Section3
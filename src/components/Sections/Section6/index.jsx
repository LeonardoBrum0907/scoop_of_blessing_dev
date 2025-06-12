// import React from "react";

import Section from "../../SectionLayout"
import logo from "/logo.png";
import icon_phone from "/assets/imagenspipo/logo_whatsapp.png"
import icon_email from "/assets/imagenspipo/icon_email.png"
import icon_instagram from "/assets/imagenspipo/logo_instagram.png"
import icon_youtube from "/assets/imagenspipo/logo_youtube.png"
import icon_facebook from "/assets/imagenspipo/logo_facebook.png"
import icon_tiktok from "/assets/imagenspipo/logo_tiktok.png"

//import MapboxGL from "@react-native-mapbox-gl/maps"
const Section6 = () => {

      // React.useLayoutEffect(() => {
      //       gsap.registerPlugin(useGSAP, ScrollTrigger);

      //       gsap.to('.fade-down-section-6', {
      //             opacity: 1,
      //             scrollTrigger: {
      //                   trigger: '.section-6',
      //                   start: "40% bottom",
      //                   end: "90% 90%",
      //                   scrub: true,
      //                   // markers: true,
      //             },
      //       })
      // }, [])

      return (
            <Section id="section-6" className="flex flex-col gap-[7rem]">
                  <div className="flex flex-col justify-center items-center gap-[4rem] lg:flex-row px-[2rem] lg:px-0">
                        <div id="map" className="h-[45rem] w-full lg:w-[50%] bg-white rounded-3xl flex items-center justify-center">
                              <h1 className="">MAPA</h1>
                        </div>
                        <div className="h-[45rem] w-full lg:w-[50%] bg-white rounded-3xl flex flex-col items-center justify-center gap-2 p-[3rem] 2xl:p-[5rem] 2xl:text-[1.5rem]">
                              <div className="flex w-full flex-col items-start sm:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.6rem] gap-[0.5rem]">
                                    <div className="flex items-center gap-[1rem]">
                                          <img className="h-[75%]" src={icon_phone} />
                                          <p className=" h-[75%] 2xl:h-[100%]">65 3634.1604</p>
                                    </div>
                                    <div className="flex items-center gap-[1rem]">
                                          <img className="h-[75%]" src={icon_phone} />
                                          <p className="h-[75%] 2xl:h-[100%]">65 98415.7999</p>
                                    </div>
                                    <div className="flex items-center gap-[1rem] pb[3rem]">
                                          <img className="h-[75%]" src={icon_email} />
                                          <p className="h-[75%] 2xl:h-[100%]">mail@matteosorveteriacriativa.com</p>
                                    </div>
                              </div>
                              <form className="w-full" action="" method="post">
                                    <div className="">
                                          <label className="block my-2" htmlFor="nome">Nome:</label>
                                          <input className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight h-[3rem]" type="text" id="nome" name="nome" required="required" border="1px" />
                                    </div>
                                    <div className="2xl:flex gap-[1rem]">
                                          <div className="2xl:w-[50%]">
                                                <label className="block my-2" htmlFor="email">E-mail:</label>
                                                <input className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight h-[3rem]" type="email" id="email" name="email" required="required" />
                                          </div>
                                          <div className="2xl:w-[50%]">
                                                <label className="block my-2" htmlFor="phone">Telefone:</label>
                                                <input className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight h-[3rem]" type="tel" id="phone" name="phone" required="required" />
                                          </div>
                                    </div>
                                    <div>
                                          <label className="block my-2" htmlFor="msg">Mensagem:</label>
                                          <textarea className="appearance-none focus:outline-none border-2 border-gray-300 rounded w-full py-2 px-3 leading-tight resize-none h-[9rem]" id="msg"></textarea>
                                    </div>
                                    <div className="flex justify-center items-center">
                                          <input className="text-orange border-4 border-orange rounded-full py-2 px-6 uppercase tracking-[0.3rem] mt-[1rem] h-[4rem]" type="submit" value="SEND"></input>

                                    </div>
                              </form>
                        </div>
                  </div>
                  <footer className="flex flex-col md:flex-row justify-between items-center gap-[3rem]">
                        <div className="md:w-[33%] text-center lg:text-justify">
                              <p className="text-orange">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <div className="md:w-[33%] flex justify-center">
                              <img src={logo} className="h-[3rem] lg:h-[4.5rem]" alt="Scoop of Blessing" />
                        </div>
                        <div className="md:w-[33%] flex justify-center lg:justify-end items-center gap-[2rem] xl:gap-[3rem]">
                              <img className="h-[1.6rem] sm:h-[2rem]" src={icon_instagram} alt="icone instagram" />
                              <img className="h-[1.6rem] sm:h-[2rem]" src={icon_youtube} alt="icone youtube" />
                              <img className="h-[1.6rem] sm:h-[2rem]" src={icon_facebook} alt="icone facebook" />
                              <img className="h-[1.6rem] sm:h-[2rem]" src={icon_tiktok} alt="icone tiktok" />
                        </div>
                  </footer>
            </Section>
      )
}
export default Section6
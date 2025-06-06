// import React from "react";
import grafismo02 from "/assets/images/grafismo_02.png";
import icone03 from "/assets/images/icone_03.png";
import saibaMais from "/assets/images/saiba_mais.png";

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
            <footer id="section-6" className="section-6 bg-yellow-50 flex flex-col sm:flex-row gap-[3rem] justify-center items-center relative py-20 sm:py-40 px-4">
                  <div className="w-1/2 sm:w-[15%] shrink-0 flex justify-center">
                        <img src={saibaMais} />
                  </div>
                  <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-col sm:flex-row gap-[1rem] ">
                              <a href="https://www.instagram.com/cafecomprosatexas/" target="_blank" className="flex items-center gap-[1rem] hover:scale-105 ease-in-out duration-200">
                                    <img src={icone03} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>@cafecomprosatexas</p>
                              </a>
                              {/* <a href="https://www.instagram.com/cafecomprosatexas/" target="_blank" className="flex items-center gap-[1rem] hover:scale-105 ease-in-out duration-200">
                                    <img src={icone02} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>@cafecomprosatexas</p>
                              </a> */}
                        </div>
                        {/* <div className="flex flex-col sm:flex-row gap-[1rem]">
                              <a href="https://www.instagram.com/cafecomprosatexas/" target="_blank" className="flex items-center gap-[1rem] hover:scale-105 ease-in-out duration-200">
                                    <img src={icone03} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>@cafecomprosatexas</p>
                              </a>
                              <a href="https://www.instagram.com/cafecomprosatexas/" target="_blank" className="flex items-center gap-[1rem] hover:scale-105 ease-in-out duration-200">
                                    <img src={icone04} className="w-[2.5rem] h-[2.5rem]" />
                                    <p>@cafecomprosatexas</p>
                              </a>
                        </div> */}
                  </div>
                  <img
                        src={grafismo02}
                        className="hidden sm:block absolute top-[-12.5%] right-[-2%]"
                  />
                  <img
                        src={grafismo02}
                        className="hidden sm:block absolute bottom-0 left-[-3%]"
                  />
            </footer>
      )
}

export default Section6
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import React from "react";
import Section from "../../SectionLayout";
// import cafeteira from "/assets/images/cafeteira.png";
// import calendario from "/assets/images/calendario.png";
// import losangulo from "/assets/images/grafismo_amarelo.png";

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


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
            <Section id="section-5" className="flex flex-col sm:flex-row gap-4">
                  <div className="ring-1 ring-black sm:w-[30%]">
                  <h1 className="title text-pink text-[5rem] sm:text-[7rem]">United to Bless</h1>
                  <p className="mt-[5rem] ">At Scoop of Blessing, we don’t scoop alone. Our partners walk with us in the mission to bless lives through ice cream — from training programs to global outreach. Together, we turn purpose into action, one scoop at a time.</p>
                  </div>
                  <div className="ring-1 ring-black md:w-[70%]">
                  <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        cssMode={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <div>Slide 1</div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div>Slide 2</div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div>Slide 3</div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div>Slide 4</div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div>Slide 5</div>
                        </SwiperSlide>
                  </Swiper>
                  </div>

            </Section>
      )
}

export default Section5
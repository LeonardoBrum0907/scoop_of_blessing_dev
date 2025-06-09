import Section from "../../SectionLayout";

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
            <Section id="section-5" className="flex flex-col xl:flex-row justify-center">
                  <div className="ring-1 ring-black w-full ">
                        <h1 className="title text-pink text-[5rem] xl:text-[7rem]">United to Bless</h1>
                        <p className="mt-[2rem] text-text-color">At Scoop of Blessing, we don’t scoop alone. Our partners walk with us in the mission to bless lives through ice cream — from training programs to global outreach. Together, we turn purpose into action, one scoop at a time.</p>
                  </div>
                  <div className="ring-1 ring-black xl:w-3/5">
                        <Swiper
                              slidesPerView={1}
                              spaceBetween={20}
                              loop={true}
                              cssMode={true}
                              navigation={true}
                              modules={[Navigation]}
                              className="mySwiper"
                              breakpoints={{
                                    640: {
                                          slidesPerView: 2,
                                          spaceBetween: 20,
                                    },
                                    768: {
                                          slidesPerView: 2,
                                          spaceBetween: 40,
                                    },
                              }}
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
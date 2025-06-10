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
            <Section id="section-5" className="flex flex-col xl:flex-row justify-center gap-[3rem] xl:gap-[2rem]">
                  <div className="w-full flex flex-col items-center pt-[3rem]">
                        <h1 className="title text-pink text-[5rem] xl:text-[5rem] 2xl:text-[7rem] pl-[3rem] pr-[3rem] pb-[1rem]">United to Bless</h1>
                        <p className="mt-[2rem] text-text-color pl-[3rem] pr-[3rem] 2xl:pr-[5rem]">At Scoop of Blessing, we don’t scoop alone. Our partners walk with us in the mission to bless lives through ice cream — from training programs to global outreach. Together, we turn purpose into action, one scoop at a time.</p>
                        <button className='text-pink border-4 border-pink rounded-full py-2 px-6 uppercase tracking-[0.3rem] mt-[3rem] h-[4rem]'>FIND OUT MORE</button>
                  </div>
                  <div className="xl:w-3/5 flex justify-between">
                        <Swiper
                              slidesPerView={1}
                              loop={true}
                              cssMode={true}
                              navigation={true}
                              modules={[Navigation]}
                              className="mySwiper"
                              breakpoints={{
                                    1920: {
                                          slidesPerView: 2,
                                          spaceBetween: 20,
                                    },
                                    2560: {
                                          slidesPerView: 3,
                                          spaceBetween: 20,
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
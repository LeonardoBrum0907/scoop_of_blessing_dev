

const Section4 = () => {

      // React.useLayoutEffect(() => {
      //       gsap.registerPlugin(useGSAP, ScrollTrigger);
      //       gsap.to('.left', {
      //             x: 0,
      //             opacity: 1,
      //             scrollTrigger: {
      //                   trigger: '.animation',
      //                   start: 'top center',
      //                   end: 'center 300px',
      //                   scrub: true,
      //                   markers: true,
      //             },
      //       })

      //       return () => {
      //             gsap.killTweensOf('.left');
      //       }
      // }, [])

      return (
            <section id="section-4" className="section flex sm:block">
                  {/* <iframe src="//lightwidget.com/widgets/0dcc0a39a8ee5f949acc3005adb67faa.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */}
                  <iframe
                        src="//lightwidget.com/widgets/0dcc0a39a8ee5f949acc3005adb67faa.html"
                        title="Instagram Feed"
                        className="lightwidget-widget"
                        frameBorder="0"
                        scrolling="no"
                        style={{
                              width: '100%',
                              // height: '600px', // ajuste o tamanho como desejar
                              border: 'none',
                              overflow: 'hidden'
                        }}
                  ></iframe>
                  {/* <div className="sm:h-[50%] sm:w-[100%] flex flex-col sm:flex-row relative">
                        <img
                              src={imagem03}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem04}
                              alt="grupo de mulheres amigas assistindo esportes em casa tomando bebida"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem05}
                              alt="equipe trabalhando junto em um projeto"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem06}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <p className="absolute top-[50%] sm:top-[48%] left-[20%] sm:left-[33.5%] text-white">
                              evento dia 07
                        </p>
                  </div>
                  <div className="sm:h-[50%] sm:w-[100%] flex flex-col sm:flex-row">
                        <img
                              src={imagem07}
                              alt="equipe trabalhando junto em um projeto"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem08}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem09}
                              alt="grupo de mulheres amigas assistindo esportes em casa tomando bebida"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                        <img
                              src={imagem10}
                              alt="pessoas bebendo café em uma cafeteria"
                              className="w-full sm:w-[1/4] object-cover"
                        />
                  </div> */}
            </section>
      )
}

export default Section4
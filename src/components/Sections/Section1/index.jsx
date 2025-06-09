import ilustracao from "/assets/imagenspipo/img_ilustracao.png";


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
            <section id="section-1" className="flex flex-col md:flex-row items-center justify-center gap-4 pb-4 py-[6rem] min-h-[100vh]">
                  <div className=''><h2 className='text-purple md:text-3xl font-light text-center'>WHERE EVERY <b>SCOOP</b></h2></div>
                  <div className=''><img src={ilustracao} alt="imagem de ilustraçao"/></div>
                  <div className=''><h2 className='text-purple md:text-3xl font-light text-center'>TELLS A <b>STORY</b></h2></div>
            </section>
      )
}

export default Section1
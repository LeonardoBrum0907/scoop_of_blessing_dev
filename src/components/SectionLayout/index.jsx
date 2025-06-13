/* eslint-disable react/prop-types */
const Section = ({className, children, id, props}) => {
  return (
    <section id={id} className={`min-h-[100vh] max-w-[1600px] px-4 py-10 md:px-24 xl:px-30 md:py-[8rem] ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
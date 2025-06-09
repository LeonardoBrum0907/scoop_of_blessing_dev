/* eslint-disable react/prop-types */
const Section = ({className, children, id, props}) => {
  return (
    <section id={id} className={`min-h-[100vh] px-4 py-10 md:px-20 xl:px-60 md:py-[8rem] ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
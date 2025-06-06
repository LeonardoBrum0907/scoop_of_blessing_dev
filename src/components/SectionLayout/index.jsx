/* eslint-disable react/prop-types */
const Section = ({className, children, id, props}) => {
  return (
    <section id={id} className={`min-h-[100vh] px-4 sm:px-60 py-10 sm:py-[8rem] ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
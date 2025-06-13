/* eslint-disable react/prop-types */
const Section = ({className, children, id, props}) => {
  return (
    <section id={id} className={`min-h-[100vh] max-w-[1500px] px-4 py-10 md:px-24 xl:px-40 md:py-[8rem] ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
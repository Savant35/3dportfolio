
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">

      <a href="https://github.com/Savant35" target="_blank" rel="noreferrer" >
        <div className="flex gap-3">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
          </div>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/arthur-ngendanan/" target="_blank" rel="_noreferrer">
        <div className="social-icon color-white">
          <img src="/assets/linkedin.svg" alt="github" className='w-1/2 h-1/2' />
        </div>
      </a>

    </section>
  )
}

export default Footer
import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
        <div className="flex gap-3">
            <div className="social-icon">
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
            <div className="social-icon">
                <img src="/assets/twitter.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
            <div className="social-icon">
                <img src="/assets/instagram.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
        </div>
    </section>
  )
}

export default Footer
import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('aliarthur35@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Ali</p>
                            <p className="grid-subtext">With a Bachelor’s degree in Computer Science and two
                                years of experience in web development, I enjoy building web
                                applications that combine clean design with strong functionality.
                                I’ve worked with technologies like Java, C#, HTML, CSS, JS, React, Next.js, and Python,
                                and I’m passionate about turning ideas into engaging, user-friendly digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276] h-fit object-container" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Experienced in Java, C#, Python, HTML, CSS, React, and
                                Next.js, with a focus on modern web development and crafting intuitive user interfaces.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                label
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>Availability
                            </p>
                            <p className='grid-subtext'>I’m currently based in Erie, PA, and am comfortable working remotely across multiple time zones.
                                I’m also open to relocation opportunities for the right role.
                            </p>
                            <Button name="Contact me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext"> I love solving problems and building things through code</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid 4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className='space-y-2'>
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />
                                <p className="lg:text-2x md:text-xl font-medium text-gray_gradient text-white">aliarthur35@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
import logo from '../assets/logo.png'
const About = () => {

    return (
        <>
            <div id='about' style={{ overflowX: "hidden" }} className="flex flex-col lg:flex-row py-28 lg:h-[100vh]  justify-between px-4 md:px-14 items-center bg-[#fafafa]">
                <img data-aos-duration="600" data-aos="zoom-out" src={logo} className='w-[300px] md:w-[400px] ' />
                <div className='lg:pl-20'>
                    <p className='text-3xl text-[#757575]'>Hey there I'm</p>
                    <h1 className=' text-7xl font-[clash]' data-aos-duration="700" data-aos="fade-up">Abdullah Al Nirob</h1>
                    <h1 className='mt-3 text-5xl font-[clash]' data-aos-duration="800" data-aos="fade-up">Web Develper</h1>
                    <div className='grid grid-cols-3'>
                        <li className='flex flex-col py-5' data-aos-duration="900" data-aos="zoom-in">
                            <h1 className='font-[clash] bg-[#ccc] w-14 rounded-full text-4xl p-2'>02</h1>
                            <p className='text-[18px]'>Award winner</p>
                        </li>
                        <li className='flex flex-col py-5' data-aos="zoom-in">
                            <h1 className='font-[clash] bg-[#ccc] w-14 rounded-full text-4xl p-2'>06</h1>
                            <p className='text-[18px]'>Clients</p>
                        </li>
                        <li className='flex flex-col py-5' data-aos="zoom-in">
                            <h1 className='font-[clash] bg-[#ccc] w-14 rounded-full text-4xl p-2'>03</h1>
                            <p className='text-[18px]'>Job done successfully</p>
                        </li>
                    </div>
                    <p data-aos-duration="600" data-aos="zoom-out" className='text-[#7e7e7e] py-2'>
                        I’m Abdullah Al Nirob, a skilled Front-end Web Developer from Bangladesh, specializing in React.js, HTML, CSS, and JavaScript. I lead Connect Agency, where we provide top-notch web development services. I’m passionate about creating responsive and dynamic websites that enhance user experience. My goal is to deliver innovative solutions that help businesses thrive online.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
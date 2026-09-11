import video from '.../../../src/assets/video.mp4'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'
import Image4 from '../../assets/image4.jpg'
import acieve from '../../assets/achiev.jpg'
import product from '../../assets/product.jpg'
import work1 from '../../assets/work1.jpg'
import work2 from '../../assets/work2.jpg'
import work3 from '../../assets/work3.jpg'
import work4 from '../../assets/work4.jpg'
import work5 from '../../assets/work5.jpg'
import { FaArrowUp } from 'react-icons/fa6'

function Home() {
  return (
    <main className="bg-[#0D0E0F] text-white min-h-screen">

      <div className="relative px-5 pt-5">

        <div className="w-full h-[700px] rounded-3xl overflow-hidden">
          <video
            className="w-full h-full object-cover" playsInline autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-5 left-0 bg-[#0D0E0F] rounded-br-3xl px-12 py-5 w-[58%]">

          <p className="text-xl font-medium mb-5">
            • Hiya, we're Shape 👋
          </p>

          <h1 className="text-[70px] leading-[1.05] font-medium tracking-tight">
            A web design and
            <br />
            branding agency
            <br />
            in Manchester
          </h1>

          <div className="flex items-center gap-10 mt-8">

            <button className="bg-[#292B2E] rounded-full px-7 py-3 text-lg font-semibold flex items-center gap-4">
              View our work
              <span>↗</span>
            </button>

            <button className="text-lg font-semibold flex items-center gap-3">
              Meet the team
              <span>↗</span>
            </button>

          </div>

        </div>
        <div className='flex justify-center items-center text-white w-full py-5 gap-100'>
            <div className=''>
                . Who are we ?
            </div>
            <div className='w-[50%] font-semibold space-y-2'>
                <div className='text-4xl'>
                <h1 className=''>An independent web design</h1>
                <h1>and branding agency in Manchester set</h1> 
                <h1>up in 2010 who care, build relationships,</h1>
                <h1>have industry experience, and win awards.</h1>
                </div><br />
                <div className='flex gap-10'>
                <button className='bg-amber-200 px-5 py-1 rounded-2xl text-black flex items-center gap-2'>
                    About Shape <FaArrowUp/>  </button>
                <button className='bg-amber-200 px-2 py-1 rounded-2xl text-black flex items-center gap-2'>
                    Meet the team <FaArrowUp/> </button>
                </div>
            </div>
        </div>
        <div className='py-10'>
            <div className='flex justify-around items-center'>
               <img src={Image1} alt="" className='w-40 h-20'/>
               <img src={Image2} alt="" className='w-40 h-20' />
               <img src={Image3} alt="" className='w-40 h-20' />
               <img src={Image4} alt="" className='w-40 h-20' />
            </div>
        </div>
        <div className='w-full flex justify-around items-center gap-2 py-5'>
            <div className='w-[50%] space-y-3'>
                <img src={product} alt="" className='w-2xl h-120 rounded-2xl'/>
                <h1 className='text-3xl font-semibold'>Refreshing Gary Neville's digital presence</h1>
            </div>
            <div className='w-[50%] space-y-5'> 
                <p className='px-10'>. Our Work</p>               
                <h1 className='text-7xl font-bold px-10'>Take a look at <br /> our Projects</h1>
                <img src={acieve} alt="" className='w-2xl h-100 rounded-2xl' />
            </div>
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='relative'>
                <img src={work1} alt="" className='w-50 h-50 absolute top-40 -right-20 rounded-2xl' />
                <img src={work2} alt="" className='w-50 h-50 rounded-2xl' />
            </div>
            <div className='py-50'>
                <p className='font-semibold'>. Dont't believe the hype ?</p>
                <h1 className='text-7xl font-bold'>See What AI has</h1>
                <h1 className='text-7xl font-bold'>to Say about us</h1><br />
                <div className='flex justify-around gap-5 text-black'>
                    <button className='text-xl px-5 py-1 bg-amber-300 rounded-2xl text-center'>Open Ai</button>
                    <button className='text-xl px-8 py-1 bg-amber-300 rounded-2xl text-center'>Cloud</button>
                    <button className='text-xl px-8 py-1 bg-amber-300 rounded-2xl text-center'>Google</button>
                    <button className='text-xl px-8 py-1 bg-amber-300 rounded-2xl text-center'>Grok</button>
                </div>
            </div>
            <div className='relative'>
                <div className=''>
                <img src={work3} alt="" className='w-50 h-50 absolute right-45 -top-20 rounded-2xl' />
                <img src={work4} alt="" className='w-50 h-50 absolute top-50 right-10 rounded-2xl' />
                <img src={work5} alt="" className='w-50 h-50 rounded-2xl' />
                </div>
            </div>
        </div>

      </div>

    </main>
  );
}

export default Home;
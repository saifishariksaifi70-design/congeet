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

      <div className="relative px-3 sm:px-5 pt-3 sm:pt-5">

        <div className="w-full h-[450px] sm:h-[550px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-3 sm:top-5 left-0 bg-[#0D0E0F] rounded-br-2xl sm:rounded-br-3xl px-5 sm:px-8 lg:px-12 py-4 sm:py-5 w-[92%] sm:w-[75%] lg:w-[58%]">

          <p className="text-sm sm:text-lg lg:text-xl font-medium mb-3 sm:mb-5">
            • Hiya, we're Shape 👋
          </p>

          <h1 className="text-[32px] sm:text-[48px] lg:text-[70px] leading-[1.05] font-medium tracking-tight">
            A web design and
            <br />
            branding agency
            <br />
            in Manchester
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 lg:gap-10 mt-5 sm:mt-8">

            <button className="bg-[#292B2E] rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold flex items-center gap-3 sm:gap-4">
              View our work
              <span>↗</span>
            </button>

            <button className="text-sm sm:text-lg font-semibold flex items-center gap-3">
              Meet the team
              <span>↗</span>
            </button>

          </div>

        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:items-center text-white w-full py-10 sm:py-16 lg:py-20 gap-8 lg:gap-20">

          <div className="w-full lg:w-[25%]">
            . Who are we ?
          </div>

          <div className="w-full lg:w-[50%] font-semibold space-y-2">

            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <h1>An independent web design</h1>
              <h1>and branding agency in Manchester set</h1>
              <h1>up in 2010 who care, build relationships,</h1>
              <h1>have industry experience, and win awards.</h1>
            </div>

            <br />

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">

              <button className="bg-amber-200 px-5 py-2 rounded-2xl text-black flex items-center justify-center gap-2 w-fit">
                About Shape
                <FaArrowUp />
              </button>

              <button className="bg-amber-200 px-4 py-2 rounded-2xl text-black flex items-center justify-center gap-2 w-fit">
                Meet the team
                <FaArrowUp />
              </button>

            </div>

          </div>

        </div>

        <div className="py-8 sm:py-10">

          <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center items-center gap-6 sm:gap-8">

            <img
              src={Image1}
              alt=""
              className="w-28 h-16 sm:w-36 sm:h-20 lg:w-40 lg:h-20 object-cover"
            />

            <img
              src={Image2}
              alt=""
              className="w-28 h-16 sm:w-36 sm:h-20 lg:w-40 lg:h-20 object-cover"
            />

            <img
              src={Image3}
              alt=""
              className="w-28 h-16 sm:w-36 sm:h-20 lg:w-40 lg:h-20 object-cover"
            />

            <img
              src={Image4}
              alt=""
              className="w-28 h-16 sm:w-36 sm:h-20 lg:w-40 lg:h-20 object-cover"
            />

          </div>

        </div>

        <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-2 py-10">

          <div className="w-full lg:w-[50%] space-y-3">

            <img
              src={product}
              alt=""
              className="w-full h-[300px] sm:h-[450px] lg:h-[480px] object-cover rounded-2xl"
            />

            <h1 className="text-2xl sm:text-3xl font-semibold">
              Refreshing Gary Neville's digital presence
            </h1>

          </div>

          <div className="w-full lg:w-[50%] space-y-5">

            <p className="px-2 sm:px-5 lg:px-10">
              . Our Work
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold px-2 sm:px-5 lg:px-10">
              Take a look at
              <br />
              our Projects
            </h1>

            <img src={acieve} alt="" className="w-full h-[280px] sm:h-[380px] lg:h-[400px] object-cover rounded-2xl"/>

          </div>

        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center py-10 sm:py-20 lg:py-40 gap-20 lg:gap-10">

          <div className="relative w-full lg:w-[25%] flex justify-center lg:block">

            <img
              src={work1}
              alt=""
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50 lg:absolute lg:top-40 lg:-right-20 rounded-2xl object-cover"
            />

            <img
              src={work2}
              alt=""
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50 rounded-2xl object-cover"
            />

          </div>

          <div className="py-10 lg:py-50 w-full lg:w-[50%]">

            <p className="font-semibold">
              . Dont't believe the hype ?
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              See What AI has
            </h1>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              to Say about us
            </h1>

            <br />

            <div className="flex flex-wrap justify-start sm:justify-around gap-3 sm:gap-5 text-black">

              <button className="text-base sm:text-xl px-5 py-1 bg-amber-300 rounded-2xl text-center">
                Open Ai
              </button>

              <button className="text-base sm:text-xl px-6 sm:px-8 py-1 bg-amber-300 rounded-2xl text-center">
                Cloud
              </button>

              <button className="text-base sm:text-xl px-6 sm:px-8 py-1 bg-amber-300 rounded-2xl text-center">
                Google
              </button>

              <button className="text-base sm:text-xl px-6 sm:px-8 py-1 bg-amber-300 rounded-2xl text-center">
                Grok
              </button>

            </div>

          </div>

          <div className="relative w-full lg:w-[25%] flex justify-center lg:block">

            <div>

              <img
                src={work3}
                alt=""
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50 lg:absolute lg:right-45 lg:-top-20 rounded-2xl object-cover"
              />

              <img
                src={work4}
                alt=""
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50 lg:absolute lg:top-50 lg:right-10 rounded-2xl object-cover mt-5 lg:mt-0"
              />

              <img
                src={work5}
                alt=""
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-50 lg:h-50 rounded-2xl object-cover mt-5 lg:mt-0"
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Home;
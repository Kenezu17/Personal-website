import profile from '../assets/profile.jpg';
import info from '../components/info';
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0f1a] font-mono text-[#F9FAFB] relative">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-60 noise" />
      <div className="fixed inset-0 pointer-events-none z-0 grid-lines" />

      {/* Orbs */}
      <div className="fixed rounded-full blur-[80px] opacity-[0.18] w-[500px] h-[400px] bg-[#38bdf8] top-[100px] -left-[150px]" />
      <div className="fixed rounded-full blur-[80px] opacity-[0.18] w-[400px] h-[400px] bg-[#818cf8] -bottom-[100px] -right-[100px]" />

      {/* Content */}
      <div className=" relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* TEXT */}
        <div className="text-center lg:text-left slide-left">


          <div className=" flex justify-center lg:ml-200  lg:w-74 lg:h-30 lg:mt-10 slide-right  float-smooth ">
          <img
            src={profile}
            alt="Profile"
            className=" mt-20 w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-72 lg:h-72  object-cover rounded-full border-2 border-[#5b8dff] shadow-lg float fade-up delay-200"
          />
        </div>

          <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mr-100  font-bold leading-tight fade-in delay-200">
            <span className="block text-gray-400 fade-up delay-300">Aspiring</span>
            <span className='role'>{info.role}</span><span className="cursor" />
          </h1>

          <p className=" text-sm sm:text-base md:text-lg text-gray-300 max-w-xl fade-up delay-300">
            Hi, I'm <span className="text-blue-400">{info.name}</span> —
            an aspiring Software Engineer with a passion for building reliable
            systems and meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center lg:mr-145  fade-up delay-300">
            <button onClick={()=>navigate('/contact')} className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
              Hire Me
            </button>
            <button onClick={()=> navigate('/project')} className="px-6 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition transform hover:scale-105">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
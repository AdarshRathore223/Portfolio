import { CiStar } from 'react-icons/ci'
import { FaStar, FaSquare } from 'react-icons/fa'
import { FiTriangle } from 'react-icons/fi'

function Resumebtn() {
  return (
    <a href='https://drive.google.com/file/d/12uGQJulNeX48ts9OWn7X-ODorKfhlH64/view?usp=sharing' target='_blank' className="relative mt-5 group">
          {/* reflecion */}

          <div className="-z-10 absolute p-6 py-3 font-bold border-2 rounded-md group-hover:bg-gray-300 group-hover:text-white group-hover:border-white transition-all duration-500 group-hover:-translate-x-2 group-hover:-rotate-[2deg] w-full h-full"/>

          {/* Stars */}
          <button className="p-6 py-3 font-bold border-2 rounded-md relative overflow-hidden group-hover:bg-black group-hover:text-white group-hover:border-none transition-all duration-500 group-hover:-translate-y-2 group-hover:-rotate-[2deg]">
            <div className="absolute flex justify-between w-11 -left-16 group-hover:left-10 transition-all duration-500 z-0">
              <div className="h-24 -mt-5 bg-white opacity-25 w-3 rotate-[24deg] ml-5" />
              <div className="h-24 -mt-5 bg-white opacity-25 w-2 rotate-[24deg]  " />
            </div>
            <div className="z-10">Resume</div>
          </button>
          <FaStar className="w-0 absolute transition-all duration-500 group-hover:w-5 rotate-0 aspect-square  -top-5 right-6 group-hover:rotate-45" />
          <CiStar className="w-0 absolute transition-all duration-500 group-hover:w-5 rotate-0 aspect-square top-14 group-hover:rotate-45" />
          <CiStar className="w-0 absolute transition-all duration-500 group-hover:w-5 rotate-0 aspect-square top-2 right-0 group-hover:rotate-12 text-white" />
          <FaSquare className="w-0 absolute transition-all duration-500 group-hover:w-5 rotate-0 aspect-square -bottom-2 left-24 group-hover:rotate-45" />
          <FiTriangle className="w-0 absolute transition-all duration-500 group-hover:w-5 rotate-0 aspect-square top-3 -left-5 group-hover:rotate-45" />
        </a>
  )
}

export default Resumebtn
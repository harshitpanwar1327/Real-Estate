import logo from '../assets/logo.jpeg'

const NavigationBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#C89C51] font-bold">HOME</a>
          <div className="group">
            <button className="font-semibold flex items-center gap-1 hover:text-[#C89C51]"> PROJECTS <span>&#9660;</span> 
            </button>
            
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded">
              <a href="#" className="block px-6 py-2 hover:bg-gray-100 hover:text-[#C89C51]">Project 1</a>
              <a href="#" className="block px-6 py-2 hover:bg-gray-100 hover:text-[#C89C51]">Project 2</a>
            </div>
          </div>
        </div>

        <div>
          <img src={logo} alt="Logo" className="h-[5rem]" />
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="font-semibold hover:text-[#C89C51]">ABOUT US</a>
          <a href="#" className="font-semibold hover:text-[#C89C51]">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

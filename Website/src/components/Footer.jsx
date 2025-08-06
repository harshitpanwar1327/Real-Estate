import logo from '../assets/logo.jpeg'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#171D23] text-white py-10 px-5">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <img src={logo} alt="logo" className='h-[4rem] w-[7rem]'/>
            </div>
            <p className="mb-2 font-medium">Follow Us On</p>
            <div className="w-[1.5rem] h-[2px] bg-white mb-4" />
            <div className="flex space-x-4 mt-2 text-yellow-600 text-xl">
              <p>i</p>
              <p>l</p>
              <p>x</p>
              <p>y</p>
              <p>f</p>
            </div>
          </div>

          <div>
            <h2 className="text-yellow-600 font-semibold mb-2">Quick Links</h2>
            <div className="w-[2rem] h-[1.5px] bg-yellow-500 mb-6" />
            <ul className="space-y-2">
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">News & Events</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-yellow-600 font-semibold mb-2">Address</h2>
            <div className="w-[2rem] h-[1.5px] bg-yellow-500 mb-6" />
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-2">
                <p>icon</p>
                <p>
                  SCO 2A, First Floor, Sector 125, Noida, 201304
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p>icon</p>
                <div>
                  <p>+91 9745454486</p>
                  <p>+91 8465794325</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p>icon</p>
                <p>contact@propertyshell.com</p>
              </div>
            </div>
          </div>

          <div className="w-full h-52 md:h-full rounded-md overflow-hidden">
            <iframe
              title="Old Seelampur Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.07240379927!2d77.26728935!3d28.6786729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd85d1e5e98b%3A0x5c24c7e360482e42!2s9%2F4853%2C%20Old%20Seelampur%2C%20Shahdara%2C%20Delhi%2C%20110031!5e0!3m2!1sen!2sin!4v1692969000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>


        </div>
      </footer>
      <div className="border-t-2 border-gray-600 p-6 text-sm font-semibold flex justify-between items-center bg-[#12161B] text-white">
        <p>&copy; 2024 Property Shell || All Right Reserved</p>
        <div className="flex space-x-4 ">
          <a href="#">Term & Conditions</a>
          <p>|</p>
          <a href="#" className='text-[#C89C51]'>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
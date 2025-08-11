import MissionImg from '../assets/HighriseBuilding.jpg'
import VissionImg from '../assets/TechOpenSpace.jpg'

const AboutUs = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[50vh] bg-[url(/src/assets/about-us.webp)] bg-cover bg-center mt-20"></div>

      <div className="px-6 md:px-16 py-16 bg-white flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold">CREATING BETTER</h2>
            <h2 className="text-[#8ec73f] text-3xl font-bold">COMMUNITIES</h2>
          </div>
          <p className="text-gray-500 text-justify">Property Shell has been one of the most premium real estate developers in India with more than 5 years of experience in this business. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda nostrum ex. Quam neque sit hic nemo magnam excepturi dolorum eligendi impedit aut, porro cumque voluptas provident culpa ab nobis recusandae, commodi maxime sed suscipit possimus. Dignissimos voluptatum eaque, exercitationem numquam ratione eveniet quidem pariatur minus asperiores enim aut laborum cum architecto deserunt debitis sed voluptas voluptatibus, molestias possimus beatae error? Cupiditate consequuntur repellat at nulla error vitae nam saepe, dolorem ad in excepturi, itaque, laborum quae quo suscipit fugiat corrupti explicabo ut eius doloremque velit dicta! Odit iste voluptatum, quos nisi sunt veritatis. Recusandae animi aliquid nulla esse doloribus.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <img src={MissionImg} alt="Property Shell" className="w-full rounded shadow-md"/>
          <div className='flex flex-col gap-4'>
            <h2 className="text-[#8ec73f] text-3xl font-bold">OUR MISSION</h2>
            <p className="text-gray-500 text-justify">At <span className="text-red-500 font-semibold">Property Shell</span>, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quam incidunt aliquid nemo ea voluptates illum beatae, autem recusandae dolore delectus! Doloremque, ipsa dicta. Voluptatibus, sequi ad a itaque natus sunt magnam culpa optio non id est minima nesciunt accusamus dolores. Laudantium debitis repellat aperiam corrupti voluptatem quia ut odit neque consequuntur earum velit amet voluptates provident, iste voluptatum, rerum soluta omnis ex dolore eius ab quis odio eaque magni. Saepe voluptates, sit, enim provident facilis voluptas quod veritatis neque iure pariatur nisi, architecto a placeat ullam odit non unde deleniti adipisci aliquid dolores ad. Dolorum sunt quas expedita! Aliquam deserunt ab cumque, dignissimos nisi sapiente, itaque dolores, quisquam similique provident reprehenderit? Veritatis dolorem obcaecati, eum tempora veniam saepe hic tenetur, praesentium at enim quisquam tempore doloribus error libero, consectetur</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className='flex flex-col gap-4'>
            <h2 className="text-[#8ec73f] text-3xl font-bold">OUR VISSION</h2>
            <p className="text-gray-500 text-justify">At Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quam incidunt aliquid nemo ea voluptates illum beatae, autem recusandae dolore delectus! Doloremque, ipsa dicta. Voluptatibus, sequi ad a itaque natus sunt magnam culpa optio non id est minima nesciunt accusamus dolores. Laudantium debitis repellat aperiam corrupti voluptatem quia ut odit neque consequuntur earum velit amet voluptates provident, iste voluptatum, rerum soluta omnis ex dolore eius ab quis odio eaque magni. Saepe voluptates, sit, enim provident facilis voluptas quod veritatis neque iure pariatur nisi, architecto a placeat ullam odit non unde deleniti adipisci aliquid dolores ad. Dolorum sunt quas expedita! Aliquam deserunt ab cumque, dignissimos nisi sapiente, itaque dolores, quisquam similique provident reprehenderit? Veritatis dolorem obcaecati, eum tempora veniam saepe hic tenetur, praesentium at enim quisquam tempore doloribus error libero, consectetur </p>
          </div>
          <img src={VissionImg} alt="Property Shell Project" className="w-full rounded shadow-md"/>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <div className='flex flex-col gap-4 md:col-span-2 lg:col-span-4'>
            <h2 className="text-2xl font-bold text-center">INNOVATING SPACES <span className='text-[#8ec73f]'>FOR A BETTER FUTURE</span></h2>
            <p className="text-gray-500 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quas cupiditate molestiae nemo nam blanditiis! Aliquam dolor facere obcaecati, voluptatibus consequuntur sed eveniet animi voluptates fuga. Enim delectus ex alias libero est cum quaerat placeat nulla nesciunt expedita neque cumque voluptatum, facilis vitae. Eum possimus sequi deleniti commodi dolorem dolor.</p>
          </div>

          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/prime.png)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>PRIME LOCATION</h2>
          </div>
          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/global.png)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>GLOBAL BUSINESS HUB</h2>
          </div>
          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/comprehensive.png)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>CONPREHENSIVE INFRASTRUCTURE</h2>
          </div>
          <div className="flex items-end justify-center p-2 h-[70vh] md:h-[40vh] lg:h-[70vh] bg-[url(/src/assets/sustainability.png)] bg-cover bg-center rounded hover:items-center group">
            <h2 className='text-white lg:text-xl group-hover:text-3xl font-bold text-center'>SUSTAINABILITY AND INNOVATION</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
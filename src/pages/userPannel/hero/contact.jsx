import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsPeopleFill } from "react-icons/bs";
function Contact(){
    return(
        <div className=" h-auto w-full flex flex-col items-center justify-center py-20 ">
            <div className="mb-6 shadow-2xl bg-[url('/images/contactbg1.jpg')] bg-cover bg-center object-contain h-[20vh] lg:h-[35vh] 
            w-[70%] lg:w-[60%] rounded-full
             flex flex-col items-center justify-center">
                <h1 className="text-[45px] text-green-800 font-bold">Contact Us</h1>
                <div className="flex text-2xl">
                    <h1 className="px-4 text-green-800 font-semibold"><Link to={'/'}>Home</Link></h1>  |
                    <h1 className="px-4 text-gray-700 font-semibold"> Contact</h1>
                </div>
                
            </div>
            <div className="bg-white lg:h-[80vh] w-full flex flex-col lg:flex-row items-center justify-center">
                <div className=" h-auto  w-[90%] mt-4 lg:mt-0 lg:w-[35%] flex flex-col items-center justify-center">
                    <h1 className="py-2 bg-gray-300 self-start  px-6 rounded-3xl text-[15px] text-black">We're here 7 days a week</h1>
                    <h1 className="self-start py-4 text-4xl font-semibold text-gray-800">Let’s build your next health win together</h1>
                    <p className="py-2 lg:w-[500px] self-start text-[20px] text-gray-400">Reach out for custom meal plans, product questions, or partnership opportunities.
                         A nutrition specialist will respond within one business day.</p>
                         <div className="lg:h-[200px]  w-full self-start  flex flex-col gap-5 lg:gap-0 my-7 lg:my-0 py-5 lg:py-5 lg:flex-row items-center justify-between">
                            <div className="shadow-lg lg:shadow-2xl  lg:h-[120px] w-[200px] lg:w-[150px] rounded-2xl flex flex-col items-center
                             justify-evenly">
                                <h1 className="text-gray-600 text-[20px] w-[100px] tracking-wider">AVG. RESPONSE</h1>
                                <h1 className="text-black font-semibold text-2xl">4h</h1>

                            </div>
                            <div className="shadow-lg lg:shadow-2xl  h-[120px] w-[200px] lg:w-[150px] rounded-2xl flex flex-col
                             items-center justify-evenly">
                                <h1 className="text-gray-600 text-[20px] w-[100px] tracking-wider">CLIENTS HELPED</h1>
                                <h1 className="text-black font-semibold text-2xl">12k+</h1>

                            </div>
                            <div className="shadow-lg lg:shadow-2xl  h-[120px] w-[200px] lg:w-[150px] rounded-2xl flex flex-col
                             items-center justify-evenly">
                                <h1 className="text-gray-600 text-[20px] w-[100px] tracking-wider">OFFICES</h1>
                                <h1 className="text-black font-semibold text-2xl">3 cities</h1>

                            </div>
                         </div>

                </div>
                <div className="border my-10 lg:my-0 w-[90%] mx-auto lg:mx-0 lg:h-[70vh] gap-5 lg:w-[30%] rounded-3xl flex flex-col  justify-center ml-4">
                    <h1 className="text-4xl ml-6 text-green-700 font-bold ">Studio Schedule</h1>
                    <div className="flex items-center w-[400px] gap-[25%] lg:justify-between h-[50px]  py-2
                     text-gray-600 font-semibold" >
                        <h1 className="ml-3 lg:ml-8">Monday – Friday</h1>
                        <h1>08:00 – 18:00</h1>
                         </div>
                         <hr className="w-[80%] mx-auto lg:w-[360px] text-gray-600 lg:ml-10"/>
                         <div className="flex items-center w-[400px] gap-[40%] lg:justify-between h-[50px]  py-2
                     text-gray-600 font-semibold" >
                        <h1 className="ml-3 lg:ml-8">Saturday</h1>
                        <h1>08:00 – 16:00</h1>
                         </div>
                         <hr className="text-gray-600 w-[80%] mx-auto lg:w-[360px] lg:ml-10"/>
                         <div className="flex items-center w-[400px] gap-[49%] lg:justify-between h-[50px]  py-2
                     text-gray-600 font-semibold" >
                        <h1 className="ml-3 lg:ml-8">Sunday</h1>
                        <h1>Closed</h1>
                         </div>
                         {/* <hr className="text-gray-600 w-[360px] ml-10"/> */}

                         <h1 className="font-semibold text-black text-[20px] ml-5">Visit, call, or write</h1>
                         <div className="flex items-center justify-evenly  w-[350px]">
                             <IoLocationOutline className="text-3xl text-green-900 hover:scale-110"/>
                         <h1 className="text-gray-700 ">53 Main Street, 2nd Mountain, New York</h1>
                         </div>
                         <div className="flex items-center justify-evenly w-[200px]">
                         <FaPhone className="text-3xl text-green-900 hover:scale-110"/>
                         <h1 className="text-gray-700">+000 (000) 000 00</h1>
                         </div>
                         <div className="flex items-center justify-evenly w-[250px] pb-4">
                         <MdEmail className=" text-3xl text-green-900 hover:scale-110"/>
                         <h1 className="text-gray-700">support@terraeats.com</h1>
                         </div>
                    

                </div>

                </div>
                <div className=" text-gray-700 py-10 h-auto w-full flex flex-col lg:flex-row items-center justify-center">
                    <div className="border bg-white py-2 mr-6 h-auto w-[80%] my-6 lg:my-0 lg:w-[30%] rounded-3xl flex flex-col items-center justify-evenly">
                        <h1 className="text-4xl text-center lg:text-start lg:py-2 font-semibold">Start a conversation</h1>
                        <h1 className="text-gray-600 text-center lg:text-start py-2">Share what you need and we’ll tailor the right plan.</h1>
                        <div className="flex flex-col lg:flex-row items-center  py-2 lg:w-[400px] justify-between">
                           <div className="text-gray-700 font-semibold flex flex-col ">
                             <label className="py-2 text-[16px] px-2" htmlFor="text">Full name</label>
                            <input className="border p-2 lg:w-40 rounded-2xl" type="text" placeholder="John Doe" />
                           </div>
                          <div className=" flex flex-col font-semibold text-gray-700">
                              <label className="py-2 text-[16px] px-2" htmlFor="">Email</label>
                            <input className="border p-2 lg:w-40 rounded-2xl" type="email" placeholder="You@gmail.com" />

                          </div>
                        </div>
                        <label className="self-start py-2 px-8 font-semibold" htmlFor="">Phone</label>
                        <input className="border self-start mx-auto lg:mx-6 p-2 rounded-2xl text-gray-600 lg:w-[400px]" type="text" placeholder="(+100 000-0000)" />
                        <label className="font-bold self-start py-2 px-8" htmlFor="">How can we help?</label>
                        <textarea className="border p-6 rounded-2xl lg:w-[380px]" placeholder="Tell as about your goals"></textarea>
                        <button className="border p-2 text-[20px] my-4 lg:w-[350px] rounded-4xl
                        hover:bg-white hover:text-black bg-green-900 text-white">Send message</button>


                    </div>
                    <div className="border py-4 bg-green-950 ml-6 flex flex-col ite  pl-6 justify-center text-white min-h-[75vh] w-[80%] lg:w-[30%] rounded-3xl">
                        <h1 className="">Channels</h1>
                        <h1 className="text-[20px] font-bold">Talk with a specialist</h1>
                        <h1 className="mt-4">Live chat</h1>
                        <div className="w-[90%] flex items-center justify-between">
                            <h1>Available 08:00 – 22:00</h1>
                            <PiChatsCircle className="text-4xl"/> 
                        </div>
                        <hr  className="lg:w-[400px] mt-4 text-gray-700"/>
                        <h1 className="mt-4">Nutrition Hotline</h1>
                         <div className="w-[90%]  mb-4 flex items-center justify-between">
                            <h1>+012 (345) 678 99</h1>
                            <TfiHeadphoneAlt  className="text-4xl"/>
                            
                        </div>
                        <hr  className="mt-4 lg:w-[400px] text-gray-700"/>
                        <h1>Community</h1>
                        <div className=" w-[90%] flex items-center justify-between">
                            <h1>Join 8k+ members</h1>
                            <BsPeopleFill className="text-4xl"/>
                            
                        </div>
                        <hr  className="mt-4 lg:w-[400px] text-gray-700"/>
                        <div className="flex flex-col mx-auto lg:mx-0  px-6 justify-between border lg:ml-6 border-gray-700 mt-8 min-h-[150px] lg:w-[350px] rounded-2xl">
                            <h1 className= "pt-4">Typical reply time</h1>
                            <h1 className="text-[40px] font-bold">under 2 hrs</h1>
                            <h3 className="pb-4">Fast-tracked for active subscribers</h3>
                        </div>

                    </div>

                </div>
        </div>
    )
}

export default Contact
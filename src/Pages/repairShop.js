import { Link } from "react-router-dom";
import Button from "../Components/button";
import Header from "../Components/header";
import InputField from "../Components/inputField";
import repairshopImage from "../images/repairShop.png"
import { useState } from "react";
const RepairShop = () => {
    document.title = "Repair Shops";
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <Header />
            <div className="px-6 md:px-12 my-10 md:my-14">
                <p className="font-baskerVille text-mainOrange font-bold text-xl md:text-2xl">Auto repair shops in Ikeja</p>
                <p className="text-justify text-sm md:text-base font-medium">A roster of certified, skilled automotive technicians for your vehicle maintenance and repair needs.</p>

                <div className="grid md:grid-cols-2">
                    <div className="md:flex gap-3 pt-6">
                        <div className="md:w-1/2 relative">
                            <select className="w-full rounded border border-[#FFFFFF8] text-offWhite text-xs px-5 py-3  focus:text-black focus:outline-none focus:border-[#00000050] appearance-none">
                                <option>Change Location</option>
                                <option value={"Ikorodu"}>Ikorodu</option>
                                <option value={"Agege"}>Agege</option>
                                <option value={"Alimosho"}>Alimosho</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" fill="#C4C4C4" />
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-1/2 my-3 md:my-0">
                            <InputField inputType={'text'}
                                placeholder={'Search technician / Shop...'} />
                        </div>
                        <Button btnText={'Search'} />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 mt-12 md:mt-16">
                    <div className="overflow-hidden rounded-md" onClick={()=>setShowModal(true)}>
                        <div className="relative">
                            <img src={repairshopImage} alt="" className="overflow-hidden hover:scale-105" />
                            <div className="absolute flex bottom-0 left-0 items-center gap-2 mb-4 ml-6">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1.33329 5.99998H3.33329V14H1.33329C0.965106 14 0.666626 13.7015 0.666626 13.3333V6.66665C0.666626 6.29846 0.965106 5.99998 1.33329 5.99998ZM4.86189 5.13805L9.12889 0.871073C9.24616 0.753773 9.43189 0.74058 9.56456 0.840106L10.133 1.2664C10.4561 1.50875 10.6017 1.92169 10.502 2.31311L9.73316 5.33331H14C14.7364 5.33331 15.3333 5.93027 15.3333 6.66665V8.06953C15.3333 8.24373 15.2992 8.4162 15.2329 8.5772L13.17 13.5871C13.0671 13.8369 12.8236 14 12.5535 14H5.33329C4.96511 14 4.66663 13.7015 4.66663 13.3333V5.60946C4.66663 5.43265 4.73687 5.26308 4.86189 5.13805Z" fill="white" />
                                </svg>
                                </span>
                                <span className="text-white text-sm">90%</span>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-semibold pt-1 hover:scale-95">Rahman Jago's Workshop</p>
                        <div className="flex gap-2 items-center py-1 md:py-0">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_131_79)">
                                    <path d="M14 5.33332C14.7364 5.33332 15.3333 5.93028 15.3333 6.66666V9.33332C15.3333 10.0697 14.7364 10.6667 14 10.6667H13.292C12.964 13.2975 10.7197 15.3333 7.99996 15.3333V14C10.2091 14 12 12.2091 12 9.99999V5.99999C12 3.79085 10.2091 1.99999 7.99996 1.99999C5.79082 1.99999 3.99996 3.79085 3.99996 5.99999V10.6667H1.99996C1.26358 10.6667 0.666626 10.0697 0.666626 9.33332V6.66666C0.666626 5.93028 1.26358 5.33332 1.99996 5.33332H2.70789C3.03595 2.70245 5.28021 0.666656 7.99996 0.666656C10.7197 0.666656 12.964 2.70245 13.292 5.33332H14ZM5.17292 10.5233L5.87968 9.39246C6.49437 9.77746 7.22116 9.99999 7.99996 9.99999C8.77876 9.99999 9.50556 9.77746 10.1202 9.39246L10.827 10.5233C10.0074 11.0366 9.03836 11.3333 7.99996 11.3333C6.96156 11.3333 5.99251 11.0366 5.17292 10.5233Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_131_79">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            </span>
                            <span className="text-xs md:text-sm ">07019559860</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 15.8186L3.75736 11.576C1.41421 9.23281 1.41421 5.43385 3.75736 3.0907C6.10051 0.747557 9.89947 0.747557 12.2427 3.0907C14.5858 5.43385 14.5858 9.23281 12.2427 11.576L8 15.8186ZM11.2998 10.6331C13.1223 8.81074 13.1223 5.85596 11.2998 4.03351C9.4774 2.21106 6.52261 2.21106 4.70017 4.03351C2.87772 5.85596 2.87772 8.81074 4.70017 10.6331L8 13.933L11.2998 10.6331ZM8 8.66668C7.2636 8.66668 6.66667 8.06974 6.66667 7.33334C6.66667 6.59696 7.2636 6.00001 8 6.00001C8.7364 6.00001 9.33333 6.59696 9.33333 7.33334C9.33333 8.06974 8.7364 8.66668 8 8.66668Z" fill="black" />
                            </svg>
                            </span>
                            <span className="text-xs md:text-sm ">Ikeja</span>
                        </div>
                    </div>
                    


                </div>
            </div>
            {showModal &&(
                  <div className="fixed inset-0 z-40 bg-black bg-opacity-25 w-full backdrop-blur-sm flex justify-center items-center">
                  <div className="bg-white w-full md:w-2/5 rounded mx-6 md:mx-0">
                      <div className="px-4 md:px-8 py-3 flex items-center justify-between">
                          <p className="font-baskerVille text-base md:text-lg font-bold">Rahman Jago's Workshop</p>
                          <button onClick={()=>setShowModal(false)} className="hover:scale-105"><svg className="w-3 h-3"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="3" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg></button>
                      </div>
                      <hr className="bg-offWhite"/>
                      <div className="px-4 md:px-8 pt-6">
                          <label className="text-black text-sm md:text-base font-semibold">Address</label>
                          <div className="grid md:flex justify-between">
                              <p className="text-offWhite font-medium text-sm md:text-base truncate">419 Jago Avenue, Ikeja. Lagos state.</p>
                              <p className="text-mainOrange text-sm md:text-base font-semibold">Get directions</p>
                          </div>
                          <div className="pt-4">
                              <label className="text-black text-sm md:text-base font-semibold">Phonenumber</label>
                              <p className="text-offWhite font-medium text-sm md:text-base truncate">07023456789.</p>
                          </div>
                          <div className="pt-4">
                              <label className="text-black text-sm md:text-base font-semibold">Rating</label>
                              <p className="text-offWhite font-medium text-sm md:text-base truncate">90% (342 ratings).</p>
                          </div>
                          <div className="pt-4">
                              <label className="text-black text-sm md:text-base font-semibold">Specialty</label>
                              <p className="text-offWhite font-medium text-sm md:text-base truncate">Toyota, Mercedes, Hyundai, Tesla.</p>
                          </div>
                          <div className="py-8 float-right">
                              <Button btnText={'Fix My Car'}/>
                          </div>
                      </div>
                  </div>
              </div>
            )}
          
        </div>
    )
}
export default RepairShop;
import { Link } from "react-router-dom";
import Button from "../Components/button";
import Header from "../Components/header";
import InputField from "../Components/inputField";
import WorkShop from "../Components/workshop";
const RepairShop = () => {
    document.title = "Repair Shops";
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

                <div className="grid grid-cols-2 md:grid-cols-5 mt-12 md:mt-16 gap-4">
                    <WorkShop workshopName={"Rahman Jago's Workshop"}
                             phoneNumber={'0902345678901'} 
                             location={'Ikeja'}
                             ratingPercentage={'90'}
                             address={'419 Jago Avenue, Ikeja. Lagos state.'}
                             totalRating={'342'}
                             specialty={'Toyota, Mercedes, Hyundai, Tesla.'}
                             workshopId={'245'}/>

                     <WorkShop workshopName={"Mekanick’s Workshop"}
                             phoneNumber={'08171512345'} 
                             location={'Shomorin'}
                             ratingPercentage={'70'}
                             address={'12, Shomorin, Off Shomolu, Ikeja.'}
                             totalRating={'142'}
                             specialty={'Toyota, Mercedes, Hyundai'}
                             workshopId={'246'}/> 

                    <WorkShop workshopName={"Ifeoluwa Gboyega Store"}
                             phoneNumber={'08045678902'} 
                             location={'Osun Oshogbo'}
                             ratingPercentage={'80'}
                             address={'No 24, Osun Ijesha Street, Off Folake Street'}
                             totalRating={'142'}
                             specialty={'Toyota, Mercedes, Hyundai, Tesla'}
                             workshopId={'247'}/>

                    <WorkShop workshopName={"Isiaka Wegner Workshop"}
                             phoneNumber={'08923789012'} 
                             location={'Berger, Lagos'}
                             ratingPercentage={'99'}
                             address={'Berger Bustop, Lagos Ibadan, Express way'}
                             totalRating={'900'}
                             specialty={'All Kind of vehicles'}
                             workshopId={'248'}/>
                             
                    <WorkShop workshopName={"Turacreativity Auto Care"}
                             phoneNumber={'08023456789'} 
                             location={'Abeokuta, Nigeria'}
                             ratingPercentage={'60'}
                             address={'No 24, Ijemo Street, Off Isale Ake, Abeokuta'}
                             totalRating={'400'}
                             specialty={'Toyota, Mercedes, Hyundai, Ford'}
                             workshopId={'249'}/>
                
                    
                </div>
            </div>
          
          
        </div>
    )
}
export default RepairShop;
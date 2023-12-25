import Button from "../Components/button";
import Header from "../Components/header";
import InputField from "../Components/inputField";

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
                        <div className="md:w-1/2">
                            <InputField inputType={'text'}
                                        placeholder={'search technician / shop...'} />
                        </div>
                        <div className="md:w-1/2 my-3 md:my-0">
                             <InputField inputType={'text'}
                                         placeholder={'Search technician / Shop...'} />
                        </div>
                        <Button btnText={'Search'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RepairShop;
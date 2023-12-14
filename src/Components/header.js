import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
               <div className="flex justify-between px-6 md:px-12 py-2 text-white bg-mainOrange items-center">
                <Link to={'/'}><p className="text-[22px] font-medium font-inkNut">Mekanik.</p></Link>
                <button className="rounded bg-[#FFFFFF16] text-xs  font-semibold p-3 hover:scale-95 hidden md:block">Login or create account</button>
            </div>
        </div>
     );
}
 
export default Header;
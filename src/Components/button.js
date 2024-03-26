import { Link } from "react-router-dom";
const Button = ({btnText, btnLink, btnTarget}) =>{
    return(
        <div>
             <Link to={btnLink}  target={btnTarget}>
                <button className="bg-mainOrange rounded px-5 py-3 md:px-6  text-white text-xs font-montserrat hover:scale-105">{btnText}</button>
            </Link>
        </div>
    )
}
export default Button;
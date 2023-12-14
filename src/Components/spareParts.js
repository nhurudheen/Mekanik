import { Link } from "react-router-dom";


const SpareParts = ({ partName, partImage, partLink }) => {
    return (
       <div>
        {partImage !=="" ? 
        (<Link to={partLink}><div    style={{ backgroundImage: `url('${partImage}')` }}
               className="w-full h-52 rounded bg-no-repeat bg-cover bg-black/50 bg-blend-overlay flex items-end">
            <p className="text-white text-[12px] font-semibold bg-[#ffffff29] px-4 py-2 rounded-[20px] ml-4 mb-5 hover:scale-105">{partName}</p>
        </div></Link>)
        :(
            <Link to={partLink}><div className="bg-mainOrange w-full h-52 rounded bg-no-repeat bg-cover bg-blend-overlay relative">
            <span className="hover:scale-125 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.32894 3.27158C6.56203 2.8332 7.99181 3.10749 8.97878 4.09446C9.96603 5.08171 10.2402 6.51202 9.80129 7.74535L20.646 18.5902L18.5247 20.7115L7.67887 9.86709C6.44578 10.3055 5.016 10.0312 4.02903 9.04421C3.04178 8.05696 2.76761 6.62665 3.20652 5.39332L5.44325 7.63C6.02903 8.21578 6.97878 8.21578 7.56457 7.63C8.15035 7.04421 8.15035 6.09446 7.56457 5.50868L5.32894 3.27158ZM15.6963 5.15512L18.8783 3.38736L20.2925 4.80157L18.5247 7.98355L16.757 8.3371L14.6356 10.4584L13.2214 9.04421L15.3427 6.92289L15.6963 5.15512ZM8.62523 12.9333L10.7465 15.0546L5.7968 20.0044C5.21101 20.5902 4.26127 20.5902 3.67548 20.0044C3.12415 19.453 3.09172 18.5793 3.57819 17.99L3.67548 17.883L8.62523 12.9333Z" fill="white" />
            </svg></span>
            <span className="absolute right-0 bottom-0 transform -rotate-90 origin-right font-montserrat text-4xl font-semibold text-white/30 mb-40 mr-6">Mekanik</span>
           <p className="absolute bottom-0 left-0 text-white text-[12px] font-semibold bg-[#ffffff29] px-4 py-2 rounded-[20px] ml-4 mb-5 hover:scale-105">{partName}</p>
        </div></Link>
        ) 
        }
       </div>
    );
}

export default SpareParts;
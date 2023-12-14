import { Link } from "react-router-dom";

const CarBrand = ({ brandLink, brandName, brandSVG, bgColor }) => {
    return (
        <div>
            <Link to={brandLink}>
                <div className={`${bgColor} rounded bg-cover bg-blend-overlay h-44 relative`}>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-125">
                        {brandSVG}
                    </div>
                    <p className="absolute bottom-0 left-0  text-white text-[10px] font-semibold bg-[#ffffff29] px-4 py-2 rounded-[20px] ml-4 mb-4 hover:scale-105">{brandName}</p>
                </div>
            </Link>
        </div>
    );
}

export default CarBrand;
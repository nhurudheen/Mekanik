import Button from "../Components/button";
import Header from "../Components/header";
import carMan from "../images/carMan.png";
import SpareParts from "../Components/spareParts";
import CarBrand from "../Components/carBrand";
import { Link } from "react-router-dom";
const LandingPage = () => {
    document.title = "Home Page";
    return (
        <div>
            <Header />
            <div className="px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="my-auto py-5 md:py-0 order-1 md:order-0">
                        <p className="font-baskerVille text-mainOrange text-lg md:text-2xl font-bold">Discover Nearby Auto Repair Shops.</p>
                        <p className="text-xs md:text-sm py-2 md:mr-3 font-medium text-justify md:text-start leading-5">Easily locate trusted auto repair services near you for a hassle-free and convenient
                            automotive experience. Find expert mechanics, just around the corner.</p>

                        <div className="py-3">
                            <Button btnText={'Discover repair shops'} />
                        </div>
                        <p className="font-montserrat text-sm font-semibold pb-4 pt-2">Or</p>
                        <p className="font-baskerVille text-base font-bold text-mainOrange">Track my car repair status</p>

                        <div className="pt-4 flex gap-x-4">
                            <input type="text" className="w-1/2 rounded border border-[#FFFFFF8] text-offWhite text-xs px-5 focus:text-black focus:outline-none focus:border-[#00000050]" placeholder="Enter a tracking ID..." />
                            <Button btnText={'Track Repair'} />
                        </div>
                    </div>
                    <div className="order-0 md:order-1">
                        <img src={carMan} alt="" />
                    </div>
                </div>

                <div className="mt-6 mb-5">
                    <div className="flex gap-x-6 items-center justify-between md:justify-start">
                        <span className="font-baskerVille text-sm md:text-base font-bold">Popular auto spare parts</span>
                        <Link to={''}><span className="font-semibold text-xs text-mainOrange hover:scale-105">[ View all spare parts ]</span></Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 pt-4 gap-4">
                        <SpareParts partImage={"https://s3-alpha-sig.figma.com/img/c313/e718/efbe0a2c217f4fa281b8f0811804e4b3?Expires=1703462400&Signature=MxVGe7G2dQf5lwfR0i5a5yiDQ8IWPu1Da7yuk4bZWysygxbfxuLEPA~MHwHX9Ut3fESf9WQRFe-uabMR3bmAvUAAh9PepB21qazWJRYZ9~RqOMNuRcjfnOgVIkj16O56dyMYmDMyDeZJ3n5XUq~HCd5K8JYprcB1rQG9o6kTsSVMkrBJp38xEkuhtvYH8DT0APDO3DpYHoKFovFcFUtl0uU2~RhBojcd7qiZPYkbGqp1b-2TSPbuuo2c0M0cBwXMKPwJchdPreSXhiBZUyuNAjpvI7QC4mbo6eAYh39QInLq0IYhRslcr9hk0pIedGgDJxkMqwT7t3e-kXJ7zGaQXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                            partName={"Engine"}
                            partLink={"#"} />
                        <SpareParts partImage={""}
                            partLink={"#"}
                            partName={"Kick starters"} />
                        <SpareParts partImage={"https://s3-alpha-sig.figma.com/img/4d75/12e7/fc67d007d6a69c7fb8e5afd19712e389?Expires=1703462400&Signature=SCtgQykpf8Rz~Of8RzQB6YR3dpfiH8hGXerTYLIFDdYacPQ-ayDb0-Wk4TGqf9iuRAtbR7ScL33tSF9xSNv9CpeHKGl8o1jD~4qGuXz1GuUy8znTmGsfB6kuIyx0tWu8QpzC2XhMM9aowGy6GUn7-WBDNWxo1qiRQQ0g0gj2bDKOwIK~0YSfOLc80VNEg8dsH3VZoK8nqHMRdkcic2nNTnLH9nEwy08OAFW16~DnlovgNojBW3MBWqqU3w1z2dUVNmrPavNNbnKWrVXNHqkVg7rvn13EOeo9GXjQc7G8wTs~LL~UF-rw2WqSPS9xcY~yDKe79LNBlM0MlN9uKcYeKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                            partName={"Headlights"}
                            partLink={"#"} />
                        <SpareParts partImage={"https://s3-alpha-sig.figma.com/img/3067/7283/f638f1dfea61ae79b95abb896da417e9?Expires=1703462400&Signature=K93fy-dUBckKjEYoYmLpFGIS6jxWLGpLKd1e1qXsj4Bcs~vIzzKQUmh~0Whe-YsaDuMDtDnhnjPFVO71XevFYhzEcZaC8sh0BlHRidcXVGZSLGxQ1g2~nVLH3Mewk~SlFNYqxd-LT8o~EWUjuwvulGTaOcc9xX2FcpGkNl6oZk5~y4NYWYVmqfc5QrcS2dQCIKAdeoNQTbSTEESCEko3vmjt-VxLEJ4bX-mYoncTu74NTIwup7cBEkS8vIj9tOjP0dIE2-vK08kpi95wbBjHWPFsrhFGg25WKsPWyOdNAG8WQ1-jyYhMcylwQHsV9JVi45A3vY7m-rvg7urH0l4qEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                            partName={"Mirrors"}
                            partLink={"#"} />
                        <SpareParts partImage={""}
                            partName={"Horns"}
                            partLink={"#"} />
                        <SpareParts partImage={""}
                            partName={"Break Pads"}
                            partLink={"#"} />
                        <SpareParts partImage={"https://s3-alpha-sig.figma.com/img/9c64/796d/8c990488db1cf4fbb9320a10792be611?Expires=1703462400&Signature=bBOEhH2Wg5C4Jt5mH9lu7rQwI46b89c-M1eK1k0yab1ET4DpKqbYhjpPrDa32lCno0O4~PLg~w5iobj6u0Mw4ysqyUWuFRsDs1CmNj7Wj8D57V-PQ43VqR4eXHpQXMISS2xM~b1vuehk4y7FeLI~GrvLqQ9mIuGfCLVNZtWtNSZD2vIG6k0-sNPO8TbD9OdEb4n5U47iP8CwAj5VCfZcVG7ehpz9A70DXZtg5Ald2uK2xOaOrt-KcUwMWE07i4mujDOocPBL2qupSmpMerP4sHs8vax38dBnIH0RjI-J-gRpMxqiUqw2PgEDjUzqt0zem9Bfw8PSLZr-aSwmFYyv9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                            partName={"Batteries"}
                            partLink={"#"} />
                        <SpareParts partImage={"https://s3-alpha-sig.figma.com/img/db17/8e18/918082b75af45fe1c57ffa8e772d91ab?Expires=1703462400&Signature=kZBVXVO49tB5X7GU8KQ3RCDjLlCgoXGAdwJBNihcEe1k~SErDcHl-UmvCfJcfOFVslglnHYZhGyMSaV~NGQLUMGKZX4DJsQLOd6mMdELDXlR6uG8pZXpBOWcUfpuv54i9h9i7IwClSfh1INcBv9kn4-jIJW4~KGwLOTs3KxnrvaPSpu7kVBIUPlGhfDC2NEZfPq3~hY8yL~K7Cqd4i09TuLORmGz-QUAtjm67ltxt7TAa5Xf1Me3sabUoWpM-02HNoaazFENoGfsCzoYfnvDk8XKiIyacjps3wtg70Kw1adoak32kmNzgfqH9q68BbfGbMIC4HqBQiFzrro-Mt9L8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                            partName={"Tyres and Rims"} />
                        <SpareParts partImage={""}
                            partName={"Exhausts"}
                            partLink={"#"} />
                    </div>

                    <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-workshop bg-blend-overlay bg-cover rounded-lg bg-no-repeat bg-left px-8 md:px-10 py-8">
                            <p className="text-2xl font-baskerVille font-semibold pt-10 md:pt-20">
                                <span className="text-white">Become a</span>
                                <span className="text-mainOrange"> Mekanik.</span>
                            </p>
                            <p className="text-white text-sm font-normal leading-5 mb-6 mt-3 text-justify">Registering your local mechanic workshop unlocks a world of opportunities.
                                Reach a broader clientele, gain online visibility, and simplify appointment
                                scheduling, all while showcasing your services and building trust with potential
                                customers who are actively seeking a reliable auto repair solutions in your area</p>
                            <Button btnText={"Register"}
                                btnLink={'#'} />
                        </div>

                        <div className="bg-sparePart bg-blend-overlay bg-cover w-full rounded-lg bg-no-repeat bg-left px-8 md:px-10 py-8">
                            <p className="text-2xl font-baskerVille font-semibold pt-10 md:pt-[118px]">
                                <span className="text-white">Sell spare parts.</span>
                            </p>
                            <p className="text-white text-sm font-normal leading-5 mb-6 mt-3 text-justify">Ready to turn those spare car parts into cash? Join Mekanik today and start
                                selling your automotive treasures to a community of car enthusiasts and seekers
                                of quality parts</p>
                            <Button btnText={"Start selling"}
                                btnLink={'#'}
                                btnTarget={"_blank"} />
                        </div>
                    </div>

                    <div className="flex gap-x-6 items-center justify-between md:justify-start">
                        <span className="font-baskerVille text-sm md:text-base font-bold">Car Brands</span>
                        <Link to={''}><span className="font-semibold text-xs text-mainOrange hover:scale-105">[ View all car brands ]</span></Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-4 mb-24">
                    <CarBrand brandName={'Tesla'}
                              brandLink={'#'}
                              bgColor={'bg-[#E82127]'}
                              brandSVG={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <g clip-path="url(#clip0_117_181)">
                                  <path d="M24.9921 49.5715L31.9639 10.4829C38.6017 10.4829 40.7031 11.2079 40.9976 14.1665C40.9976 14.1665 45.4556 12.501 47.6944 9.1506C38.9356 5.0948 30.1178 4.91846 30.1178 4.91846L24.9725 11.1687H24.9921L19.8664 4.91846C19.8664 4.91846 11.0487 5.0948 2.28986 9.1506C4.52866 12.5206 8.98663 14.1665 8.98663 14.1665C9.28121 11.2079 11.3825 10.4829 17.9811 10.4633L24.9921 49.5715Z" fill="white" />
                                  <path d="M24.9921 3.11587C32.0817 3.05709 40.1924 4.21309 48.4996 7.81825C49.619 5.81974 49.8939 4.93804 49.8939 4.93804C40.8209 1.35248 32.3174 0.137697 24.9921 0.0985107C17.6866 0.137697 9.18303 1.35248 0.090332 4.93804C0.090332 4.93804 0.502744 6.01567 1.48468 7.81825C9.79182 4.1935 17.9026 3.05709 24.9921 3.11587Z" fill="white" />
                              </g>
                              <defs>
                                  <clipPath id="clip0_117_181">
                                      <rect width="50" height="49.6689" fill="white" />
                                  </clipPath>
                              </defs>
                          </svg>}/>
                    <CarBrand brandName={'Mercedes'}
                              brandLink={'#'}
                              bgColor={'bg-black'}
                              brandSVG={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                              <g clip-path="url(#clip0_118_340)">
                                <path d="M49.4643 25.0001C49.4643 38.5268 38.5268 49.4643 25 49.4643C11.4732 49.4643 0.535713 38.5268 0.535713 25.0001C0.535713 11.4733 11.4732 0.535767 25 0.535767C38.5268 0.535767 49.4643 11.4733 49.4643 25.0001ZM25 2.05362C12.2768 2.05362 2.05357 12.2768 2.05357 25.0447C2.05357 37.8125 12.3661 47.9911 25 47.9911C37.7232 47.9911 47.9464 37.6786 47.9464 25.0447C47.9464 12.2768 37.7232 2.05362 25 2.05362Z" fill="url(#paint0_linear_118_340)"/>
                                <path d="M25 2.05359C12.2768 2.05359 2.05357 12.2768 2.05357 25.0447C2.05357 37.8125 12.3661 47.9911 25 47.9911C37.7232 47.9911 47.9464 37.6786 47.9464 25.0447C47.9464 12.2768 37.7232 2.05359 25 2.05359ZM25 46.4732C13.125 46.4732 3.52679 36.875 3.52679 25C3.52679 13.125 13.125 3.5268 25 3.5268C36.875 3.5268 46.4732 13.125 46.4732 25C46.4732 36.875 36.875 46.4732 25 46.4732Z" fill="url(#paint1_linear_118_340)"/>
                                <path opacity="0.4" d="M25 49.4643C38.5268 49.4643 49.4643 38.5268 49.4643 25C49.4643 11.4732 38.5268 0.535714 25 0.535714C11.4732 0.535714 0.535713 11.4732 0.535713 25C0.535713 38.5268 11.4732 49.4643 25 49.4643ZM25 0C38.75 0 50 11.25 50 25C50 38.75 38.75 50 25 50C11.25 50 0 38.75 0 25C0 11.25 11.25 0 25 0Z" fill="url(#paint2_linear_118_340)"/>
                                <path d="M1.69643 25.0893C1.69643 12.2768 12.0982 1.74109 25 1.74109C37.9018 1.74109 48.3036 12.1875 48.3036 25.0893C48.3036 37.9018 37.9018 48.3036 25 48.3036C12.0982 48.3036 1.69643 37.9018 1.69643 25.0893ZM8.97321 8.97323C4.82143 13.125 2.23214 18.7947 2.23214 25.0447C2.23214 31.2947 4.82143 37.0089 8.88393 41.0714C13.0357 45.1339 18.7054 47.7232 24.9554 47.7232C31.2054 47.7232 36.9196 45.2232 40.9821 41.0714C45.1339 37.0089 47.6339 31.2947 47.6339 25.0447C47.6339 18.7947 45.0446 13.0804 40.9821 8.97323C36.9643 4.86609 31.25 2.2768 25 2.2768C18.75 2.2768 13.0357 4.86609 8.97321 8.97323Z" fill="white"/>
                                <path opacity="0.4" d="M25 46.5625C19.1964 46.5625 13.8393 44.2857 9.77679 40.2232C5.71429 36.1607 3.4375 30.7589 3.4375 25C3.4375 19.2411 5.71429 13.8393 9.77679 9.77679C13.8393 5.71429 19.1964 3.4375 25 3.4375C30.8036 3.4375 36.1607 5.71429 40.2232 9.77679C44.2857 13.8393 46.5625 19.1964 46.5625 25C46.5625 30.8036 44.2857 36.1607 40.2232 40.2232C36.1607 44.2857 30.7589 46.5625 25 46.5625ZM25 45.9375C30.5357 45.9375 35.8482 43.75 39.7768 39.8214C43.75 35.8482 45.8929 30.5804 45.8929 25.0446C45.8929 19.5089 43.7054 14.1964 39.7768 10.2679C35.8036 6.33929 30.5357 4.19643 25 4.19643C19.4643 4.19643 14.1518 6.38393 10.2232 10.3125C6.25 14.1518 4.0625 19.4643 4.0625 25C4.0625 30.5357 6.25 35.8482 10.1786 39.7768C14.1518 43.75 19.4643 45.9375 25 45.9375Z" fill="url(#paint3_linear_118_340)"/>
                                <path d="M43.9732 35.1786C43.5714 34.8661 28.4821 22.9018 28.4821 22.9018L24.9554 2.8125C24.7321 2.90179 24.4196 3.125 24.2411 3.4375L21.7411 22.9911L6.25 34.9107C6.25 34.9107 5.9375 35.3125 5.75893 35.5357C5.66964 35.6696 5.66964 35.9375 5.66964 36.1607L24.8661 28.2589L44.0625 36.1607C44.2857 35.8036 44.1518 35.4018 43.9732 35.1786Z" fill="white"/>
                                <path d="M25.1339 25.625L25 29.1965L42.6786 36.2947C43.3036 36.6072 43.75 36.4286 44.2411 36.1608L25.4018 25.5358C25.3125 25.4465 25.1339 25.5358 25.1339 25.625Z" fill="#565F64"/>
                                <path d="M25.1339 25.625C25.1339 25.625 26.1607 27.4108 27.3214 28.6608C28.9732 30.4465 31.1607 31.6965 31.1607 31.6965L42.6339 36.2947C43.2589 36.6072 43.7054 36.4286 44.1964 36.1608L25.3571 25.5358C25.3125 25.4465 25.1339 25.5358 25.1339 25.625Z" fill="url(#paint4_linear_118_340)"/>
                                <path d="M44.1518 35.4465C44.1518 35.3572 44.0625 35.3126 44.0179 35.134L27.9018 23.3483L25.7143 24.7322C25.7143 24.7322 25.8482 24.8215 25.9375 24.7322C26.1607 24.6429 26.6518 24.5983 27.0982 24.7322C27.5 24.9108 44.1518 35.5358 44.1518 35.5358C44.1518 35.5358 44.1518 35.5358 44.1518 35.4465Z" fill="#A4AAAE" fill-opacity="0.6"/>
                                <path d="M43.6161 34.7767L28.6161 22.9017L27.9018 23.3482L44.0179 35.2232C43.8839 35.0892 43.75 34.9107 43.6161 34.7767Z" fill="#333E46"/>
                                <path d="M25.4018 24.4642C25.3125 24.5535 25.3125 24.5535 25.3125 24.5535C25.3125 24.5535 25.3125 24.6874 25.4464 24.6428C25.5357 24.5535 27.7679 23.3928 28.5714 22.9464L25.8482 4.19638C25.8036 3.43745 25.4464 3.12495 24.9107 2.90173L25.2232 24.6428L25.4018 24.4642Z" fill="#565F64"/>
                                <path d="M24.0625 4.1518V5.17859L22.3214 22.4107C22.3214 22.6339 22.4107 22.9018 22.6339 23.0357L23.6607 23.8393L24.375 4.7768L24.4643 3.30359C24.1964 3.43752 24.1518 3.75002 24.0625 4.1518Z" fill="#A4AAAE" fill-opacity="0.6"/>
                                <path d="M23.125 24.1518L22.1875 23.3483L6.33929 34.8215C6.33929 34.8215 5.89286 35.134 5.80357 35.4465L6.33929 35.134L22.9911 24.6429C23.3036 24.5536 23.3482 24.3751 23.125 24.1518Z" fill="#A4AAAE" fill-opacity="0.6"/>
                                <path d="M24.7768 25.625C24.7768 25.5358 24.6875 25.4465 24.6429 25.5358L5.75893 36.25C6.20536 36.5625 6.69643 36.6518 7.32143 36.4286L24.9554 29.3304L24.7768 25.625Z" fill="#565F64"/>
                                <path d="M25.3125 24.5536L25.4018 24.4643C25.3125 24.5536 25.3125 24.5536 25.3125 24.5536C25.3125 24.5536 25.3125 24.6429 25.4018 24.6429H25.4911C25.5804 24.5536 27.8125 23.3929 28.6161 22.9465L28.3036 20.6697L25.8929 4.19646C25.8929 3.88396 25.8036 3.66075 25.6696 3.48218C25.6696 3.48218 26.8304 19.2411 26.8304 20.9822C26.7857 23.2143 25.3125 24.5536 25.3125 24.5536Z" fill="url(#paint5_linear_118_340)"/>
                                <path d="M24.7768 25.625C24.7768 25.5358 24.6875 25.4465 24.6429 25.5358L5.75893 36.25C6.20536 36.5625 6.69643 36.6518 7.32143 36.4286L24.9554 29.3304L24.7768 25.625Z" fill="url(#paint6_linear_118_340)" fill-opacity="0.8"/>
                                <path opacity="0.8" d="M7.27678 36.3393L24.9107 29.2411L24.7321 25.8036C24.4196 26.7411 23.8839 27.7679 22.4107 28.5268C21.3393 29.1518 10.8482 34.2857 7.09821 36.1161C6.875 36.25 6.5625 36.3393 6.38393 36.4286C6.69643 36.5625 6.96428 36.4732 7.27678 36.3393Z" fill="url(#paint7_linear_118_340)"/>
                                <path d="M25.4018 24.4642C25.3125 24.5535 25.3125 24.5535 25.3125 24.5535C25.3125 24.5535 25.3125 24.6874 25.4464 24.6428C25.5357 24.5535 27.7679 23.3928 28.5714 22.9464L25.8482 4.19638C25.8036 3.43745 25.4464 3.12495 24.9107 2.90173L25.2232 24.6428L25.4018 24.4642Z" fill="url(#paint8_linear_118_340)"/>
                                <path d="M25.4018 24.4642C25.3125 24.5535 25.3125 24.5535 25.3125 24.5535C25.3125 24.5535 25.3125 24.6874 25.4464 24.6428C25.5357 24.5535 27.7679 23.3928 28.5714 22.9464L25.8482 4.19638C25.8036 3.43745 25.4464 3.12495 24.9107 2.90173L25.2232 24.6428L25.4018 24.4642Z" fill="url(#paint9_linear_118_340)"/>
                                <path d="M3.97321 34.6875C3.4375 33.4375 0.312501 27.3661 3.75 15.625H2.41072C1.69643 17.9464 1.16072 19.375 0.848215 21.4732C0.848215 21.4732 0.669644 22.2768 0.625001 23.125C0.535715 23.9732 0.535713 24.4643 0.535713 25C0.535713 29.6875 1.69643 32.4107 1.69643 32.4107C2.94643 36.3393 5.13393 39.8214 8.125 42.5C10.7143 44.7768 14.6875 46.4732 17.9464 47.0982C17.4107 47.0089 8.03571 43.0357 3.97321 34.6875Z" fill="url(#paint10_linear_118_340)"/>
                                <path d="M25.3125 25.4465H24.5982C24.6875 25.4465 24.7321 25.4465 24.7321 25.5358L24.9107 29.1518H25L25.1339 25.5358C25.1339 25.4465 25.2232 25.4018 25.3125 25.4465Z" fill="url(#paint11_linear_118_340)"/>
                                <path d="M32.8125 1.78577C41.0268 4.91077 48.75 13.4822 48.75 24.3751C48.75 37.5 38.3036 48.2143 25 48.2143V49.4643C38.3036 49.4643 49.4643 38.5268 49.4643 25.0001C49.4643 14.2411 42.5893 5.17862 32.8125 1.78577Z" fill="url(#paint12_linear_118_340)"/>
                                <path d="M45.9375 15.759C40.4911 3.21434 28.125 2.50005 27.4107 2.41077C27.4107 2.41077 27.4107 2.41077 27.3214 2.41077C36.7857 4.15184 42.8125 10.3126 44.9107 16.7858V16.8751C45.8482 19.3751 46.3393 22.009 46.3839 24.9108C46.4732 27.634 45.8482 30.7143 44.6875 33.4822C44.5982 33.884 44.5536 34.3304 44.4643 34.3304H45.7143C49.4643 27.3215 47.8125 20.2233 45.9375 15.759Z" fill="url(#paint13_linear_118_340)"/>
                                <path d="M1.69643 25.0893C1.69643 12.2768 12.0982 1.74109 25 1.74109C37.9018 1.74109 48.3036 12.1875 48.3036 25.0893C48.3036 37.9018 37.9018 48.3036 25 48.3036C12.0982 48.3036 1.69643 37.9018 1.69643 25.0893ZM8.97321 8.97323C4.82143 13.125 2.23214 18.7947 2.23214 25.0447C2.23214 31.2947 4.82143 37.0089 8.88393 41.0714C13.0357 45.1339 18.7054 47.7232 24.9554 47.7232C31.2054 47.7232 36.9196 45.2232 40.9821 41.0714C45.1339 37.0089 47.6339 31.2947 47.6339 25.0447C47.6339 18.7947 45.0446 13.0804 40.9821 8.97323C36.9643 4.86609 31.25 2.2768 25 2.2768C18.75 2.2768 13.0357 4.86609 8.97321 8.97323Z" fill="#FBFBFB"/>
                                <path d="M6.16071 35L22.0982 23.5268C22.9464 23.9732 24.375 24.6429 24.5089 24.6429C24.6429 24.7321 24.6429 24.5536 24.6429 24.5536L22.6786 22.9018C22.4554 22.7232 22.3661 22.5 22.3661 22.2768L24.2411 3.4375C24.1518 3.52679 24.1518 3.66071 24.1071 3.75C24.0179 3.92857 24.0179 3.97321 24.0179 4.15179L21.2946 22.9911L6.29464 34.7768C6.25 34.8661 6.16071 34.9107 6.16071 35Z" fill="#333F47"/>
                              </g>
                              <defs>
                                <linearGradient id="paint0_linear_118_340" x1="6.2469" y1="9.29429" x2="43.7531" y2="40.7068" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="white"/>
                                  <stop offset="0.1" stop-color="#CDD0D0"/>
                                  <stop offset="0.2" stop-color="#A5ACAF"/>
                                  <stop offset="0.3" stop-color="#98A0A4"/>
                                  <stop offset="0.4" stop-color="#828A8F"/>
                                  <stop offset="0.5" stop-color="#667075"/>
                                  <stop offset="0.6" stop-color="#535C63"/>
                                  <stop offset="0.7" stop-color="#475158"/>
                                  <stop offset="0.8" stop-color="#434D54"/>
                                  <stop offset="1" stop-color="#475157"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_118_340" x1="7.40083" y1="10.1996" x2="42.5568" y2="39.7329" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#0B1F2A"/>
                                  <stop offset="0.2" stop-color="#333F47"/>
                                  <stop offset="0.5" stop-color="#81898D"/>
                                  <stop offset="0.7" stop-color="#B3B8B8"/>
                                  <stop offset="0.8" stop-color="#DEE0DD"/>
                                  <stop offset="1" stop-color="#FBFBFB"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_118_340" x1="33.5457" y1="48.4857" x2="16.4357" y2="1.45571" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#E1E3E1"/>
                                  <stop offset="0.1" stop-color="#C1C5C4"/>
                                  <stop offset="0.3" stop-color="#9BA1A2"/>
                                  <stop offset="0.5" stop-color="#7D8487"/>
                                  <stop offset="0.7" stop-color="#687074" stop-opacity="0"/>
                                  <stop offset="0.8" stop-color="#5B6469" stop-opacity="0"/>
                                  <stop offset="1" stop-color="#576065" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_118_340" x1="14.218" y1="6.33168" x2="35.7805" y2="43.6736" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#E1E3E1"/>
                                  <stop offset="0.1" stop-color="#C1C5C4"/>
                                  <stop offset="0.3" stop-color="#9BA1A2"/>
                                  <stop offset="0.5" stop-color="#7D8487"/>
                                  <stop offset="0.7" stop-color="#687074" stop-opacity="0"/>
                                  <stop offset="0.8" stop-color="#5B6469" stop-opacity="0"/>
                                  <stop offset="1" stop-color="#576065" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_118_340" x1="34.685" y1="30.888" x2="34.0046" y2="32.0079" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#27343C"/>
                                  <stop offset="1" stop-color="#00111E" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint5_linear_118_340" x1="26.9396" y1="22.8017" x2="25.3489" y2="20.2438" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.1" stop-color="#02131F"/>
                                  <stop offset="0.9" stop-color="#02131F" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint6_linear_118_340" x1="24.9931" y1="30.1569" x2="21.8787" y2="31.0472" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.2" stop-color="#02131F"/>
                                  <stop offset="0.9" stop-color="#02131F" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint7_linear_118_340" x1="16.2671" y1="31.661" x2="16.0674" y2="31.1615" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#02131F"/>
                                  <stop offset="0.1" stop-color="#02131F"/>
                                  <stop offset="1" stop-color="#02131F" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint8_linear_118_340" x1="26.7349" y1="12.9842" x2="26.6238" y2="12.9973" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.3" stop-color="#02131F"/>
                                  <stop offset="0.8" stop-color="#02131F" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint9_linear_118_340" x1="26.74" y1="12.9733" x2="26.6594" y2="12.9838" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.4" stop-color="#27343C"/>
                                  <stop offset="1" stop-color="#3B474E" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint10_linear_118_340" x1="4.80638" y1="28.3396" x2="15.2584" y2="34.3709" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#25323B" stop-opacity="0"/>
                                  <stop offset="0.1" stop-color="#27343C"/>
                                </linearGradient>
                                <linearGradient id="paint11_linear_118_340" x1="24.961" y1="29.218" x2="24.961" y2="25.4679" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.3" stop-color="#A5ABAF"/>
                                  <stop offset="1" stop-color="#A5ABAF" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="paint12_linear_118_340" x1="37.2258" y1="1.79665" x2="37.2258" y2="49.4529" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#6B7378"/>
                                  <stop offset="0.2" stop-color="#333F47"/>
                                  <stop offset="0.5" stop-color="#27343C"/>
                                  <stop offset="0.8" stop-color="#333F47"/>
                                  <stop offset="1" stop-color="#434D54"/>
                                </linearGradient>
                                <linearGradient id="paint13_linear_118_340" x1="40.2511" y1="6.07999" x2="31.6572" y2="18.683" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.7" stop-color="#49545B"/>
                                  <stop offset="0.8" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                <clipPath id="clip0_118_340">
                                  <rect width="50" height="50" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>}/>
                    <CarBrand brandName={'Toyota'}
                              brandLink={'#'}
                              bgColor={'bg-[#E82127]'}
                              brandSVG={<svg xmlns="http://www.w3.org/2000/svg" width="78" height="50" viewBox="0 0 78 50" fill="none">
                              <path d="M55.9331 2.45737C51.1303 0.902707 45.1767 0 38.7229 0C32.2691 0 26.3156 0.902707 21.5127 2.45737C8.75518 6.56971 0 15.0953 0 24.9248C0 38.7663 17.3102 50 38.6729 50C60.0355 50 77.3458 38.7663 77.3458 24.9248C77.4458 15.0953 68.6907 6.56971 55.9331 2.45737ZM38.7229 39.2678C35.521 39.2678 32.9195 32.999 32.7694 25.0752C34.6705 25.2257 36.6717 25.326 38.7229 25.326C40.7741 25.326 42.7253 25.2257 44.6764 25.0752C44.5264 32.9488 41.9248 39.2678 38.7229 39.2678ZM33.1696 18.8566C34.0201 13.2899 36.1714 9.37813 38.7229 9.37813C41.2244 9.37813 43.3757 13.2899 44.2762 18.8566C42.5252 19.007 40.624 19.1073 38.7229 19.1073C36.8218 19.1073 34.9707 19.0572 33.1696 18.8566ZM47.6782 18.4554C46.3774 9.72919 42.8754 3.51053 38.7229 3.51053C34.5705 3.51053 31.0684 9.72919 29.7676 18.4554C21.913 17.2016 16.4097 14.4433 16.4097 11.1835C16.4097 6.77031 26.3656 3.20963 38.6729 3.20963C50.9802 3.20963 60.9361 6.77031 60.9361 11.1835C61.0361 14.4433 55.5329 17.2518 47.6782 18.4554ZM5.70337 24.0221C5.70337 19.7593 7.35435 15.7974 10.156 12.3872C10.106 12.6379 10.106 12.8887 10.106 13.0893C10.106 18.4554 18.1107 22.9689 29.2673 24.6239C29.2673 25.0251 29.2673 25.4263 29.2673 25.8275C29.2673 35.7573 32.019 44.1825 35.8212 47.0913C18.9112 46.0883 5.70337 36.1585 5.70337 24.0221ZM41.6747 47.0913C45.4769 44.1825 48.2285 35.7573 48.2285 25.8275C48.2285 25.4263 48.2285 25.0251 48.2285 24.6239C59.3851 22.9689 67.3899 18.4052 67.3899 13.0893C67.3899 12.8385 67.3899 12.5878 67.3399 12.3872C70.1915 15.7974 71.7925 19.8094 71.7925 24.0221C71.7925 36.1585 58.5346 46.0883 41.6747 47.0913Z" fill="white"/>
                            </svg>}/>
                    <CarBrand brandName={'Ford'}
                              brandLink={'#'}
                              bgColor={'bg-[#00095B]'}
                              brandSVG={<svg xmlns="http://www.w3.org/2000/svg" width="128" height="50" viewBox="0 0 128 50" fill="none">
                              <g clip-path="url(#clip0_118_324)">
                                <path d="M106.002 35.1948C106.002 35.3948 106.303 35.5948 106.503 35.6948C106.604 35.6948 106.604 35.7948 106.503 35.9948C105.801 37.4948 105.199 38.2948 104.396 39.4948C103.594 40.6948 102.691 41.5948 101.687 42.3948C100.082 43.6948 97.8749 45.1948 96.0689 44.1948C95.2663 43.7948 94.8649 42.5948 94.9653 41.6948C94.9653 39.0948 96.1693 36.3948 98.2762 33.7948C100.885 30.5948 103.794 28.8948 105.701 29.7948C107.707 30.6948 107.005 32.9949 106.202 34.7948C106.002 34.8948 106.002 35.0948 106.002 35.1948ZM127.071 14.9948C127.171 14.7948 127.071 14.5948 126.77 14.5948C125.165 14.5948 122.957 14.5948 121.252 14.5948C120.851 14.5948 120.65 14.6948 120.449 14.9948C119.847 16.1948 112.122 27.6948 110.717 29.8948C110.517 30.1948 110.216 30.1948 110.115 29.7948C109.915 28.4948 108.811 26.9948 107.005 26.1948C105.6 25.6948 104.296 25.4948 102.891 25.6948C100.383 25.9948 98.1759 27.3948 96.1693 28.8948C93.1593 31.1948 90.6511 34.0948 87.3402 36.1948C85.5342 37.3948 83.026 38.3948 81.4207 36.8948C79.9157 35.4948 80.1164 32.3948 82.424 29.9948C82.6246 29.7948 82.9256 29.9948 82.9256 30.1948C82.725 31.2948 83.026 32.2948 83.8286 33.0948C84.8319 33.9948 86.2365 34.0948 87.5408 33.4948C89.0458 32.7948 89.8484 31.3948 90.0491 29.7948C90.4504 27.3948 88.5441 25.1948 86.2365 25.0948C84.3303 24.9948 82.5243 25.5948 80.7184 27.0948C79.8154 27.7948 79.3137 28.3948 78.5111 29.4948C78.3104 29.7948 78.0094 29.7948 78.0094 29.3948C78.1098 26.2948 76.8055 24.4948 74.1969 24.4948C72.1903 24.3948 70.0833 25.4948 68.3777 26.8948C66.5718 28.3948 64.9665 30.2948 63.2609 32.0948C63.0602 32.2948 62.8595 32.2948 62.7592 31.8948C62.6589 29.7948 62.1572 27.7948 61.2543 26.3948C60.9533 25.8948 60.1506 25.6948 59.649 25.9948C59.348 26.1948 58.445 26.5948 57.7427 27.0948C57.4417 27.3948 57.241 27.7948 57.4417 28.2948C58.3447 31.3948 58.144 34.8948 56.9401 37.7948C55.8364 40.4949 53.5288 42.9949 50.9202 43.7948C49.2146 44.2948 47.4087 44.0948 46.305 42.5948C44.8001 40.4948 45.4021 36.7948 47.7097 33.7948C49.7163 31.0948 52.6258 29.3948 55.5354 28.2948C55.8364 28.1948 55.9367 27.8948 55.8364 27.6948C55.6358 27.1948 55.4351 26.5948 55.3348 26.2948C55.0338 25.5948 54.3315 25.4948 53.4285 25.5948C51.3215 25.7948 49.4153 26.5948 47.509 27.5948C42.5928 30.1948 40.0845 35.2948 38.9809 37.9948C38.4793 39.2948 37.9776 40.0948 37.476 40.7948C36.6733 41.7948 35.67 42.6948 33.9644 44.1948C33.7637 44.3948 33.6634 44.5948 33.7637 44.8948C33.9644 45.2948 34.8674 46.5948 35.1683 46.6948C35.4693 46.8948 35.7703 46.5948 35.971 46.4948C37.175 45.6948 38.6799 44.2948 39.4826 43.3948C39.7836 43.0948 39.9842 43.1948 40.1849 43.6948C40.8872 46.0948 42.5928 48.0948 45.1011 48.8948C49.6159 50.3948 54.3315 48.1948 57.843 44.3948C60.0503 41.9948 60.9533 40.3948 61.7559 39.2948C63.2609 37.4949 66.0701 33.4948 69.4814 30.8948C70.7857 29.8948 72.1903 29.1948 72.9929 29.6948C73.5949 30.0948 73.7956 30.9948 72.7923 32.6948C69.2807 39.0948 64.1638 46.4948 63.2609 48.3948C63.0602 48.6948 63.2609 48.9948 63.5619 48.9948C65.3678 48.9948 67.1738 48.9948 68.8794 48.9948C69.1804 48.9948 69.2807 48.8948 69.381 48.6948C72.0899 44.4948 74.5982 40.4948 77.3071 36.3948C77.5078 36.1948 77.6081 36.2948 77.6081 36.4948C77.7085 37.4948 77.9091 38.7948 78.5111 39.5948C79.5144 41.1948 81.0194 41.8948 82.6246 41.8948C83.9289 41.8948 84.5309 41.6948 85.9355 41.1948C87.0392 40.7948 87.9422 40.1948 88.6445 39.6948C89.0458 39.3948 89.1461 39.8948 89.1461 39.9948C88.5441 43.2948 89.3468 47.2948 92.5574 48.8948C96.5706 50.7948 100.885 48.0948 103.393 45.5948C103.594 45.3948 103.895 45.3948 103.895 45.8948C103.995 46.7948 104.396 47.9948 105.199 48.6948C107.306 50.7948 111.52 49.9948 115.834 46.6948C118.543 44.5948 121.453 41.5948 123.961 38.4948C124.061 38.3948 124.161 38.1948 123.961 37.9948C123.559 37.5948 122.957 37.0948 122.556 36.7948C122.355 36.5948 122.155 36.6948 121.954 36.7948C119.346 39.2948 116.938 42.1948 113.526 44.4948C112.423 45.2948 110.517 45.9949 109.714 44.7948C109.413 44.3948 109.413 43.7948 109.714 42.9948C110.316 40.4948 126.268 16.3948 127.071 14.9948Z" fill="white"/>
                                <path d="M52.3249 17.8949C52.4252 18.2949 52.5255 18.2949 52.7262 18.2949C53.5288 18.0949 54.4318 17.4949 54.9335 16.6949C55.4351 15.9949 55.6358 14.9949 55.1341 14.5949C54.7328 14.1949 54.0305 14.2949 53.5288 14.7949C52.4252 15.5949 52.1242 16.8949 52.3249 17.8949ZM11.7914 48.8949C5.87189 48.8949 0.654711 45.2949 0.0527282 38.9949C-0.248263 35.4949 0.755041 32.3949 2.66132 29.7949C4.46727 27.4949 7.37685 25.5949 9.98544 25.0949C10.7881 24.8949 11.8917 24.9949 12.3934 25.5949C13.0957 26.3949 12.895 27.3949 12.1927 27.6949C10.2864 28.6949 7.97883 30.3949 6.77487 32.6949C5.87189 34.5949 5.67123 36.7949 7.07586 38.9949C9.48379 42.5949 16.1056 42.6949 22.2258 36.9949C23.7307 35.5949 25.1353 34.2949 26.54 32.6949C29.2489 29.5949 30.1519 28.4949 33.7637 23.4949C33.7637 23.3949 33.8641 23.3949 33.7637 23.2949C33.7637 23.1949 33.6634 23.1949 33.5631 23.1949C31.1552 23.1949 29.0482 23.8949 27.0416 25.3949C26.4396 25.7949 25.637 25.7949 25.2357 25.1949C24.8343 24.5949 25.1353 23.6949 25.8376 23.2949C29.1486 20.9949 32.7604 20.5949 36.3723 19.9949C36.3723 19.9949 36.573 19.9949 36.874 19.6949C38.3789 17.7949 39.4826 15.9949 41.0879 14.0949C42.6932 12.0949 44.8001 10.2949 46.4054 8.89486C48.6127 6.99486 50.0173 6.39486 51.5222 5.59486C51.9236 5.39486 51.4219 5.19486 51.3216 5.19486C43.1948 3.69486 34.7671 1.69486 26.7406 4.69486C21.1221 6.79486 18.7142 11.1949 19.9182 14.0949C20.7208 16.1949 23.53 16.4949 26.1386 15.2949C28.2456 14.1949 30.2522 12.5949 31.6568 10.3949C32.4595 9.19486 34.0647 10.0949 33.1618 12.1949C30.7538 17.6949 26.3393 22.0949 20.8211 22.2949C16.1056 22.4949 13.196 18.9949 13.196 14.7949C13.196 6.49486 22.5267 0.994859 32.2588 0.194859C43.9975 -0.805141 55.1341 2.29486 66.8728 3.79486C75.8022 4.89486 84.4306 4.89486 93.36 2.79486C94.4637 2.59486 95.166 3.29486 95.0656 4.29486C94.9653 5.79486 93.7613 7.29486 90.8518 8.99486C87.4405 10.7949 83.929 11.3949 80.3171 11.3949C71.2873 11.3949 63.0602 7.89486 54.4318 6.09486C54.4318 6.49486 54.5321 6.89486 54.2312 7.19486C49.5156 10.6949 45.2014 14.1949 42.2918 19.1949C42.1915 19.2949 42.1915 19.3949 42.3922 19.3949C44.9004 19.2949 47.1077 19.1949 49.5156 18.9949C49.917 18.9949 49.9169 18.8949 49.9169 18.5949C49.7163 16.8949 50.2179 14.8949 51.7229 13.5949C53.2278 12.1949 55.2345 12.0949 56.5388 13.0949C58.0437 14.1949 57.8431 16.2949 57.0404 17.7949C56.2378 19.3949 54.9335 20.1949 53.6292 20.5949C53.6292 20.5949 53.3282 20.6949 53.4285 20.8949C53.5288 21.2949 55.2345 22.2949 55.4351 22.4949C55.6358 22.6949 55.5354 23.0949 55.2345 23.3949C55.0338 23.5949 54.7328 23.7949 54.4318 23.7949C54.1308 23.7949 53.9302 23.6949 53.5288 23.4949C52.7262 23.0949 51.7229 22.3949 51.1209 21.4949C50.9202 21.1949 50.8199 21.1949 50.2179 21.1949C47.7097 21.3949 43.7968 21.6949 41.0879 21.9949C40.4859 22.0949 40.3856 22.1949 40.1849 22.3949C35.971 29.3949 31.3558 36.8949 26.4396 41.9949C20.9215 47.3949 16.5069 48.8949 11.7914 48.8949Z" fill="white"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_118_324">
                                  <rect width="127.119" height="50" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>}/>
                    <CarBrand brandName={'Nissan'}
                              brandLink={'#'}
                              bgColor={'bg-[#E82127]'}
                              brandSVG={<svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 60 50" fill="none">
                              <g clip-path="url(#clip0_118_328)">
                                <path d="M8.46294 17.4574C11.568 8.45499 20.1527 2.37226 29.8333 2.37226C39.514 2.37226 48.0986 8.45499 51.2037 17.4574V17.5182H58.0228V16.7275L55.2221 16.4234C53.4565 16.2409 53.0912 15.4501 52.6041 14.4769L52.4823 14.2336C48.4031 5.59611 39.514 0 29.8333 0C20.1527 0 11.2636 5.59611 7.12348 14.2336L7.00171 14.4769C6.57552 15.4501 6.14933 16.2409 4.44457 16.4234L1.58301 16.7275V17.5182H8.40205L8.46294 17.4574Z" fill="white"/>
                                <path d="M51.2646 32.4818V32.5426C48.0987 41.5451 39.514 47.6278 29.8333 47.6278C20.1527 47.6278 11.568 41.5451 8.46294 32.5426V32.4818H1.58301V33.2726L4.44457 33.5767C6.21022 33.7592 6.57552 34.5499 7.0626 35.5232L7.18437 35.7665C11.2027 44.404 20.1527 50.0001 29.8333 50.0001C39.514 50.0001 48.4031 44.404 52.5432 35.7665L52.665 35.5232C53.1521 34.5499 53.5174 33.82 55.283 33.5767L58.1446 33.2726V32.4818H51.2646Z" fill="white"/>
                                <path d="M13.8207 21.837H12.2377V28.7713H13.8207V21.837Z" fill="white"/>
                                <path d="M8.52381 28.7105V21.837H7.0017V27.0074L1.9483 21.837H0V28.7105H1.52211V23.5402L6.63639 28.7105H8.52381Z" fill="white"/>
                                <path d="M43.167 21.837L38.9051 28.7713H40.7316L41.4622 27.5548H46.3939L47.1245 28.7713H48.951L44.6891 21.837H43.167ZM45.6633 26.2166H42.2537L43.9585 23.4185L45.6633 26.2166Z" fill="white"/>
                                <path d="M34.5823 27.3114C34.5214 27.3114 34.3388 27.3114 34.2779 27.3114H27.885V28.7104H34.3388C34.3997 28.7104 34.765 28.7104 34.8259 28.7104C36.1653 28.5888 36.7133 27.5547 36.7133 26.5815C36.7133 25.6082 36.1044 24.635 34.8867 24.5133C34.7041 24.5133 34.5214 24.5133 34.3997 24.5133H30.1987C30.016 24.5133 29.8942 24.5134 29.7116 24.4525C29.4072 24.3917 29.2245 24.1484 29.2854 23.8443C29.2854 23.5401 29.468 23.2968 29.7725 23.236C29.8942 23.1752 30.0769 23.1752 30.1987 23.1752H36.2871V21.7761H30.1378C29.9551 21.7761 29.7116 21.7761 29.5289 21.837C28.4939 21.9586 27.7024 22.8102 27.7024 23.8443C27.7024 24.6958 28.2504 25.7299 29.468 25.8515C29.7116 25.8515 29.8942 25.9124 30.1378 25.8515H34.217C34.2779 25.8515 34.4606 25.8515 34.5214 25.8515C34.8867 25.9124 35.1303 26.2165 35.1303 26.5206C35.1303 26.9464 34.8867 27.2506 34.5823 27.3114Z" fill="white"/>
                                <path d="M23.3796 27.3115C23.3187 27.3115 23.136 27.3115 23.0751 27.3115H16.7432V28.7105H23.136C23.1969 28.7105 23.5622 28.7105 23.6231 28.7105C24.9626 28.5889 25.5714 27.5548 25.5714 26.6424C25.5714 25.73 24.9626 24.6959 23.7449 24.5743C23.5622 24.5743 23.3796 24.5743 23.2578 24.5743H19.0568C18.8741 24.5743 18.7524 24.5743 18.5697 24.5134C18.2653 24.4526 18.0826 24.2093 18.1435 23.9052C18.1435 23.601 18.3262 23.3577 18.6306 23.2969C18.7524 23.2361 18.935 23.2361 19.0568 23.2361H25.1452V21.837H18.935C18.7524 21.837 18.5088 21.837 18.3262 21.8979C17.2911 22.0195 16.4996 22.8711 16.4996 23.9052C16.4996 24.7567 17.0476 25.7908 18.2653 25.9125C18.5088 25.9125 18.6915 25.9733 18.935 25.9125H23.0143C23.0751 25.9125 23.2578 25.9125 23.3187 25.9125C23.684 25.9733 23.9275 26.2774 23.9275 26.5816C23.9884 26.9465 23.684 27.2507 23.3796 27.3115Z" fill="white"/>
                                <path d="M59.6666 28.7105V21.837H58.1445V27.0074L53.0911 21.837H51.1428V28.7105H52.6649V23.5402L57.7792 28.7105H59.6666Z" fill="white"/>
                                <path d="M55.7092 45.8029C56.4398 45.8029 57.0487 46.4112 57.0487 47.1411C57.0487 47.8711 56.4398 48.4793 55.7092 48.4793C54.9786 48.4793 54.3698 47.8711 54.3698 47.1411C54.3698 46.7762 54.4915 46.472 54.7959 46.1679C54.9786 45.9246 55.3439 45.7421 55.7092 45.8029ZM55.7092 48.1752C56.0136 48.1752 56.2572 48.0535 56.4398 47.8711C56.6225 47.6886 56.7442 47.3844 56.7442 47.1411C56.7442 46.5937 56.2572 46.1071 55.7092 46.1679C55.1612 46.1679 54.6742 46.6545 54.6742 47.202C54.6742 47.6886 55.1004 48.1752 55.7092 48.1752ZM55.1612 47.8102V46.472C55.3439 46.472 55.4657 46.4112 55.6483 46.4112C55.8919 46.4112 56.2572 46.472 56.2572 46.7762C56.2572 46.9586 56.1354 47.0803 55.9527 47.0803C56.0745 47.1411 56.1354 47.2628 56.1963 47.3844C56.1963 47.5061 56.2572 47.6277 56.318 47.6886H56.0136C55.9527 47.5669 55.9527 47.4453 55.8919 47.3844C55.831 47.202 55.7092 47.202 55.4657 47.202V47.7494L55.1612 47.8102ZM55.4657 47.0195C55.7092 47.0195 55.9527 47.0195 55.9527 46.837C55.9527 46.7153 55.8919 46.6545 55.6483 46.6545C55.5874 46.6545 55.5266 46.6545 55.4657 46.6545V47.0195Z" fill="white"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_118_328">
                                  <rect width="59.6667" height="50" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>}/>
                      <CarBrand brandName={'Volkswagen'}
                                brandLink={"#"}
                                bgColor={"bg-[#001E50]"}
                                brandSVG={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <g clip-path="url(#clip0_118_370)">
                                  <path d="M25 47.0833C12.9167 47.0833 3.02083 37.0833 3.02083 25C3.02083 22.5 3.4375 20.1042 4.27083 17.8125L17.0833 42.8125C17.2917 43.125 17.3958 43.4375 17.9167 43.4375C18.3333 43.4375 18.5417 43.125 18.75 42.8125L24.6875 29.4792C24.7917 29.2708 24.8958 29.1667 25 29.1667C25.2083 29.1667 25.2083 29.375 25.3125 29.4792L31.3542 42.8125C31.5625 43.125 31.6667 43.4375 32.1875 43.4375C32.6042 43.4375 32.8125 43.125 33.0208 42.8125L45.8333 17.8125C46.6667 20 47.0833 22.5 47.0833 25C46.9792 37.0833 37.0833 47.0833 25 47.0833ZM25 19.2708C24.7917 19.2708 24.7917 19.0625 24.6875 18.9583L17.8125 4.16667C22.3958 2.5 27.5 2.5 32.0833 4.16667L25.2083 18.9583C25.2083 19.0625 25.2083 19.2708 25 19.2708ZM17.8125 35.3125C17.6042 35.3125 17.6042 35.1042 17.5 35L6.25 13.4375C8.22917 10.2083 11.0417 7.5 14.375 5.625L22.2917 22.8125C22.5 23.125 22.6042 23.2292 22.9167 23.2292H27.0833C27.3958 23.2292 27.5 23.125 27.7083 22.8125L35.5208 5.625C38.8542 7.5 41.6667 10.2083 43.6458 13.4375L32.5 35.1042C32.3958 35.3125 32.2917 35.4167 32.1875 35.4167C31.9792 35.4167 31.9792 35.2083 31.875 35.1042L27.6042 25.625C27.3958 25.3125 27.2917 25.2083 26.9792 25.2083H22.9167C22.6042 25.2083 22.5 25.3125 22.2917 25.625L18.0208 35.1042C17.9167 35.2083 17.9167 35.3125 17.8125 35.3125ZM25 50C38.8542 50 50 38.8542 50 25C50 11.1458 38.8542 0 25 0C11.1458 0 0 11.1458 0 25C0 38.8542 11.1458 50 25 50Z" fill="white"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_118_370">
                                    <rect width="50" height="50" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>} />
                            
                    </div>

                </div>

            </div>
        </div>
    );
}

export default LandingPage;
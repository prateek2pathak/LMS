import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import homeImage from '../assets/Images/homePageMainImage.png'

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-10 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find out best 
                        <span className="text-yellow-500 font-bold"> Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have very large library of courses.... 
                    </p>
                    <div className="space-x-6">
                        <Link to='/courses'>
                            <button className="rounded-md bg-yellow-500 font-semibold text-lg hover:bg-yellow-600 hover:text-gray-200 transition-all-ease-in-out duration-200  px-5 py-3 ">
                                Explore courses
                            </button>
                        </Link>
                        <Link to='/contactus'>
                            <button className="rounded-md border border-yellow-500 font-semibold text-lg hover:bg-yellow-600 hover:text-gray-200 transition-all-ease-in-out duration-200  px-5 py-3 ">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                </div>
                <div>
                    <img src={homeImage} alt="homeImage" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default  HomePage;
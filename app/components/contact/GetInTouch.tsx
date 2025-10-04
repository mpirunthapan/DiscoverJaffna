import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-sm sm:text-base text-gray-700">
                Have a question or need assistance? We're here to help.  
                Reach out to us through any of the methods below.
            </p>

        <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-blue-500 text-lg sm:text-xl mt-1" />
            <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Phone</h4>
                <p className="text-gray-600 text-sm sm:text-base">Our lines are open from 9 AM to 6 PM, Monday to Friday.</p>
                <a href="tel:+94766808474" className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                    +94 (76) 680 8474
                </a>
            </div>
        </div>

        <div className="flex items-start space-x-3">
            <FaEnvelope className="text-blue-500 text-lg sm:text-xl mt-1" />
            <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                <p className="text-gray-600 text-sm sm:text-base">For general inquiries, feel free to send us an email.</p>
                <a href="mailto:mpirunthapan@gmail.com.com" className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                    mpirunthapan@gmail.com
                </a>
            </div>
        </div>


        <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-blue-500 text-lg sm:text-xl mt-1" />
            <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Office Address</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                    Visit us at our main office in the heart of Jaffna.
                </p>
                <p className="text-gray-800 text-sm sm:text-base">No. 25, KKS Road, Jaffna, Sri Lanka</p>
            </div>
        </div>
        </div>
    );
};

export default GetInTouch;

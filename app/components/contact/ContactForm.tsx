import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { data } from "react-router";
import { useNavigate } from "react-router";

const ContactForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
        time: new Date().toLocaleString(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            time: new Date().toLocaleString(),
        }

        emailjs
        .send(
            "service_ru2sfbh",    // Replace with your service ID
            "template_kd95h57",   // Replace with your template ID
            dataToSend,
            "FYh8TVm45p9MpQycv"     // Replace with your public key
        )
        .then(
            (result) => {
            alert("Message sent successfully!");
            setFormData({ from_name: "", from_email: "", subject: "", message: "", time: "" });
            navigate("/");
            },
            (error) => {
            alert("Failed to send message, please try again.");
            console.error(error.text);
            }
        );
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Send us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name
        </label>
        <input
        type="text"
        name="from_name"
        placeholder="Enter your full name"
        value={formData.from_name}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:ring-2 text-gray-900"
        />
    </div>

    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Email Address
        </label>
        <input
        type="email"
        name="from_email"
        placeholder="Enter your email"
        value={formData.from_email}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:ring-2 text-gray-900"
        />
    </div>

    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Subject
        </label>
        <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:ring-2 text-gray-900"
        />
    </div>

    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        Message
        </label>
        <textarea
        name="message"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
        className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:ring-2 text-gray-900"
        />
    </div>

    <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-md hover:bg-blue-600 transition text-sm sm:text-base cursor-pointer"
    >
        Send Message
    </button>
</form>

        </div>
    );
};

export default ContactForm;

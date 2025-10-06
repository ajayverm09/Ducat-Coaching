import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqItems = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer a wide range of courses including test preparation, academic coaching, and skill development programs.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll through our website by visiting the Courses page or by contacting our admissions team directly.",
    },
    {
      question: "What is your teaching methodology?",
      answer:
        "We use a personalized approach with small class sizes, experienced instructors, and comprehensive study materials.",
    },
    {
      question: "Do you offer online classes?",
      answer:
        "Yes, we offer both in-person and online learning options to accommodate different learning preferences.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Using react-helmet instead of next/head */}
      <Helmet>
        <title>Contact Us | Excellence Coaching Institute</title>
        <meta
          name="description"
          content="Contact Excellence Coaching Institute for inquiries about our courses and programs."
        />
        <meta
          name="keywords"
          content="coaching institute, contact, education, courses"
        />
        <meta
          property="og:title"
          content="Contact Us | Excellence Coaching Institute"
        />
        <meta
          property="og:description"
          content="Reach out to our team for any questions about our coaching programs."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative text-white py-16 md:py-24">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.ducatindia.com/static/images/context-us.png')",
          }}
        >
          {/* Optional dark overlay if image is too bright */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about our programs? Reach out to our team and we'll
            be happy to assist you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Send us a message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Contact Information
              </h2>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">
                        Our Location
                      </h3>
                      <p className="text-gray-600">
                        123 Education Street, Knowledge City, Learning State
                        12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">
                        Phone Number
                      </h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">
                        Email Address
                      </h3>
                      <p className="text-gray-600">
                        info@excellencecoaching.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="font-bold text-lg text-blue-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-900 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-900 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-900 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-900 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Find Us Here
          </h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019631072143!2d-122.41941548468102!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e4d5a5b5b8f%3A0x5f620aa7354e17f1!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column: Image */}
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="FAQ"
                className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
              />
            </div>

            {/* Right column: FAQ items */}
            <div>
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow mb-4 overflow-hidden"
                >
                  <div
                    className={`p-6 cursor-pointer flex justify-between items-center transition-colors duration-300 ${
                      activeFaq === index
                        ? "bg-blue-800 text-white"
                        : "bg-white text-blue-900"
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-bold text-lg">{item.question}</h3>
                    {activeFaq === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>

                  {activeFaq === index && (
                    <div className="p-6 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

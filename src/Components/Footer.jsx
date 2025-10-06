import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    // Data structured according to the image provided
    const footerSections = [
        {
            title: "Our Popular Courses",
            items: [
                { name: "Java FullStack", route: "#" },
                { name: "Python Full Stack", route: "#" },
                { name: ".Net Full Stack", route: "#" },
                { name: "Mern Stack", route: "#" },
                { name: "Mean Stack", route: "#" },
                { name: "PHP Full Stack", route: "#" },
                { name: "UI/UX Course", route: "#" },
                { name: "Data Analytics", route: "#" }
            ],
            // Use colSpan 2 on medium screens for wider columns as seen in the image
            mdColSpan: 2, 
        },
        {
            title: "Other Top Courses",
            items: [
                { name: "SAP Hana Fico", route: "#" },
                { name: "Salesforce", route: "#" },
                { name: "CCNA", route: "#" },
                { name: "AutoCAD", route: "#" },
                { name: "Graphic Designing", route: "#" },
                { name: "Multimedia & Animation", route: "#" },
                { name: "Manual + Selenium Testing", route: "#" },
                { name: "Full Stack QA", route: "#" }
            ],
            mdColSpan: 2, 
        },
        {
            title: "Policies",
            items: [
                { name: "Contact Us", route: "/contact" },
                { name: "Reviews", route: "#" },
                { name: "About Us", route: "/about" },
                { name: "Privacy Policy", route: "#" },
                { name: "Refund Policy", route: "#" },
                { name: "Terms and Conditions", route: "#" },
                { name: "Blog", route: "/blogs" },
                { name: "TUTORIALS", route: "#" }
            ],
            mdColSpan: 1, // Single column width
        },
    ];

    // Social media links with Lucide React icons
    const socialLinks = [
        { 
            name: "Facebook", 
            url: "https://facebook.com", 
            icon: <Facebook className="w-6 h-6" />,
            color: "hover:text-blue-400"
        },
        { 
            name: "Instagram", 
            url: "https://instagram.com", 
            icon: <Instagram className="w-6 h-6" />,
            color: "hover:text-pink-500"
        },
        { 
            name: "YouTube", 
            url: "https://youtube.com", 
            icon: <Youtube className="w-6 h-6" />,
            color: "hover:text-red-500"
        },
        { 
            name: "LinkedIn", 
            url: "https://linkedin.com", 
            icon: <Linkedin className="w-6 h-6" />,
            color: "hover:text-blue-500"
        }
    ];

    return (
        // Dark background matching the image: bg-[#101931]
        <footer className="bg-[#101931] text-white pt-12 pb-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Grid for Footer Content (Responsive 4-column structure) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {footerSections.map((section, index) => (
                        <div 
                            key={index} 
                            className={`md:col-span-${section.mdColSpan || 1}`}
                        >
                            <h3 className="text-lg font-bold mb-4 text-[#75CFF0] tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="space-y-2 text-sm">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {item.route.startsWith('/') ? (
                                            <Link 
                                                to={item.route}
                                                className="text-gray-300 hover:text-blue-400 transition duration-150"
                                            >
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <a 
                                                href={item.route}
                                                className="text-gray-300 hover:text-blue-400 transition duration-150"
                                                onClick={(e) => {
                                                    if (item.route === '#') {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Follow Us Section */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold mb-4 text-[#75CFF0] tracking-wider">
                            Follow Us!
                        </h3>
                        <div className="flex space-x-4">
                            {/* Social Media Icons */}
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`text-white ${social.color} transition duration-150`} 
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright/Bottom Bar */}
                <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Tech Institute. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
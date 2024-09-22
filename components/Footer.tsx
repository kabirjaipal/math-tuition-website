import navLinks from "@/settings/navLinks";
import settings from "@/settings/settings";
import socialLinks from "@/settings/socialLinks";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white">About Us</h3>
            <p className="mt-4 text-gray-400">{settings.footerDescription}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <p className="mt-4 text-gray-400">
              {settings.contactUs.address}
              <br />
              Email:{" "}
              <span>
                <Link href={`mailto:${settings.contactUs.email}`}>
                  {settings.contactUs.email}
                </Link>
              </span>
              <br />
              Phone: {settings.contactUs.phone}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  target="_blank"
                  href={link.url}
                  key={index}
                  className="hover:text-white"
                >
                  <link.icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} {settings.title}. All rights
            reserved.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Developed by{" "}
            <Link
              href="https://bit.ly/kabirjaipal"
              className="hover:text-white"
              target="_blank"
            >
              Kabir Jaipal
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

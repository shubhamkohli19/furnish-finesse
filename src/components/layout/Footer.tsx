import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-wood-light">WoodCraft</h3>
            <p className="text-gray-300 mb-4">
              Crafting beautiful, sustainable furniture for your home. Quality wood pieces that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-wood-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-wood-light">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=chairs" className="text-gray-300 hover:text-white transition-colors">
                  Chairs
                </Link>
              </li>
              <li>
                <Link to="/products?category=tables" className="text-gray-300 hover:text-white transition-colors">
                  Tables
                </Link>
              </li>
              <li>
                <Link to="/products?category=sofas" className="text-gray-300 hover:text-white transition-colors">
                  Sofas
                </Link>
              </li>
              <li>
                <Link to="/products?category=storage" className="text-gray-300 hover:text-white transition-colors">
                  Storage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-wood-light">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-wood-light" />
                <span className="text-gray-300">+91 97804 53630</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-wood-light" />
                <span className="text-gray-300">furniturehouse34@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-wood-light" />
                <span className="text-gray-300">Shivjot Enclave, Kharar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WoodCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import icon từ react-icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Liên Hệ</h3>
            <p>Địa chỉ: Đại Học FPT Hà Nội</p>
            <p>Điện thoại: (012) 345-6789-JQK</p>
            <p>Email: cimchun.me@bloom.com</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Thông Tin</h3>
            <ul>
              <li><a href="/shop/search" className="hover:text-red-500">Giới Thiệu</a></li>
          
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Theo Dõi Chúng Tôi</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} Bloom.</p>
      </div>
    </footer>
  );
}

export default Footer;

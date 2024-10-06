import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Thêm icon Instagram
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const [showContacts, setShowContacts] = useState(false);

  const handleToggleContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div className="fixed flex flex-col items-center gap-2 lg:right-4 2xl:right-5 lg:bottom-6 right-2 bottom-2 transition-transform duration-500">
      <div className="p-3 rounded-full shadow-md bg-primary">
        <button onClick={handleToggleContacts} className="flex items-center gap-2 p-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary">
          <FontAwesomeIcon icon={faAddressBook} className="w-6 h-6 text-white" />
          <span className="text-lg">Liên Hệ</span>
        </button>
      </div>

      {showContacts && (
        <div className="flex flex-col gap-2 mt-3">
          <div className="p-2 rounded-full shadow-md bg-primary-light">
            <a href="tel:19009300" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-white" />
              <span className="text-white">Gọi điện</span>
            </a>
          </div>

          <div className="p-2 rounded-full shadow-md bg-primary-light">
            <a href="https://zalo.me/0961897090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCommentDots} className="w-6 h-6 text-white" />
              <span className="text-white">Zalo</span>
            </a>
          </div>

          <div className="p-2 rounded-full shadow-md bg-primary-light">
            <a href="https://www.facebook.com/BLOOMbodymist" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-white" />
              <span className="text-white">Facebook</span>
            </a>
          </div>

          <div className="p-2 rounded-full shadow-md bg-primary-light">
            <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 text-white" />
              <span className="text-white">TikTok</span>
            </a>
          </div>

          {/* Thêm icon Instagram cho liên kết Threads */}
          <div className="p-2 rounded-full shadow-md bg-primary-light">
            <a href="https://www.threads.net/@bloombodymist?fbclid=IwY2xjawFkgEdleHRuA2FlbQIxMAABHTGsLXLmvVUXrYZjxdEY0PZr-KyGU9OpTu6sSrVoMSDeRMmhe2s6fT0c_g_aem_dGJwqHZOKVt_Nbh2375PFA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-white" /> {/* Sử dụng icon Instagram */}
              <span className="text-white">Threads</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacts;

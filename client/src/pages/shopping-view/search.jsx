import React from 'react';
import Footer from './footer';

function SearchProducts() {
  return (
    <div>
      <div className="container mx-auto md:px-6 px-4 py-8">
        {/* Giới thiệu */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Giới thiệu về Xịt Thơm Bloom</h2>
          <img 
            src="https://res.cloudinary.com/dqnvkuji8/image/upload/v1726846887/csdijjtldtmyyqqrzwel.png" 
            alt="Xịt Thơm Bloom" 
            className="w-1/4 h-auto mb-4 rounded-lg shadow-lg mx-auto"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Xịt thơm Bloom là một sản phẩm đặc biệt được chế tạo từ các thành phần tự nhiên, 
            mang đến hương thơm tươi mát và dễ chịu. Sản phẩm không chỉ giúp bạn tự tin hơn 
            mà còn tạo cảm giác thư giãn mỗi khi sử dụng. 
          </p>
        </section>

        {/* Hướng dẫn sử dụng */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Hướng dẫn sử dụng</h2>
          <img 
            src="https://cdn.tgdd.vn/News/Thumb/0/cach-su-dung-xit-phong-de-thom-lau-va-nhung-luu-y-thumb-1200x628.jpg" 
            alt="Hướng dẫn sử dụng" 
            className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
          />
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>Xịt một lượng vừa đủ lên cơ thể, quần áo hoặc trong không gian phòng.</li>
            <li>Tránh xịt trực tiếp lên mặt hoặc vùng da nhạy cảm.</li>
            <li>Sử dụng hàng ngày để tận hưởng hương thơm lâu dài.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hãy thử nghiệm và cảm nhận sự khác biệt mà Bloom mang lại, để tự tin hơn mỗi ngày 
            và thu hút mọi ánh nhìn xung quanh.
          </p>
        </section>

        {/* Mẹo kết hợp hương thơm */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Mẹo kết hợp hương thơm</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Kết hợp với kem dưỡng ẩm để tạo hương thơm lâu hơn.</li>
            <li>Sử dụng các sản phẩm chăm sóc cơ thể có hương hoa lan để tăng cường mùi hương.</li>
            <li>Xịt một chút lên tóc để tạo điểm nhấn thơm mát trong suốt cả ngày.</li>
          </ul>
        </section>

        {/* Thành phần */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Thành phần của nước xịt thơm</h2>
        
          <p className="text-gray-700 mb-4">
            Nước xịt thơm Bloom được làm từ hương thơm cao cấp cùng với các thành phần phụ liệu 
            như:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Cồn thơm:</strong> Giúp phân tán hương thơm nhanh chóng, mang lại cảm giác tươi mát.</li>
            <li><strong>Hương thơm cao cấp:</strong> Sử dụng các loại hương cao cấp để tạo nên hương thơm đặc trưng.</li>
            <li><strong>Phụ liệu:</strong> Các thành phần khác giúp cải thiện độ bám hương và an toàn cho da.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Hương thơm cao cấp giúp tăng cường sự tự tin và thu hút mọi ánh nhìn xung quanh.
          </p>
        </section>

        {/* Hạn sử dụng và cách bảo quản */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Hạn sử dụng và cách bảo quản</h2>
          <p className="text-gray-700 mb-4">
            - Hạn sử dụng: 3 năm kể từ ngày sản xuất.<br />
            - Cách bảo quản: Để nơi khô ráo, tránh ánh nắng trực tiếp và nhiệt độ cao. Bảo quản 
            đúng cách sẽ giúp sản phẩm duy trì hương thơm lâu dài.
          </p>
          <img 
            src="https://vnn-imgs-a1.vgcloud.vn/giadinh.mediacdn.vn/zoom/600_315/296230595582509056/2021/12/9/h5-16390378701651586254423-0-160-400-800-crop-16390380768101311727082.jpg?width=360&s=8AO-EyvFAMnjXsMOLHTWDg" 
            alt="Bảo quản sản phẩm" 
            className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
          />
        </section>

        {/* Các loại hương */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Các loại hương của Bloom</h2>
          <p className="text-gray-700 mb-4">
            Xịt thơm Bloom có nhiều loại hương đa dạng, bao gồm:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Hương vani, gỗ tuyết tùng và oải hương: Tạo cảm giác ấm áp, dễ chịu.</li>
            <li>Hương biển cả, lô hội và tinh dầu bưởi: Mang lại sự tươi mát, thoải mái.</li>
            <li>Hương vani, mận đỏ và hoa nhài: Kết hợp ngọt ngào, quyến rũ.</li>
            <li>Hương cam quýt và hoa nhài: Cảm giác tươi mới, tràn đầy năng lượng.</li>
            <li>Hương trái cây nhiệt đới và hoa lan: Tạo không gian thơm ngát, dễ chịu.</li>
          </ul>
          {/* Danh sách hình ảnh cho các loại hương */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <img 
              src="https://res.cloudinary.com/dqnvkuji8/image/upload/v1726846887/csdijjtldtmyyqqrzwel.png" 
              alt="Hương trái cây nhiệt đới và hoa lan" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="https://res.cloudinary.com/dqnvkuji8/image/upload/v1726810450/oscvfqo32khsxzxn054e.png" 
              alt="Hương vani, gỗ tuyết tùng và oải hương" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="https://res.cloudinary.com/dqnvkuji8/image/upload/v1726664883/WEB_M%C3%B9i_5_tevmaw.png" 
              alt="Hương biển cả, lô hội và tinh dầu bưởi" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
             <img 
              src="https://res.cloudinary.com/dqnvkuji8/image/upload/v1726846625/pkdlldcir1vwnlfneaqg.png" 
              alt="Hương biển cả, lô hội và tinh dầu bưởi" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
             <img 
              src="https://res.cloudinary.com/dqnvkuji8/image/upload/v1726810579/hxcjnbkytcvmr7wciexr.png" 
              alt="Hương biển cả, lô hội và tinh dầu bưởi" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default SearchProducts;

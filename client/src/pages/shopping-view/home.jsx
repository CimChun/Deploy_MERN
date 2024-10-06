import { Button } from "@/components/ui/button"; // Nhập khẩu component Button

import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Contact,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react"; // Các icon
import { Card, CardContent } from "@/components/ui/card"; // Nhập khẩu Card
import { useEffect, useState } from "react"; // Hooks
import { useDispatch, useSelector } from "react-redux"; // Redux
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice"; // Các hành động Redux
import ShoppingProductTile from "@/components/shopping-view/product-tile"; // Component sản phẩm
import { useNavigate } from "react-router-dom"; // Điều hướng
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice"; // Hành động giỏ hàng
import { useToast } from "@/components/ui/use-toast"; // Toast thông báo
import ProductDetailsDialog from "@/components/shopping-view/product-details"; // Dialog chi tiết sản phẩm
import { getFeatureImages } from "@/store/common-slice"; // Lấy ảnh đặc trưng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Nhập khẩu Font Awesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Nhập khẩu icon mũi tên
import { Swiper, SwiperSlide } from 'swiper/react'; // Nhập khẩu Swiper
import 'swiper/swiper-bundle.css'; // Nhập khẩu style cho Swiper
import Footer from "./footer";
import Contacts from "./contact";

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToBlog() {
    navigate('/shop/search'); // Thay thế '/blog' với đường dẫn tới trang blog của bạn
  }

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Sản phẩm đã được thêm vào giỏ hàng",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);
  const images = [
    "https://res.cloudinary.com/dqnvkuji8/image/upload/v1726846887/csdijjtldtmyyqqrzwel.png",
    "https://res.cloudinary.com/dqnvkuji8/image/upload/v1726810450/oscvfqo32khsxzxn054e.png",
    "https://res.cloudinary.com/dqnvkuji8/image/upload/v1726664883/WEB_M%C3%B9i_5_tevmaw.png",
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
            <img
              src={slide?.image}
              key={index}
              className={`${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-90"
                } absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000`}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        {/* Nút Xem Thêm */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Button onClick={handleNavigateToBlog} className="bg-red-500 text-white text-lg py-7 px-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            Tìm hiểu thêm <span style={{ paddingLeft: "50px" }}><FontAwesomeIcon icon={faArrowRight} /></span>
          </Button>
        </div>
      </div>
      <br />

      {/* Phần Mô Tả Xịt Thơm */}
      <div className="relative w-full overflow-hidden bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 py-12 animate-slide-left">
          <div className="flex flex-col justify-center items-start animate-fade-in-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Xịt Thơm Bloom</h1>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ maxHeight: '300px', overflow: 'hidden' }}>
              Nước xịt thơm Bloom nhẹ nhàng và thư thái, hương thơm trái cây tươi mát hòa quyện cùng những nốt hương hoa quyến rũ, mang lại cảm giác thư giãn và tươi mới cho tâm hồn bạn. Hãy để hương thơm của vỏ cam chanh thơm mát cùng với các loại hạt tự nhiên thổi bay mọi căng thẳng trong cuộc sống hàng ngày của bạn.
              <br />
              <br />
              Khám phá thêm về sản phẩm và tận hưởng cảm giác tự tin mà nó mang lại. Bạn đã sẵn sàng để trải nghiệm một hành trình mới với Bloom chưa? Hãy cùng chúng tôi tìm hiểu và cảm nhận sự khác biệt từ những giọt nước xịt thơm này!
            </p>
            <br />
            <Button variant="outline" className="self-start bg-red-500 text-white text-lg py-7 px-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl" onClick={() => handleNavigateToListingPage("Xịt Thơm", "category")}>
              Khám Phá Ngay
            </Button>
          </div>
          <div className="flex justify-center animate-fade-in-right">
            <img
              src={images[currentSlide]}
              alt="Bodymist"
              className="w-full h-auto max-w-md object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <br />


      <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", height: "100px", position: "relative", backgroundColor: "#f0f0f0" }}>
        <h1
          style={{
            display: "inline-block",
            animation: "marquee 50s linear infinite",
            fontSize: "50px",
            lineHeight: "100px",
            margin: 0,
            paddingRight: "100%",
            color: "black",
            textShadow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)",
            fontWeight: "bold",
            textTransform: "uppercase" // Chữ in hoa
          }}
        >
          HƯƠNG THƠM TỪ BLOOM – NÓI LÊN CẢM XÚC CỦA BẠN!
          <span style={{ margin: "0 50px" }}></span> {/* Khoảng cách giữa các đoạn */}
          KHÁM PHÁ ĐẲNG CẤP THƠM NGÁT!
          <span style={{ margin: "0 50px" }}></span> {/* Khoảng cách giữa các đoạn */}
          HÀNH TRÌNH ĐẾN VỚI SỰ TƯƠI MỚI!
        </h1>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Sản Phẩm Bán Chạy
          </h2>
          {/* Swiper cho sản phẩm bán chạy */}
          <Swiper
            spaceBetween={20}
            slidesPerView={3} // Số lượng sản phẩm hiển thị cùng lúc
            navigation // Hiện thị nút điều hướng
          >
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                <SwiperSlide key={productItem.id}>
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                </SwiperSlide>
              ))
              : null}
          </Swiper>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
      <Footer />
      <Contacts />

    </div>
  );
}

export default ShoppingHome;

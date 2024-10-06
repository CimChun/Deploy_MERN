import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card
      className="w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      style={{
        animation: "fadeIn 0.5s ease-in-out forwards",
      }}
    >
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[500px] object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Chỉ còn ${product?.totalStock} sản phẩm`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[16px] text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
              style={{ color: "red", fontSize: "17px" }}
            >
              Giá: {product?.price}.000 vnđ
            </span>
            {product?.salePrice > 0 ? (
              <span
                style={{ color: "red", fontSize: "18px" }}
                className="text-lg font-semibold text-primary"
              >
                Sale còn: {product?.salePrice}.000
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className=""
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;

import { useSelector } from "react-redux";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView({ orderDetails }) {
  const { user } = useSelector((state) => state.auth);

  // Tính toán tổng tiền
  const totalAmount = orderDetails?.cartItems?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0) || 0;

  return (
    <DialogContent className="sm:max-w-[600px] p-6">
      <div className="grid gap-6">
        {/* Thông tin đơn hàng */}
        <div className="grid gap-4">
          <div className="font-medium text-lg">Chi tiết đơn hàng</div>
          <Separator />
          <ul className="grid gap-4">
            {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
              ? orderDetails.cartItems.map((item) => (
                  <li
                    key={item._id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/10 p-4 rounded-lg"
                  >
                    <div className="w-full sm:w-1/3 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="font-medium">{item.title}</span>
                      <div className="text-sm text-muted-foreground">
                        Số lượng: {item.quantity}
                      </div>
                      <div className="text-right mt-2">
                        <span className="font-semibold" style={{ color: "red" }}>
                          Giá: {item.price}.000 vnđ
                        </span>
                      </div>
                    </div>
                  </li>
                ))
              : null}
          </ul>
          {/* Hiển thị tổng tiền */}
          <div className="mt-4 font-semibold text-lg text-right">
            <span>Tổng tiền: </span>
            <span style={{ color: "red" }}>{totalAmount}.000 vnđ</span>
          </div>
        </div>

        {/* Thông tin vận chuyển */}
        <div className="grid gap-4">
          <div className="font-medium text-lg">Thông tin vận chuyển</div>
          <Separator />
          <div className="grid gap-1 text-muted-foreground">
            <div>
              <Label>Tên người nhận:</Label> {user.userName}
            </div>
            <div>
              <Label>Địa chỉ:</Label> {orderDetails?.addressInfo?.address}
            </div>
            <div>
              <Label>Thành phố:</Label> {orderDetails?.addressInfo?.city}
            </div>
            <div>
              <Label>Số điện thoại:</Label> {orderDetails?.addressInfo?.phone}
            </div>
            {orderDetails?.addressInfo?.notes && (
              <div>
                <Label>Ghi chú:</Label> {orderDetails?.addressInfo?.notes}
              </div>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;

import Image from "next/image";
import CommonButton from "../common/commonButton";

const Cart = () => {
  return (
    <div className="py-12">
      <div className="container">

        {/* TABLE SCROLL WRAPPER */}
        <div className="overflow-x-auto">
          
          {/* TABLE HEADER */}
          <div className="grid grid-cols-4 font-semibold border-b pb-4 min-w-[700px]">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {/* PRODUCT ROW 1 */}
          <div className="grid grid-cols-4 items-center py-4 border-b gap-4 min-w-[700px]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/product-img.png"
                alt="LCD"
                width={60}
                height={60}
                className="w-[60px] h-[60px] object-contain"
              />
              <p className="text-sm">LCD Monitor</p>
            </div>

            <p>$650</p>

            <select className="border p-2 rounded-md w-20">
              <option>01</option>
            </select>

            <p>$650</p>
          </div>

          {/* PRODUCT ROW 2 */}
          <div className="grid grid-cols-4 items-center py-4 border-b gap-4 min-w-[700px]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/product-img.png"
                alt="Gamepad"
                width={60}
                height={60}
                className="w-[60px] h-[60px] object-contain"
              />
              <p className="text-sm">HI Gamepad</p>
            </div>

            <p>$550</p>

            <select className="border p-2 rounded-md w-20">
              <option>02</option>
            </select>

            <p>$1100</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row justify-between gap-3 py-6">
          <CommonButton
            text="Return To Shop"
            bg="bg-gray-200"
            className="text-black w-full md:w-auto"
          />

          <CommonButton
            text="Update Cart"
            bg="bg-gray-200"
            className="text-black w-full md:w-auto"
          />
        </div>

        {/* COUPON & TOTAL */}
        <div className="grid md:grid-cols-2 gap-10 mt-8">

          {/* COUPON */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border px-3 rounded-md w-full h-[50px] outline-none"
              />

              <CommonButton
                text="Apply Coupon"
                bg="bg-red-500"
                className="h-[50px] px-6 whitespace-nowrap w-full sm:w-auto"
              />
            </div>
          </div>

          {/* CART TOTAL */}
          <div className="border rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

            <div className="flex justify-between py-1">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>

            <div className="flex justify-between py-1">
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between py-1 font-bold">
              <p>Total:</p>
              <p>$1750</p>
            </div>

            <CommonButton
              text="Proceed to checkout"
              className="w-full mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

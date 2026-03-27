import { TrashIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/shopping-cart";
import MercadoPagoWallet from "./MercadoPagoWallet";

export default function ShoppingCart() {

  const { products, removeProduct, totalAmount, clearShoppingCart } =
    useShoppingCart();

  if (products.length === 0) return "Carrito Vacío.";

  return (
    <div className="bg-white p-4 rounded-lg border shadow-lg w-72">

      <div className="grid gap-y-3 py-3">

        {products.map((product) => (
          <div key={product.id} className="flex gap-x-4 items-center">

            <img
              src={product.image}
              alt={product.title}
              className="w-12 h-12 object-contain"
            />

            <h5 className="w-32 text-ellipsis truncate font-medium">
              {product.title}
            </h5>

            <span className="ml-auto font-bold">
              ${product.price}
            </span>

            <button
              className="hover:bg-red-600 p-1 rounded-full"
              onClick={() => removeProduct(product.id)}
            >
              <TrashIcon className="w-5 h-5 text-red-600" />
            </button>

          </div>
        ))}

      </div>

      <div className="border-t pt-3 mt-3 flex justify-between font-bold">
        <span>Total:</span>
        <span>${totalAmount}</span>
      </div>

      <button
        onClick={clearShoppingCart}
        className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        Va
      </button>

    </div>
  );
}
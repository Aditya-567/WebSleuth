import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} className="product-card">
      <div className="product-card_img-container">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>

        <div className="flex justify-between">
          <p className="text-black opacity-50 text-lg capitalize">
            {product.category}
          </p>

          <p className="text-black text-lg font-semibold">
            <span>{product?.currency}</span>
            <span>{product?.currentPrice}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

// import { Product } from "@/types";
// import Image from "next/image";
// import Link from "next/link";

// interface Props {
//   product: Product;
// }

// const ProductCard = ({ product }: Props) => {
//   return (
//     <Link
//       href={`/products/${product._id}`}
//       className="product-card"
//       style={{ height: "150px", width: "150px" }}
//     >
//       <div className="product-card_img-container ">
//         <Image
//           src={product.image}
//           alt={product.title}
//           width={150}
//           height={150}
//           className="product-card_img"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <h3 className="product-title" style={{ fontSize: "15px" }}>
//           {product.title}
//         </h3>

//         <div className="flex justify-between">
//           <p
//             className="text-black opacity-50 text-lg capitalize"
//             style={{ fontSize: "15px" }}
//           >
//             {product.category}
//           </p>

//           <p
//             className="text-black text-lg font-semibold"
//             style={{ fontSize: "15px" }}
//           >
//             <span>{product?.currency}</span>
//             <span>{product?.currentPrice}</span>
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

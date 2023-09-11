import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";

const WishlistItem = ({ data: { attributes: p, id } }) => {
   const dispatch = useDispatch();

   return (
      <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
         <Link href={`/product/${p.slug}`}>
            <Image
               width={500}
               height={500}
               src={p.thumbnail.data.attributes.url}
               alt={p.name}
            />
         </Link>
         <div className="p-4 text-black/[0.9]">
            <div className="flex items-center">
               <h2 className="text-lg font-medium">{p.name}</h2>
               <FaRegTrashAlt
                  className="ml-auto text-base font-medium text-black-600 z-50"
                  onClick={() => {
                     dispatch(removeFromWishlist({ id: id }))
                  }}
               />
            </div>

            <div className="flex items-center text-black/[0.5]">
               <p className="mr-2 text-lg font-semibold">
                  &#8377;{p.price}
               </p>

               {p.original_price && (
                  <>
                     <p className="text-base font-medium line-through">
                        &#8377;{p.original_price}
                     </p>
                     <p className="ml-auto text-base font-medium text-green-500">
                        {getDiscountedPricePercentage(
                           p.original_price,
                           p.price
                        )}
                        % off
                     </p>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default WishlistItem;
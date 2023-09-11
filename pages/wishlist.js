import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import WishlistItem from "@/components/WishlistItem";
import Link from "next/link";
import Image from "next/image";

export default function Wishlist() {
    const { wishlistItems } = useSelector((state) => state.wishlist);

    return (
        <div className="w-full md:py-20">
        <Wrapper>
            {wishlistItems.length > 0 && (
                <>
                    {/* HEADING AND PARAGRAPH START */}
                    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            Wishlist Items
                        </div>
                    </div>
                    {/* HEADING AND PARAGRAPH END */}

                    {/* products grid start */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                        {wishlistItems.map((item) => (
                            <WishlistItem key={item.id} data={item} />
                        ))}
                    </div>
                    {/* products grid end */}
                </>
            )}

            {/* This is empty screen */}
            {wishlistItems.length < 1 && (
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                    <Image
                        src="/empty-cart.jpg"
                        width={300}
                        height={300}
                        className="w-[300px] md:w-[400px]"
                    />
                    <span className="text-xl font-bold">
                        Your wishlist is empty
                    </span>
                    <span className="text-center mt-4">
                        Looks like you have not added anything in your cart.
                        <br />
                        Go ahead and explore top categories.
                    </span>
                    <Link
                        href="/"
                        className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                    >
                        Continue Shopping
                    </Link>
                </div>
            )}
        </Wrapper>
        </div>
    )
}
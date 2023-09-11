import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import WishlistItem from "@/components/WishlistItem";

export default function Wishlist() {
    const { wishlistItems } = useSelector((state) => state.wishlist);

    return (
        <Wrapper>
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
        </Wrapper>
    )
}
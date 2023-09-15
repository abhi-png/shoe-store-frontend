import React from 'react';
import Wrapper from '@/components/Wrapper';
import { BsFillHouseGearFill } from 'react-icons/bs';

export default function about() {
   return (
      <Wrapper>
         <div className="h-[40rem] grid justify-center content-center">
            <div className="flex items-center">
               <h2 className="font-bold text-2xl mr-2">About Us</h2>
               <BsFillHouseGearFill size={25} />
            </div>
         </div>
      </Wrapper>
   )
}

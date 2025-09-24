import { FaPaypal } from "react-icons/fa";
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className='bg-black  text-white px-8 py-10 '>
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
  <div className="grid grid-cols-4 gap-x-50 gap-y-10 text-sm font-extralight">
    {/* Column 1: Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-2 text-pink-400">Quick Links</h4>
      <p>Banner / Signages</p>
      <p>Calling Card / Business Cards</p>
      <p>Corporate Give Aways</p>
    </div>

    {/* Column 2 */}
    <div>
      <h4 className="text-lg font-semibold mb-4 invisible">Spacer</h4> {/* Keeps alignment */}
      <p>ID / ID Lace</p>
      <p>Invitation</p>
      <p>Stickers and Labels</p>
    </div>
    {/* Column 3 */}
    <div>
      <h4 className="text-lg font-semibold mb-4 invisible">Spacer</h4>
      <p>Marketing Materials</p>
      <p>Temporary Plate Number</p>
      <p>Wall Mural</p>
    </div>

    {/* Column 4: Follow Us */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-pink-400">Follow Us</h4>
      <div className="flex space-x-4 text-2xl">
        <a href="https://www.facebook.com/photo/?fbid=1237045431770415&set=a.469292898545676">
          <FaFacebook className="bg-[#1877F2] rounded-full w-6 h-6" />
        </a>
        <a href="#">
          <Image
            height={500}
            width={500}
            alt="instagram image"
            src="/instagram.png"
            className="h-6 w-6 object-contain"
          />
        </a>
      </div>
    </div>
  </div>
</div>

{/* div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center text-sm"> */}
{/* Bottom */}
<div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center text-sm ">
    <p>© 2025, Burnbox Printing.</p>
    <FaPaypal  height={60} width={60} className="bg-blue-600 h-10 rounded-full w-10"/>
</div>
    </footer>
  )
}

export default Footer
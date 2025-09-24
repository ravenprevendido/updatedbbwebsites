// components/ServicesTooltip.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ServicesTooltipProps {
  services: string[];

}

const TooltipServices: React.FC<ServicesTooltipProps> = ({ services}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50"
    
    >
      <ul className="text-sm text-white">
        {services.map((service, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-pink-600 hover:text-white cursor-pointer transition-colors duration-200"
          >
            {service}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TooltipServices;

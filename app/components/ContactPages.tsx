// components/ContactPopup.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(true); 
  const [showCards, setShowCards] = useState(false);
  // Remove selectedContact state since we won't use it anymore
  // const [selectedContact, setSelectedContact] = useState<'person1' | 'person2' | null>(null);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowCards(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section className="custom-gallery-bg relative w-full h-screen flex flex-col items-center justify-center custom-gallery-bg text-white px-10 bg-black/50 backdrop-blur-sm">

      {/* Show CHOOSE REPRESENTATIVE SALES only if cards are NOT shown */}
    
      {/* Show INQUIRE US only if cards ARE shown */}
      {showCards && (
        <motion.h3
          className="text-4xl font-semibold text-center text-pink mb-10 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          CHOOSE REPRESENTATIVE SALES
        </motion.h3>
      )}
      
      {/* Cards container */}
      <AnimatePresence>
        {showCards && (
          <motion.div
            className="flex justify-center gap-12"
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            transition={{ duration: 0.8 }}
          >
            {['person1', 'person2'].map((person) => (
              <motion.div
                key={person}
                className="bg-black rounded-2xl shadow-lg w-[680px] min-h-[340px] p-8 cursor-pointer flex flex-row text-white overflow-visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                // Remove onClick handler, or keep it if you want some action (currently removed)
                // onClick={() => setSelectedContact(person as 'person1' | 'person2')}
              >
                {/* Left side: Text content */}
                <div className="flex flex-col flex-1 pr-8">
                  {/* ... rest of card content unchanged */}
                 
                  <h3 className="text-3xl font-bold text-pink mb-1">
                    {person === 'person1' ? 'JOHANNAH MAE' : 'ALJUN PEREIRA'}
                  </h3>
                  <p className="mb-3 font-semibold text-white text-lg">
                    {person === 'person1' ? 'SALES REPRESENTATIVE' : 'SALES CONSULTANT'}
                  </p>

                  <p className="mb-1 font-semibold text-white text-lg">Phone Numbers:</p>
                  <ul className="list-disc list-inside text-white text-base mb-3 max-h-[90px] overflow-auto">
                    {person === 'person1' ? (
                      <>
                        <a href="tel:+0270072412"><li className='list-none'>(2) 7007-2412</li></a>
                        <a href="tel:+639772473179"><li className='list-none'>+63 977 247 3179</li></a>
                        <a href="tel:+639939819964"></a><li className='list-none'>+63 993 981 9964</li><a/>
                      </>
                    ) : (
                      <>
                        <li className='tel:+0270072412'>(02) 7007-2412</li>
                        <li className='tel:+639286935815'>+63 928 693 5815</li>
                        <li className='tel:+639153425780'>+63 915 342 5780</li>
                      </>
                    )}
                  </ul>
                  <p className="mb-2 text-1xl text-white">
                  Email: {person === 'person1' ? 
                    <a href="mailto:johannahmaebantiling2@gmail.com">johannahmaebantiling2@gmail.com</a> 
                    : 
                    <a href="mailto:aljun.sales@burnboxprinting.com">aljun.sales@burnboxprinting.com</a>}
                </p>

                  <p className="mb-4 text-base text-white">
                    Address: {person === 'person1' ? '17 Vatican City Dr, BF Resort Village, Talon 2, Las Piñas City' : '17 Vatican City Dr, BF Resort Village, Talon 2, Las Piñas City'}
                  </p>

                  <p className="font-semibold text-white mb-1 text-lg ml-14">Scan Me:</p>
                  <div className="flex gap-6 mb-1">
                    <img
                      src={person === 'person1' ? '/businessproposalQrcode.png' : '/businessproposalQrcode.png'}
                      className="w-20 h-20"
                    />
                    <img
                      src={person === 'person1' ? '/companyprofileQrcode.png' : '/companyprofileQrcode.png'}
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                {/* Right side: Rectangular Profile Image */}
                <div className="relative w-74 h-100 flex-shrink-0 overflow-hidden border-pink self-center rounded-lg">
                  <div className='absolute top-20'>
                  <img
                    src={person === 'person1' ? '/maam.png' : '/siraljun.png'}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


export default ContactPopup;

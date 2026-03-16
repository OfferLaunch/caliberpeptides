'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function DisclaimerModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('caliber_disclaimer_accepted');
    if (!hasAccepted) {
      setShowModal(true);
    }
  }, []);

  // Block Escape from closing the modal — only "I Agree" can dismiss
  useEffect(() => {
    if (!showModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') e.preventDefault();
    };
    document.addEventListener('keydown', onKeyDown, { capture: true });
    return () => document.removeEventListener('keydown', onKeyDown, { capture: true });
  }, [showModal]);

  const handleAgree = () => {
    localStorage.setItem('caliber_disclaimer_accepted', 'true');
    setShowModal(false);
  };

  // Only close via "I Agree" — backdrop click does nothing
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return;
    // Click was on overlay; do not close
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-espresso/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg max-h-[90vh] w-full rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 flex-shrink-0">
              {/* Logo */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src="/logos/Text Only/brown text only.png"
                  alt="Caliber Labs"
                  width={224}
                  height={112}
                  style={{ width: 'auto', height: '40px' }}
                  quality={95}
                />
              </div>

              {/* Header */}
              <h2 id="disclaimer-title" className="font-display text-xl sm:text-2xl text-espresso text-center mb-4 sm:mb-6">
                Research Use Only
              </h2>

              {/* Divider */}
              <div className="w-full h-px bg-glass" />
            </div>

            {/* Body Text - scrollable so button stays in frame */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8">
              <div className="font-body text-sm text-espresso/80 leading-relaxed space-y-4 pb-4">
                <p>
                  All products offered by Caliber Labs are intended for research purposes only and are not approved by the FDA for clinical, therapeutic, or personal use. By accessing this website and placing an order, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-espresso/70">
                  <li>You are purchasing these products for legitimate research purposes only</li>
                  <li>You understand these compounds are not for human or animal consumption</li>
                  <li>You are affiliated with a recognized research institution, laboratory, or educational organization, or are a qualified independent researcher</li>
                  <li>You comply with all applicable local, state, and federal laws governing the purchase and use of these materials</li>
                </ul>
                <p>
                  Caliber Labs reserves the right to verify your eligibility and may request documentation of your research affiliation. By clicking "I Agree" below, you acknowledge that you have read and understood this disclaimer and accept full responsibility for the lawful use of these products.
                </p>
              </div>
            </div>

            {/* Button - always visible at bottom */}
            <div className="flex-shrink-0 p-6 sm:p-8 pt-4 border-t border-glass">
              <button
                onClick={handleAgree}
                className="w-full bg-sage text-white rounded-lg py-3 font-body font-semibold hover:bg-sage/90 transition-colors"
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

interface IframeModalProps {
  url: string;
  onClose: () => void;
}

const IframeModal = ({ url, onClose }: IframeModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.getElementById("modal-bg")!.focus();
    }
  }, [mounted]);

  return (
    <motion.div
      id="modal-bg"
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.7)] z-[9999] select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex bg-pale-yellow dark:bg-dark-purple rounded-lg w-[1064px] h-[550px] p-5 select-none shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <button
          className="absolute top-6 right-6 hover:scale-105"
          onClick={onClose}
        >
          <MdClose
            size={40}
            className="text-light-theme-pink dark:text-pale-yellow"
          />
        </button>
        <iframe src={url} className="w-full h-full rounded-md" />
      </motion.div>
    </motion.div>
  );
};

export default IframeModal;

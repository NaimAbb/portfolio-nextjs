import React, { useState } from "react";
import menuIcon from "@/public/vectors/menu-icon.svg";
import Image from "next/image";
import { MAIN_NAVIGATION } from "@/data";
import Link from "./link";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence, Variants } from "framer-motion";

const MobileNavLinks: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  function handleOnClick() {
    setIsMenuOpened((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return newValue;
    });
  }

  const handleOnClickInside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  // Animations
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sidebarVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring", // literal, not generic string
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        // spring is fine here too; keep it duration-less
        type: "spring",
        damping: 20,
        stiffness: 300,
        delay: i * 0.1 + 0.2,
      },
    }),
  };

  return (
    <>
      <button onClick={handleOnClick} className="md:hidden">
        <Image src={menuIcon} alt="Menu Icon" />
      </button>

      <AnimatePresence>
        {isMenuOpened && (
          <motion.nav
            onClick={handleOnClick}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              onClick={handleOnClickInside}
              className="ml-auto h-full w-1/2 bg-[#1A1A1A] px-5 py-5"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="mb-[50px] inline-block"
                onClick={handleOnClick}
              >
                <MdClose size={30} color="white" />
              </button>
              <ul className="flex flex-col gap-10">
                {MAIN_NAVIGATION.map((item) => (
                  <Link key={item} onClick={handleOnClick} title={item} />
                ))}
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavLinks;

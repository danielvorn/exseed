import { motion } from "framer-motion";
import { useState } from "react";

import dashboard from "../assets/images/dashboard.png";
import { InvitationModal } from "./InvitationModal";

// import dashboard from "../assets/images/dashboard.jpg";
import CRM from "../assets/images/CRM.png";
import HR from "../assets/images/HR.png";
import POS from "../assets/images/POS.png";
import barChart from "../assets/images/bar_chart.png";
import inventory from "../assets/images/inventory.png";
import pieChart from "../assets/images/pie_chart.png";
import purchase from "../assets/images/purchase.png";
import sales from "../assets/images/sales.png";
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className="w-screen flex justify-center items-center bg-gradient-to-b from-[#02032A] to-gray-700 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-exseedBlue text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline md:hidden">Analytics</span>
            <span className="hidden md:inline">
              Stay connected and grow your business from anywhere, anytime
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Powering businesses in Cambodia through process transformation,
            digital literacy and access to finance
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <div
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div>
            <div
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-exseedBlue transition"
              onClick={() => setIsModalOpen(true)}
            >
              Live demo
            </div>
          </div>
        </motion.div>
        <div class="hero-cards">
          <div class="left-cards">
            <div class="cards-row top-cards-row left-cards-row">
              <img src={pieChart} alt="pieChart" />
              <img src={HR} alt="HR module preview" />
            </div>
            <div class="cards-row bottom-cards-row left-cards-row">
              <img src={sales} alt="Sales module" />
              <img src={CRM} alt="CRM module preview" />
            </div>
          </div>
          <div>
            <img
              src={dashboard}
              alt="Homepage hero timeline"
              class="rounded-2xl"
            />
          </div>
          <div class="right-cards">
            <div class="cards-row top-cards-row right-cards-row">
              <img src={POS} alt="POS module preview" />
              <img src={barChart} alt="Homepage hero piechart" />
            </div>
            <div class="cards-row bottom-cards-row right-cards-row">
              <img src={inventory} alt="inventory module preview" />
              <img src={purchase} alt="purchase module preview" />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

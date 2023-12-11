import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import feature1 from "../assets/images/dashboard.png";

export const Features1 = () => {
  return (
    <section className="bg-gradient-to-t from-[#02032A] to-black space-y-[4rem]">
      <div className="flex mx-[6rem] items-center">
        <div className="flex-1">
          <img
            src={feature1}
            alt="f1"
            className="rounded-xl mx-auto sm:mx-unset"
          />
        </div>
        <div className="flex-1 space-y-[7rem]">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Comprehensive Suite, One Unified Platform
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-3xl text-white font-bold">
              Consolidate your business tools into one platform.
            </h2>
            <p className="text-slate-400">
              ExseedERP provides a complete range of applications, from CRM and
              sales to inventory, accounting, HR, and more. Say goodbye to
              juggling multiple systems.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-[6rem] items-center flex-row-reverse">
        <div className="flex-1">
          {/* <img
            src={feature1}
            alt="f1"
            className="rounded-xl mx-auto sm:mx-unset"
          /> */}
        </div>
        <div className="flex-1">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Tailored to Your Needs, Modular to Scale
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-3xl text-white font-bold">
              Start with the apps you need and scale effortlessly as your
              business grows.
            </h2>
            <p className="text-slate-400">
              ExseedERP's modular approach ensures you only use what's necessary
              and easily expand when new functionalities are required.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-[6rem] items-center">
        <div className="flex-1">
          {/* <img
            src={feature1}
            alt="f1"
            className="rounded-xl mx-auto sm:mx-unset"
          /> */}
        </div>
        <div className="flex-1">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Flexibility at Your Fingertips
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-3xl text-white font-bold">
              Customize ExseedERP to fit your unique workflows.
            </h2>
            <p className="text-slate-400">
              Modify fields, personalize interfaces, and adapt the system to
              match your business processes. Enjoy a flexible solution tailored
              exclusively for your operations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-[6rem] items-center flex-row-reverse">
        <div className="flex-1">
          {/* <img
            src={feature1}
            alt="f1"
            className="rounded-xl mx-auto sm:mx-unset"
          /> */}
        </div>
        <div className="flex-1">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              User-Friendly Experience, Enhanced Efficiency
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-3xl text-white font-bold">
              Navigate effortlessly through ExseedERP's intuitive interface
            </h2>
            <p className="text-slate-400">
              Its user-friendly design ensures ease of use across departments,
              empowering every team member to operate efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mx-[6rem] items-center flex-row">
        <div className="flex-1">
          {/* <img
            src={feature1}
            alt="f1"
            className="rounded-xl mx-auto sm:mx-unset"
          /> */}
        </div>
        <div className="flex-1">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Seamless Integration for Unified Insights
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-3xl text-white font-bold">
              Break down data barriers.
            </h2>
            <p className="text-slate-400">
              Break down data barriers. ExseedERP's integrated applications
              allow seamless data flow, providing a unified view of your
              business. Gain insights across functions for better-informed
              decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-[6rem] items-center flex-row">
        <div className="flex-1 text-center">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h2 className="mt-6 mb-8 text-4xl lg:text-3xl text-white font-bold">
              Simplify complexity, streamline operations, and propel your
              business growth with ExseedERP
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

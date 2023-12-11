import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import feature1 from "../assets/images/dashboard-cartoon.png";

import feature6 from "../assets/images/pipeline_analysis.png";
import feature5 from "../assets/images/sales_chart.png";

export const Features3 = () => {
  return (
    <section className="w-full bg-gradient-to-t from-[#02032A] to-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="">
              <div className="">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl mx-auto sm:mx-unset"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                User-Friendly Interface
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Intuitive Navigation
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Simplify tasks with a user interface designed for efficiency.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Intuitive navigation for a smooth user experience</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>
                    Accessible layout promoting efficient task completion
                  </span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Simplified workflows for enhanced productivity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

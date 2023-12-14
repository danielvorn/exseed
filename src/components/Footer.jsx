import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { LinkedInIcon } from "../assets/icons/LinkedInIcon";
import { ExseedLogo } from "../assets/logos/ExseedLogo";

export const Footer = ({ aboutUs }) => {
  return (
    <footer>
      <div className="py-3 bg-[#03080e] flex items-center justify-around border-t-[.001rem] border-t-white">
        <ExseedLogo />
        <p className="hidden md:inline text-customWhiteText">
          ® Exseed and the Exseed logo are registered trademarks of Exseed
          Technologies in Cambodia and other selected countries.
        </p>
        <div className="flex space-x-4 items-center">
          <a href="#" target="_blank">
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/exseed-technologies/about/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

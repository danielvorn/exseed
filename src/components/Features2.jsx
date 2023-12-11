import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => {
  return (
    <div className="sm:mx-[8rem]">
      <div className="text-customHeadingBlack grid grid-cols-12 text-3xl md:divide-y md:divide-customHeadingBlack">
        <h1 className="col-span-12 text-4xl px-[1rem] py-[3rem] lg:py-[5rem] md:text-2xl lg:text-4xl">
          Why Small to Medium Enterprises (SMEs) Choose Exseed
        </h1>
        <div className="m-[1rem] col-span-12 md:col-span-4 md:m-0 md:py-[4rem] flex items-center">
          <CheckArrowIcon />
          <h1 className="pr-[3rem]">Customized Solutions</h1>
        </div>
        <div className="m-[2rem] col-span-12 md:col-span-8 md:m-0 md:py-[4rem] text-xl flex items-center">
          <p>
            We start by getting to know your business inside out. Our
            personalized approach guarantees an ERP solution tailored precisely
            to fit your specific needs.
          </p>
        </div>

        <div className="m-[1rem] col-span-12 md:col-span-4 md:m-0 md:py-[4rem] flex items-center">
          <CheckArrowIcon />
          <h1 className="pr-[3rem]">Support & Training</h1>
        </div>
        <div className="m-[2rem] col-span-12 md:col-span-8 md:m-0 md:py-[4rem] text-xl flex items-center">
          <p>
            Our comprehensive support and training ensure a smooth
            implementation process. We empower your team to use the system
            effectively without the need for a dedicated IT department.
          </p>
        </div>
        <div className="m-[1rem] col-span-12 md:col-span-4 md:m-0 md:py-[4rem] flex items-center">
          <CheckArrowIcon />
          <h1 className="pr-[3rem]">Cost Effectiveness</h1>
        </div>
        <div className="m-[2rem] col-span-12 md:col-span-8  md:m-0 md:py-[4rem] text-xl">
          <p>
            Our customizable solutions can be designed to fit the budget
            constraints of smaller businesses without compromising on quality or
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

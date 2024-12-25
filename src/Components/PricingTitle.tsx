import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';

export default function PricingTitle() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Base animation duration
      once: false, // Animation occurs only once
    });
  }, []);

  return (
    <div
      className="w-full max-w-[823px] aos-init aos-animate h-auto mt-10 mx-auto space-y-4 px-4"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
    >
      <div className="w-full h-auto" data-aos="fade-up" data-aos-delay="300">
        <p className="font-roboto text-[28px] sm:text-[36px] md:text-[40px] font-black leading-[1.25] text-center decoration-skip-ink-none text-neutral-200">
          Subscription: Best and Simple&nbsp;
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(92.57deg, #D84315 -28.74%, #FFC107 124.48%)",
            }}
          >
            Pricing
          </span>
        </p>
      </div>

      <div
        className="w-full max-w-[600px] h-auto mx-auto mt-6"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <p className="text-neutral-300 font-roboto text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[1.25] text-center underline-offset-auto decoration-slice">
          Choose the Swasthi plan that fits your needs and budget. Enjoy flexible pricing options with full access to all premium features
        </p>
      </div>

      <img
        src="./Buttons.png"
        alt="trial"
        className="w-[80%] sm:w-[60%] md:w-[300px] mx-auto cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-duration="1200"
        data-aos-anchor-placement="top-center"
      />
    </div>
  );
}

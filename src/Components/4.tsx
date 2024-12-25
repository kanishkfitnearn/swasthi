import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function Download() {
  return (
    <>
      <section className="flex justify-center flex-wrap bg-gradient-to-r from-orange-500 to-yellow-500 items-center h-auto calLastSection px-3 md:px-[72px] pb-10 md:pb-[72px] pt-10 md:pt-[155px] mq450:gap-5 mt-10 md:mt-[100px]">
        <div className="bg-[#171717] p-10 flex-col md:flex-row md:relative md:h-[600px] md:max-h-[600px] max-h-auto w-full flex justify-center items-center px-4 md:px-10 mq450:py-7 rounded-[32px]">
          <div className="flex-1 w-full flex flex-col justify-start items-start">
            <h4 className="text-[36px] md:text-[48px] text-[#D4D4D4] font-black leading-normal">
              Download Swasthi: Your
            </h4>
            <h1 className="text-[36px] md:text-[48px] text-[#F5F5F5] font-black leading-normal break-words">
              <span className="mr-3 block md:inline bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Health Companion
              </span>
            </h1>

            <h4 className="text-[16px] md:text-[18px] max-w-[484px] text-[#D4D4D4] font-normal leading-[22px] mt-3">
              Get Swasthi now on your Android or iOS device. Start your journey
              to a healthier you with just one click!
            </h4>
            <div className="flex gap-2 md:gap-6 mt-6 md:mt-12 mq450:mb-7">
              {/* App Store Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-500 border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                      <span>
                        <img
                          src="/apple.png"
                          alt="App Store"
                          className="w-6 h-6"
                        />
                      </span>
                      <div className="text-left">
                        <span className="block text-xs font-bold leading-tight">
                          Download on the
                        </span>
                        <span className="block text-lg font-semibold leading-tight">
                          App Store
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Coming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>

              {/* Google Play Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto bg-gradient-to-r from-orange-500 to-yellow-500 overflow-hidden border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white">
                      <span>
                        <img
                          src="/playstore.png"
                          alt="Google Play"
                          className="w-6 h-6"
                        />
                      </span>
                      <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  Get it on
                </span>
                <span className="block text-lg font-semibold leading-tight">
                  Google Play
                </span>
              </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Coming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative sm:-top-24 md:-top-24 lg:-top-24 top-2 animate-floating">
            <img src="/Mockup Mobile.png" alt="none" className="sm:mt-10" />
          </div>
        </div>
      </section>
    </>
  );
}

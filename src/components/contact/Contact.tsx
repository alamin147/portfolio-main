import "./contact.css";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import Buttons from "../button/Buttons";

const Contact = () => {
  return (
    <div className="bg-slate-950">
      <h1 className="py-10 gradient-text text-center text-3xl md:text-6xl font-bold">
        Contact
      </h1>

      <div className="mx-auto container">
        <section className="relative z-10 overflow-hidden text-white py-20 dark:bg-dark lg:py-[120px]">
          <div className="container ">
            <div className="-mx-4 flex flex-wrap lg:justify-center items-center gap-20">
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative rounded-lg custom-gradient p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                  <h1 className="pb-10 gradient-text text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-800 to-indigo-400">
                    GET IN TOUCH
                  </h1>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                    You can talk to with me and get solutions for your Business
                  </p>
                  <form>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ContactInputBox
                      type="text"
                      name="email"
                      placeholder="Your Email"
                    />
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                    />
                    <ContactTextArea
                      row="6"
                      placeholder="Your Message"
                      name="details"
                      defaultValue=""
                    />
                    <div>
                      <button type="submit" className="">
                        <div className="">
                          <Buttons text="Send Message" />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <span className="mb-4 block text-base font-semibold text-primary">
                    Contact Us
                  </span>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <div className="border-2 border-indigo-700 rounded-full p-2 text-white bg-indigo-700">
                        <FaHome size="30" />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Address
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <div className=" border-2 border-indigo-700 rounded-full p-2 text-white bg-indigo-700">
                        <FaPhoneVolume size="30" />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Phone Number
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        +8801322332323
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <div className="cursor-pointer border-2 border-indigo-700 rounded-full p-2 text-white bg-indigo-700">
                        <IoMailOpenOutline size="30" />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        alamin.14780@gmial.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contact;

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
}: {
  row: any;
  placeholder: any;
  name: any;
  defaultValue: any;
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-lg border border-stroke px-[14px] py-3 text-white text-body-color outline-none focus:border-[#753ee2] dark:border-dark-3 dark:bg-dark  bg-[#020617]"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({
  type,
  placeholder,
  name,
}: {
  type: any;
  placeholder: any;
  name: any;
}) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded-lg border border-stroke py-3 text-white text-body-color outline-none focus:border-[#753ee2]  dark:bg-dark dark:text-dark-6 bg-[#020617]"
        />
      </div>
    </>
  );
};

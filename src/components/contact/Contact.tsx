// import "./contact.css";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { FaHome } from "react-icons/fa";
// import { IoMailOpenOutline } from "react-icons/io5";

// import { SubmitHandler, useForm } from "react-hook-form";
// import axios from "axios";
// import { Toast } from "../toast/Toast";
// import { Button } from "flowbite-react";

// type TInputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const url = import.meta.env.VITE_URL;

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<TInputs>();

//   const onSubmit: SubmitHandler<TInputs> = async (data) => {
//     try {
//       const response = await axios.post(url, data);
//       reset();

//       if (response.data.success == true) {
//         Toast({ message: response.data.message, success: true });
//       } else {
//         Toast({ message: response.data.message, success: false });
//       }
//     } catch (error) {
//       Toast({
//         message: "Email could not be sent. Please try again.",
//         success: false,
//       });
//     }
//   };

//   return (
//     <div className="bg-slate-950">
//       <h1 className="pt-20 gradienttexts text-center text-3xl md:text-6xl font-bold">
//         Contact
//       </h1>

//       <div className="mx-auto container">
//         <section className="relative z-10 overflow-hidden text-white py-20 dark:bg-dark lg:py-[120px]">
//           <div className="container ">
//             <div className="-mx-4 flex lg:justify-center items-center gap-20">
//               <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//                 <div className="relative rounded-lg custom-gradient p-8 shadow-lg dark:bg-dark-2 sm:p-12">
//                   <h1 className="pb-10 gradient-text text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-800 to-indigo-400">
//                     GET IN TOUCH
//                   </h1>
//                   <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
//                     You can talk to me and get solutions for your business
//                   </p>
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <ContactInputBox
//                       type="text"
//                       register={register}
//                       placeholder="Your Name"
//                       name="name"
//                       error={errors.name}
//                       errorMessage="Name is required"
//                     />
//                     <ContactInputBox
//                       type="email"
//                       register={register}
//                       placeholder="Your Email"
//                       name="email"
//                       error={errors.email}
//                       errorMessage="Email is required"
//                     />
//                     <ContactInputBox
//                       type="text"
//                       register={register}
//                       placeholder="Subject"
//                       name="subject"
//                       error={errors.subject}
//                       errorMessage="Subject is required"
//                     />
//                     <ContactTextArea
//                       row="6"
//                       placeholder="Your Message"
//                       register={register}
//                       name="message"
//                       error={errors.message}
//                       errorMessage="Message is required"
//                       defaultValue=""
//                     />
//                     <div>
//                       <Button
//                         className="me-2 bg-gradient-to-r from-indigo-950 to-indigo-800 border-0 py-1 px-3 font-bold hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-950 transition duration-200 ease-in-out rounded-full"
//                         type="submit"
//                       >
//                         Send Email
//                       </Button>
//                     </div>
//                   </form>
//                 </div>
//               </div>

//               <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//                 <div className="mb-12 max-w-[570px] lg:mb-0">
//                   <span className="mb-4 block text-base font-semibold text-primary">
//                     Contact Us
//                   </span>

//                   <div className="mb-8 flex w-full max-w-[370px]">
//                     <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
//                       <div className="border-2 border-indigo-700 rounded-full p-2 text-white bg-indigo-700">
//                         <FaHome size="30" />
//                       </div>
//                     </div>
//                     <div className="w-full">
//                       <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                         Address
//                       </h4>
//                       <p className="text-base text-body-color dark:text-dark-6">
//                         Dhaka, Bangladesh
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mb-8 flex w-full max-w-[370px]">
//                     <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
//                       <div className=" border-2 border-indigo-700 rounded-full p-[10px] text-white bg-indigo-700">
//                         <FaPhoneVolume size="26" />
//                       </div>
//                     </div>
//                     <div className="w-full">
//                       <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                         Phone Number
//                       </h4>
//                       <p className="text-base text-body-color dark:text-dark-6">
//                         +8801322332323
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mb-8 flex w-full max-w-[370px]">
//                     <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
//                       <div className="cursor-pointer border-2 border-indigo-700 rounded-full p-2 text-white bg-indigo-700">
//                         <IoMailOpenOutline size="30" />
//                       </div>
//                     </div>
//                     <div className="w-full">
//                       <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                         Email Address
//                       </h4>
//                       <p className="text-base text-body-color dark:text-dark-6">
//                         alamin.14780@gmail.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
// export default Contact;

// const ContactTextArea = ({
//   row,
//   placeholder,
//   register,
//   name,
//   error,
//   errorMessage,
//   defaultValue,
// }: {
//   row: string;
//   placeholder: string;
//   register: any;
//   name: string;
//   error: any;
//   errorMessage: string;
//   defaultValue: string;
// }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <textarea
//           rows={row}
//           placeholder={placeholder}
//           {...register(name, { required: true })}
//           className="w-full resize-none rounded-lg border border-stroke px-[14px] py-3 text-white text-body-color outline-none focus:border-[#753ee2] dark:border-dark-3 dark:bg-dark bg-[#020617]"
//           defaultValue={defaultValue}
//         />
//         {error && <p className="text-red-500 mt-1 mb-5">{errorMessage}</p>}
//       </div>
//     </>
//   );
// };

// const ContactInputBox = ({
//   type,
//   placeholder,
//   register,
//   name,
//   error,
//   errorMessage,
// }: {
//   type: string;
//   placeholder: string;
//   register: any;
//   name: string;
//   error: any;
//   errorMessage: string;
// }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <input
//           type={type}
//           placeholder={placeholder}
//           {...register(name, { required: true })}
//           className="w-full rounded-lg border border-stroke py-3 text-white text-body-color outline-none focus:border-[#753ee2] dark:bg-dark dark:text-dark-6 bg-[#020617]"
//         />
//         {error && <p className="text-red-500 mt-1">{errorMessage}</p>}
//       </div>
//     </>
//   );
// };

import "./contact.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Toast } from "../toast/Toast";
import { Button } from "flowbite-react";

type TInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const url = import.meta.env.VITE_URL;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    try {
      const response = await axios.post(url, data);
      reset();

      if (response.data.success == true) {
        Toast({ message: response.data.message, success: true });
      } else {
        Toast({ message: response.data.message, success: false });
      }
    } catch (error) {
      Toast({
        message: "Email could not be sent. Please try again.",
        success: false,
      });
    }
  };

  return (
    <div className="bg-slate-950">
      <h1 className="pt-20 gradienttexts text-center text-3xl md:text-6xl font-bold">
        Contact
      </h1>

      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <section className="relative z-10 text-white py-10 lg:py-[120px]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 sm:p-10 rounded-lg shadow-lg">
                <h2 className="pb-6 text-center text-2xl md:text-4xl font-bold text-indigo-400">
                  GET IN TOUCH
                </h2>
                <p className="mb-6 text-center text-base leading-relaxed">
                  You can talk to me and get solutions for your business
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ContactInputBox
                    type="text"
                    register={register}
                    placeholder="Your Name"
                    name="name"
                    error={errors.name}
                    errorMessage="Name is required"
                  />
                  <ContactInputBox
                    type="email"
                    register={register}
                    placeholder="Your Email"
                    name="email"
                    error={errors.email}
                    errorMessage="Email is required"
                  />
                  <ContactInputBox
                    type="text"
                    register={register}
                    placeholder="Subject"
                    name="subject"
                    error={errors.subject}
                    errorMessage="Subject is required"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    register={register}
                    name="message"
                    error={errors.message}
                    errorMessage="Message is required"
                    defaultValue=""
                  />
                  <div className="flex justify-center">
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-indigo-950 to-indigo-800 border-0 py-1 px-3 font-bold hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-950 transition duration-200 ease-in-out rounded-full"
                      type="submit"
                    >
                      Send Email
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <ContactInfo
                  icon={<FaHome size="30" />}
                  title="Address"
                  description="Dhaka, Bangladesh"
                />
                <ContactInfo
                  icon={<FaPhoneVolume size="26" />}
                  title="Phone Number"
                  description="+8801322332323"
                />
                <ContactInfo
                  icon={<IoMailOpenOutline size="30" />}
                  title="Email Address"
                  description="alamin.14780@gmail.com"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

// Contact Information Component
const ContactInfo = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-center">
    <div className="flex-shrink-0 p-4 rounded-full border-2 border-indigo-700 text-white bg-indigo-700">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="mb-1 text-xl font-bold">{title}</h4>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const ContactTextArea = ({
  row,
  placeholder,
  register,
  name,
  error,
  errorMessage,
  defaultValue,
}: {
  row: string;
  placeholder: string;
  register: any;
  name: string;
  error: any;
  errorMessage: string;
  defaultValue: string;
}) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        {...register(name, { required: true })}
        className="w-full resize-none rounded-lg border border-stroke px-4 py-3 text-white bg-[#020617] outline-none focus:border-indigo-500"
        defaultValue={defaultValue}
      />
      {error && <p className="text-red-500 mt-1 mb-5">{errorMessage}</p>}
    </div>
  );
};

const ContactInputBox = ({
  type,
  placeholder,
  register,
  name,
  error,
  errorMessage,
}: {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  error: any;
  errorMessage: string;
}) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
        className="w-full rounded-lg border border-stroke px-4 py-3 text-white bg-[#020617] outline-none focus:border-indigo-500"
      />
      {error && <p className="text-red-500 mt-1">{errorMessage}</p>}
    </div>
  );
};

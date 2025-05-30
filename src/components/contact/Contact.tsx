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
    <div style={{ background: "linear-gradient(135deg, #0f0326, #220a4a)" }} className="relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-24">
        {/* Section Title */}
        <div className="text-center mb-16">

          <h1 className="gradienttexts text-5xl md:text-6xl font-bold mb-6">
            Contact Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out. I'm ready to bring your ideas to life.</p>
        </div>

        <section className="relative z-10 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">              {/* Contact Form */}
              <div className="lg:col-span-3 contact-card p-8 sm:p-10 shimmer-border">
                <h2 className="text-center text-3xl font-bold gradient-text mb-2">
                  Get In Touch
                </h2>
                <p className="mb-8 text-center text-gray-300">
                  Have a project in mind? Let's collaborate and build something amazing together.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

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

                  <div className="flex justify-center pt-4">
                    <Button
                      className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 border-0 font-bold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-1 transition-all duration-300 rounded-full"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
                <div className="text-center lg:text-left mb-4">
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Contact Information</h3>
                  <p className="text-gray-300">Feel free to reach out through any of these channels. I'm looking forward to hearing from you!</p>
                </div>

                <ContactInfo
                  icon={<FaHome size="24" />}
                  title="Address"
                  description="Dhaka, Bangladesh"
                />
                <ContactInfo
                  icon={<FaPhoneVolume size="22" />}
                  title="Phone Number"
                  description="+8801322332323"
                />
                <ContactInfo
                  icon={<IoMailOpenOutline size="24" />}
                  title="Email Address"
                  description="alamin.14780@gmail.com"
                />

                {/* Social Media Links */}
                <div className="mt-6 pt-6 border-t border-indigo-900/40">
                  <h4 className="text-xl font-semibold mb-4 text-indigo-300">Connect with me</h4>
                  <div className="flex space-x-4 justify-center lg:justify-start">
                    <a href="https://www.linkedin.com/in/alamin-developer/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-indigo-900/50 hover:bg-indigo-700 transition-colors duration-300">
                      <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://github.com/alamin147" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-indigo-900/50 hover:bg-indigo-700 transition-colors duration-300">
                      <svg className="w-5 h-5 text-indigo-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
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
  <div className="flex items-center contact-card p-5 hover:shadow-lg transition-all duration-300">
    <div className="flex-shrink-0 p-4 rounded-full contact-info-icon text-white">
      {icon}
    </div>
    <div className="ml-5">
      <h4 className="mb-1 text-xl font-bold text-indigo-300">{title}</h4>
      <p className="text-base text-gray-300">{description}</p>
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
        className="w-full resize-none rounded-lg contact-input px-4 py-3 text-white outline-none focus:border-indigo-500 placeholder-indigo-300/50"
        defaultValue={defaultValue}
      />
      {error && <p className="text-red-400 mt-1 text-sm font-medium">{errorMessage}</p>}
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
        className="w-full rounded-lg contact-input px-4 py-3 text-white outline-none focus:border-indigo-500 placeholder-indigo-300/50"
      />
      {error && <p className="text-red-400 mt-1 text-sm font-medium">{errorMessage}</p>}
    </div>
  );
};

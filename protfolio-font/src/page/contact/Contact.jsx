// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";

const Contact = () => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const serviceId =import.meta.env.VITE_SERVICE_ID;
//     const templateId = import.meta.env.VITE_TEMPLATE_ID;
//     const public_key = import.meta.env.VITE_PUBLIC_ID
//     console.log(serviceId, templateId, public_key)

//     emailjs
//       .sendForm(
//         serviceId,   
//         templateId,   
//         formRef.current,
//         public_key    
//       )
//       .then(
//         (result) => {
//         //   toast.success("Message sent successfully!");
//           formRef.current.reset();
//         },
//         (error) => {
//         //   toast.error("Failed to send. Try again!");
//         }
//       );
//   };

  return (
    <section className="py-16 bg-[#0f172a] text-white px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          <span className="text-indigo-400">Contact</span> Me
        </h2>

        <form
        //   ref={formRef}
        //   onSubmit={sendEmail}
          className="bg-[#1e293b] p-8 rounded-xl space-y-6 shadow-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-indigo-600 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-indigo-600 focus:outline-none"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-[#0f172a] text-white border border-indigo-600 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

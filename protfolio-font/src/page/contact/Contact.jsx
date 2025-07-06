import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, User,
  MessageCircle, CheckCircle, AlertCircle
} from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const res = await axios.post('https://protfolio-server-amber.vercel.app/contact', formData);
      if (res.data?.acknowledged || res.data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Message send error:', err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "mreosmangoni@gmail.com",
      description: "Feel free to mail me"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+880 1614 178068",
      description: "Call for urgent response"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Dhaka, Bangladesh",
      description: "Available for remote work"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white relative overflow-hidden z-0">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Contact</span> Me
          </h2>
          <p className="text-gray-300 mt-4 text-lg">Let’s build something amazing together!</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Open to freelance work, collaboration, or just geeking out on code. Reach out!
              </p>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">{item.title}</h4>
                    <p className="font-medium text-white">{item.info}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendMessage}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism p-8 rounded-3xl space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Send a Message</h3>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 text-green-300 rounded-lg">
                <CheckCircle className="w-5 h-5" /> Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg">
                <AlertCircle className="w-5 h-5" /> Failed to send message.
              </div>
            )}

            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              />
            </div>

            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              />
            </div>

            <div className="relative">
              <MessageCircle className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/30 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-b-2 border-white rounded-full" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style> */}
    </section>
  );
};

export default Contact;

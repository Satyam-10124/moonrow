import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import TopAlert from './TopAlert';

const ContactSection = ({ bgImage }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // { message, type }

  emailjs.init('gNymqCR1vtA215E9p');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send('service_v6g945c', 'template_3pgprcn', templateParams)
      .then(() => {
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });
        setAlert({ message: 'Message sent successfully!', type: 'success' });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ message: 'Failed to send message, please try again.', type: 'error' });
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <>
      {alert && <TopAlert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

      <section
        id="contact"
        className="relative py-16 text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
          aria-hidden="true"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        ></div>

        <div className="max-w-xl mx-auto px-4 relative z-10">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block pb-2 text-base font-medium">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#eaf0ea] p-4 text-[#111811] placeholder:text-[#608560] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block pb-2 text-base font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#eaf0ea] p-4 text-[#111811] placeholder:text-[#608560] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block pb-2 text-base font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#eaf0ea] p-4 text-[#111811] placeholder:text-[#608560] focus:outline-none min-h-[144px] resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-[#b7e0b7] px-6 py-2 text-sm font-bold text-[#111811] hover:bg-[#a0cca0] transition-colors"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

import React, { useState } from "react";
import Header from "./Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="contact-div">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} id="contact-form">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

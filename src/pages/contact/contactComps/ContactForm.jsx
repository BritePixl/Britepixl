import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const validateContactEmailVariables = () => {
    if (!name || !email || !phone || !msg) {
      return false;
    }
    return true;
  };
  const sendMsg = () => {
    if (!validateContactEmailVariables()) {
      setStatus("Please fill out all required fields!");
    } else {
      axios
        .post("https://britepixl.com/email", { name, email, msg, phone })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            setName("");
            setMsg("");
            setEmail("");
            setPhone("");
            setStatus("Message sent successfully!");
          } else {
            setStatus("Failed to send message!");
          }
        })
        .catch((err) => {
          setStatus("Failed to send message!");
        });
    }
  };
  return (
    <div className="contact_us_form_section">
      <div className="contact_us_container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <div className="info">
              <br />
              <span>
                <h2>Head Office </h2>Office 615, CEO Building, Dubai Investment
                Park 1, Dubai, UAE <br />
                +97143206880
              </span>
              <br />
              <br />
              <span>
                <h2>Experience Center</h2> Warehouse 6, Opp to Union Cement
                Factory, Dubai Investment Park 2, Dubai, UAE, <br />
                +971504916305
              </span>
              <br />
              <br />
              <span>
                <h2>Regional Office - Saudi Arabia</h2>Majed Inn, Warehouse No
                71, Al Aziziyah, Riyadh, Saudi Arabia <br />
                +966578063267
              </span>
              <br />
              <br />
              <span>
                <h2>Regional Office - Azerbaijan</h2>AGA, Business Center,
                Office 406, 4th Floor, 55 Khojali Avenue, Baku, Azerbaijan{" "}
                <br />
                +994998809004
              </span>
              <br />
              <br />
              <span>hello@britepixl.ae</span>
            </div>
            <div className="social-media">
              <p>
                Check Our{" "}
                <Link to="/privacy-policy" className="mt">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form>
              <div className="to_left">
                <h2>We’d Love to Hear from You!</h2>
                <p>
                  Whether you have a question, feedback, or just want to say
                  hello. Thank you for reaching out!
                </p>
              </div>
              <div className="input-container">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="input"
                />
                <span>Username</span>
              </div>
              <div className="input-container">
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="input"
                />
                <span>Email</span>
              </div>
              <div className="input-container">
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  name="phone"
                  className="input"
                />
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  placeholder="Message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  name="message"
                  className="input"></textarea>
                <span>Message</span>
              </div>
              <input
                onClick={() => sendMsg()}
                type="button"
                value="Send"
                className="btn"
              />
              <p>{status}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

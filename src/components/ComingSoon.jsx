import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! You’ll be notified when we launch ☕");
    setEmail("");
  };

  return (
    <div className="page">
      <main className="container">

        {/* Logo */}
        <div className="logo">☕CHAI CULTURE</div>

        {/* Launch Element */}
        <div className="badge">Launching Soon</div>

        {/* Tagline */}
        <h1>Brew the Royal Tradition</h1>

        {/* Description */}
        <p className="description">
          A premium instant chai tea premix inspired by royal Indian households.
          Crafted with authentic spices to deliver a rich, indulgent cup — anytime,
          anywhere.
        </p>

        {/* Email Signup */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Notify Me</button>
        </form>

        {/* Social Links */}
        <div className="socials">
           <a href="#" aria-label="Instagram">
              <FaInstagram />
              </a>
           <a href="#" aria-label="Facebook">
               <FaFacebookF />
             </a>
             <a href="#" aria-label="Twitter">
               <FaTwitter />
             </a>
           </div>

      </main>

      <footer>© 2026 Chai Culture. All rights reserved.</footer>
    </div>
  );
};

export default ComingSoon;

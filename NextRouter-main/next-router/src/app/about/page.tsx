import "./about.css";
import { Metadata } from "next";
import ScrollAnimation from "@/component/scrollAnimation/scrollAnimation";
import Navbar from "@/component/navbar/page";

export const metadata: Metadata = {
  title: "About Us - Your Company",
  description:
    "Learn more about our company, our values, and our amazing team.",
};

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title fade-in-up">About Our Company</h1>
          <p className="hero-subtitle fade-in-up animation-delay-200">
            We are passionate about creating digital experiences that make a
            difference.
          </p>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <h2 className="story-title fade-in-up">Our Story</h2>
          <div className="story-content fade-in-up animation-delay-200">
            <p>
              Founded with a vision to revolutionize the digital landscape, our
              company has been at the forefront of web development and design
              innovation. We believe that every business deserves a powerful
              online presence that reflects their unique identity and drives
              real results.
            </p>
            <p>
              Over the years, we've helped hundreds of businesses transform
              their ideas into stunning digital realities. Our team of experts
              combines technical expertise with creative vision to deliver
              solutions that not only look beautiful but also perform
              exceptionally well.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="values-title fade-in-up">Our Values</h2>
          <div className="values-grid">
            <div className="value-item fade-in-up animation-delay-200">
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We constantly explore new technologies and methodologies to stay
                ahead of the curve and deliver cutting-edge solutions to our
                clients.
              </p>
            </div>
            <div className="value-item fade-in-up animation-delay-400">
              <h3 className="value-title">Quality</h3>
              <p className="value-description">
                Every project we undertake is handled with utmost care and
                attention to detail, ensuring the highest standards of quality
                and performance.
              </p>
            </div>
            <div className="value-item fade-in-up animation-delay-600">
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                We believe in working closely with our clients, treating their
                goals as our own and building lasting partnerships based on
                trust and mutual success.
              </p>
            </div>
            <div className="value-item fade-in-up animation-delay-200">
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We constantly explore new technologies and methodologies to stay
                ahead of the curve and deliver cutting-edge solutions to our
                clients.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="team-title fade-in-up">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member zoom-in animation-delay-200">
              <h3 className="member-name">Ali Yazdanpanahfard</h3>
              <p className="member-role">Lead Developer & Founder</p>
              <a
                href="mailto:ali.yazdanpanahfard@gmail.com"
                className="member-email"
              >
                ali.yazdanpanahfard@gmail.com
              </a>
            </div>
            {/* <div className="team-member zoom-in animation-delay-400">
            <h3 className="member-name">Sarah Johnson</h3>
            <p className="member-role">Creative Director</p>
            <a href="mailto:sarah@example.com" className="member-email">
              sarah@example.com
            </a>
          </div>
          <div className="team-member zoom-in animation-delay-600">
            <h3 className="member-name">Mike Chen</h3>
            <p className="member-role">Project Manager</p>
            <a href="mailto:mike@example.com" className="member-email">
              mike@example.com
            </a>
          </div> */}
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="contact-title fade-in-up">Get In Touch</h2>
          <a
            href="mailto:ali.yazdanpanahfard@gmail.com"
            className="contact-email slide-in-left animation-delay-200"
          >
            ali.yazdanpanahfard@gmail.com
          </a>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </footer>

        {/* Scroll Animation Component */}
        <ScrollAnimation />
      </div>
    </div>
  );
};

export default About;

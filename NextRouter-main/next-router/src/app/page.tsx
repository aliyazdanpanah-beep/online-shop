import Navbar from "@/component/navbar/page";
import "./home.css";
import HomeAnimations from "@/component/scrollAnimation/scrollAnimation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <section>
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="hero-title fade-in-up">
              Create Your Website With Us
            </h1>
            <p className="hero-subtitle fade-in-up animation-delay-200">
              Bring your ideas to life with our top-notch web development
              services.
            </p>
            <button className="hero-btn fade-in-up animation-delay-400">
              Get Started
            </button>
          </div>
          
          {/* Features Section */}
          <div className="features-section">
            <h2 className="features-title fade-in-up">Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-item fade-in-up animation-delay-200">
                <h3 className="feature-title">High Quality Design</h3>
                <p className="feature-description">
                  We craft beautiful, responsive, and user-friendly websites
                  tailored to your needs.
                </p>
              </div>
              <div className="feature-item fade-in-up animation-delay-400">
                <h3 className="feature-title">Fast Delivery</h3>
                <p className="feature-description">
                  We respect your time and aim to deliver projects within your
                  deadlines.
                </p>
              </div>
              <div className="feature-item fade-in-up animation-delay-600">
                <h3 className="feature-title">Affordable Pricing</h3>
                <p className="feature-description">
                  Our services come at competitive prices without compromising
                  quality.
                </p>
              </div>
              <div className="feature-item fade-in-up animation-delay-200">
                <h3 className="feature-title">High Quality Design</h3>
                <p className="feature-description">
                  We craft beautiful, responsive, and user-friendly websites
                  tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="services-section">
            <h2 className="services-title fade-in-up">Our Services</h2>
            <div className="services-grid">
              <div className="service-item zoom-in animation-delay-200">
                <h3 className="service-title">Web Development</h3>
                <p className="service-description">
                  Custom websites tailored to your business needs using the
                  latest technologies.
                </p>
              </div>
              <div className="service-item zoom-in animation-delay-400">
                <h3 className="service-title">UI/UX Design</h3>
                <p className="service-description">
                  Beautiful and intuitive designs to enhance the user experience
                  on your site.
                </p>
              </div>
              <div className="service-item zoom-in animation-delay-600">
                <h3 className="service-title">SEO Optimization</h3>
                <p className="service-description">
                  Boost your website's visibility with our proven SEO
                  strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="links-section">
            <h2 className="links-title fade-in-up">Useful Links</h2>
            <div className="links-list">
              <a
                href="/about"
                className="link-item slide-in-left animation-delay-200"
              >
                About Us
              </a>
              <a
                href="/store"
                className="link-item slide-in-left animation-delay-300"
              >
                Services
              </a>
              <a
                href="/contact"
                className="link-item slide-in-left animation-delay-400"
              >
                Contact
              </a>
              <a
                href="/privacy"
                className="link-item slide-in-left animation-delay-500"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 All rights reserved.</p>
          </footer>
        </section>

        <HomeAnimations />
      </div>
    </div>
  );
}

import "./terms.scss";

const Terms = () => {
  return (
    <div className="terms">
      <main className="terms-content">
        <section className="intro-section">
          <h1>Terms & Conditions</h1>
          <p>
            Welcome to Paperfold! Please read these Terms and Conditions
            carefully before using our services.
          </p>
        </section>

        <section className="terms-details">
          <div className="card">
            <h2>Introduction</h2>
            <p>
              These terms govern your use of our website and services. By using
              Paperfold, you agree to these terms.
            </p>
          </div>

          <div className="card">
            <h2>Conduct on Website</h2>
            <p>
              Your use of the website must comply with all applicable laws and
              regulations. Any misuse or unauthorized activity may result in the
              suspension of your account.
            </p>
          </div>

          <div className="card">
            <h2>Intellectual Property</h2>
            <p>
              All content on the website, including text, images, and logos, is
              protected by copyright and trademark laws.
            </p>
          </div>

          <div className="card">
            <h2>Third Party Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not
              responsible for the content or privacy practices of these sites.
            </p>
          </div>

          <div className="card">
            <h2>Disclaimer of Warranties</h2>
            <p>
              We provide the website "as is" without any warranties. We do not
              guarantee error-free operation.
            </p>
          </div>

          <div className="card">
            <h2>Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the website
              if you violate these terms.
            </p>
          </div>
        </section>

        <section className="footer-note">
          <h3>Governing Law</h3>
          <p>
            These terms are governed by the laws of India, and any disputes will
            be settled in Indian courts.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Terms;

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h2>MORENT</h2>
            <p>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__section">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/how-it-works">How it works</a>
                </li>
                <li>
                  <a href="/featured">Featured</a>
                </li>
                <li>
                  <a href="/partnership">Partnership</a>
                </li>
                <li>
                  <a href="/business-relation">Business Relation</a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/podcast">Podcast</a>
                </li>
                <li>
                  <a href="/invite-a-friend">Invite a friend</a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h3>Socials</h3>
              <ul>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>©2024 MORENT. All rights reserved.</p>
          <p>
            <a href="/prpolicyivacy-">Privacy & Policy</a>
            <a href="/terms-and-conditions"> Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

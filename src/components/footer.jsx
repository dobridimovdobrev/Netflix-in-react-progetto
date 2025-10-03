function Footer() {
  return (
    <footer className="container-fluid px-5">
      <div className="row justify-content-center pt-5">
        <div className="col-12 col-lg-8">
          {/* <!-- social media icone --> */}
          <div className="d-flex gap-3 mb-5 text-center text-md-start">
            <i className="fa-brands fa-square-facebook fa-2xl" style={{color: "#7f7f7f"}}></i>{" "}
            <i className="fa-brands fa-square-instagram fa-2xl" style={{color: "#7f7f7f"}}></i>{" "}
            <i className="fa-brands fa-square-twitter fa-2xl" style={{color: "#7f7f7f"}}></i>{" "}
            <i className="fa-brands fa-square-youtube fa-2xl" style={{color: "#7f7f7f"}}></i>
          </div>

          {/* <!-- link footer --> */}
          <div className="row g-3 text-center text-md-start">
            {/* <!-- Colonna 1 --> */}
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="/browse/audio-description" target="_self">
                <span className="member-footer-link-content">Audio and Subtitles</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://help.netflix.com/" target="_self">
                <span className="member-footer-link-content">Audio Description</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="/redeem" target="_self">
                <span className="member-footer-link-content">Help Center</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://media.netflix.com/" target="_self">
                <span className="member-footer-link-content">Gift Cards</span>
              </a>
            </div>
            
            {/* <!-- Riga 2 --> */}
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="http://ir.netflix.com/" target="_self">
                <span className="member-footer-link-content">Media Center</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://jobs.netflix.com/" target="_self">
                <span className="member-footer-link-content">Investor Relations</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://help.netflix.com/legal/termsofuse" target="_self">
                <span className="member-footer-link-content">Jobs</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://help.netflix.com/legal/privacy" target="_self">
                <span className="member-footer-link-content">Terms of Use</span>
              </a>
            </div>
            
            {/* <!-- Riga 3 --> */}
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://help.netflix.com/legal/notices" target="_self">
                <span className="member-footer-link-content">Privacy</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="/Cookies" target="_self">
                <span className="member-footer-link-content">Legal Notices</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://help.netflix.com/legal/corpinfo" target="_self">
                <span className="member-footer-link-content">Cookie Preferences</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://help.netflix.com/contactus" target="_self">
                <span className="member-footer-link-content">Corporate Information</span>
              </a>
            </div>
            
            {/* <!-- Riga 4 --> */}
            <div className="col-lg-3 col-md-3 col-12 mb-2">
              <a className="member-footer-link" href="https://netflix.com/adchoices" target="_self">
                <span className="member-footer-link-content">Contact Us</span>
              </a>
            </div>
          </div>
          
          {/* <!-- Buttone con copyright --> */}
          <div className="mb-1 text-center text-md-start">
            <a
              href="#"
              className="btn btn-outline-light rounded-0 text-decoration-none mt-3 mb-3"
              aria-label="Service Code"
            >
              Service Code
            </a>
            <p className="text-secondary small mt-3">
              1997-2019 Netflix, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
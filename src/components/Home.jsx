import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { isMobile } from "react-device-detect";
function Home() {
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth <= 768;
      const newWidth = isMobile ? window.innerWidth * 0.6 : 500;
      const newHeight = isMobile ? window.innerWidth * 0.6 : 500;
      setDimensions({ width: newWidth, height: newHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div id="home-container" className="container">
      <div
        className={`row flex-lg-row-reverse text-center ${
          isMobile && "gap-5"
        } `}
      >
        <div className="col-lg-8">
          <img
            className=""
            src="man.png"
            width={dimensions.width}
            height={dimensions.height}
            alt="man"
          />
          <div className="hr-droid">
            <div className="hr-line line"></div>
            <div>
              <i className="fa">
                <a href="https://www.linkedin.com/in/sanjay-verma-70b47b323">
                  <img
                    src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
                    className="p-1"
                    alt=""
                    height={40}
                    width={40}
                  />
                </a>
              </i>
              <i className="fa">
                <a href="mailto:rm_indore10@yahoo.com">
                  <img
                    src="https://img.icons8.com/?size=100&id=89362&format=png&color=000000"
                    className="p-1"
                    alt=""
                    height={40}
                    width={40}
                  />
                </a>
              </i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 fs-3 d-flex flex-column mx-auto my-auto">
          I'm <span className="name"> Sanjay Verma</span>
          <p>"Regional Business Manager"</p>
          <div className="d-flex justify-content-center">
            <button
              className="btn"
              onClick={() => {
                window.open("CV.pdf");
              }}
            >
              <a href="CV.pdf" className="text-decoration-none" download={true}>
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

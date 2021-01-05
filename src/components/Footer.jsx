import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerLogo from "../Assets/footer.png";
import facebookLogo from "../Assets/facebook.png";
import linkedinLogo from "../Assets/linkedin.png";
import instaLogo from "../Assets/instagram.png";
const useStyles = makeStyles((theme) => ({
  copyRight: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "26px",
    textAlign: "center",
    color: "white",
    borderTop: "0.01em solid white",
    backgroundColor: "#2a2b2e",
    fontSize: "13px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#323336",
          height: "230px",
          position: "relative",
          marginTop: "18%",
          clear: "both",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center", position: "relative" }}>
          <img
            src={footerLogo}
            style={{
              height: 80,
              paddingTop: "1vw",
            }}
          />
          <p style={{ color: "white" }}>
            Get connected to us though our social media
          </p>
          <a
            href="https://www.facebook.com/BUESoftwareProductionUnit"
            target="_blank"
          >
            <img
              src={facebookLogo}
              style={{
                height: 40,
                paddingBottom: "20px",
                paddingRight: "1%",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/bue-software-production-unit/"
            target="_blank"
          >
            <img
              src={linkedinLogo}
              style={{
                height: 40,
                paddingBottom: "20px",
                paddingRight: "1%",
              }}
            />
          </a>

          <img
            src={instaLogo}
            style={{
              height: 40,
              paddingBottom: "20px",
            }}
          />
        </div>

        <div className={classes.copyRight}>
          Copyright @ 2020 Software Production Unit @ British Univeristy in
          Egypt
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;

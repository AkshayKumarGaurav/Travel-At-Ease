import React from "react";

import styled from "styled-components";
import styles from "./Reward.module.css";
import { Box, Button, Input, InputLeftAddon, Text } from "@chakra-ui/react";

const countries = [
  {
    value: "USD",
    label: "USA +1",
  },
  {
    value: "IN",
    label: "INDIA +91",
  },
  {
    value: "BTN",
    label: "Bhutan",
  },
  {
    value: "SR",
    label: "SriLanka",
  },
];

export default function Reward() {
  const mobilelogo =
    "https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg";

  return (
    <CardCont
      style={{
        margin: "auto",
        marginTop: "-50px",
        width: "95%",
        paddingLeft: "20px",
      }}
    >
      <Box className={styles.Card}>
        <Box>
          {" "}
          <img className={styles.Image} src={mobilelogo} alt="RewardImage" />
        </Box>
        <Box className={styles.Box2}>
          <Text className={styles.Text} component="h2">
            Rewards are waiting for you in the Orbitz app
          </Text>
          <br />

          <ui>
            <li className={styles.Text1}>
              Earn 4% back when you book your hotel in app, vs. 3% on site
            </li>
            <li className={styles.Text1}>
              Get flight status and gate number notifications
            </li>
            <li className={styles.Text1}>
              Have questions about your stay? Message your hotel right in the
              app
            </li>
          </ui>
          <br />
          <br />
          <Text className={styles.TexQR}>
            Scan the QR code with your mobile camera and download our app.
          </Text>
        </Box>
        <Box className={styles.Box3}>
          <img
            src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png"
            alt="travelQR"
          />
        </Box>
      </Box>
    </CardCont>
  );
}

const CardCont = styled.div`
  padding: 1.5rem;
  margin-top: 50px;
`;

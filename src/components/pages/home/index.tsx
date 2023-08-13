import { Box, SxProps, Theme } from "@mui/material";
import BaseLayout from "../../layouts/BaseLayout";
import Hero from "../../molecules/pages/Hero";
import Property from "../../molecules/pages/Property";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LockIcon from "@mui/icons-material/Lock";
import { Colors } from "../../../constants/colors";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import Tutorial from "../../molecules/pages/Tutorial";
import { Link } from "react-router-dom";
import BuyMeACoffee from "../../molecules/pages/BuyMeACoffee";

import step1 from "../../../assets/images/step1.png";
import step2 from "../../../assets/images/step2.png";
import step3 from "../../../assets/images/step3.png";
import { Helmet } from "react-helmet-async";

export default function HomePage(): React.ReactNode {
  return (
    <BaseLayout>
      <Helmet>
        <title>Home - Boilerplate</title>
        <meta name="description" content="Get ideas for your next writing by using Boilerplate." />
      </Helmet>

      <Hero />

      <BuyMeACoffee />

      <Box sx={styles.properties}>
        <Box sx={styles.propertyItem}>
          <Property
            title="Ergonomic"
            icon={
              <LightbulbIcon sx={{ fontSize: 30, color: Colors.background }} />
            }
            text="Easy to use and friendly tool only for you. Don’t really need a tutorial to get started."
          />
        </Box>

        <Box sx={styles.propertyItem}>
          <Property
            title="Powerful"
            icon={
              <FlashOnIcon sx={{ fontSize: 30, color: Colors.background }} />
            }
            text="Letters generated are precised base on inputs that you provide."
          />
        </Box>

        <Box sx={styles.propertyItem}>
          <Property
            title="Sécurity"
            icon={<LockIcon sx={{ fontSize: 30, color: Colors.background }} />}
            text="The security of your data is our priority, all your letters will be secured."
          />
        </Box>
      </Box>

      <Box sx={styles.tutorial}>
        <Tutorial
          title="Start by creating an account for free"
          description="Before starting writing, you have to create an account in order to save all your writings in a secured place"
          btn={
            <Link to="/auth">
              <Button style={{ height: 50, px: 4 }}>
                <Text text="Create Account" style={styles.btnText} />
              </Button>
            </Link>
          }
          image={step1}
        />

        <Tutorial
          title="Continue by writing your letters"
          description="After having an account, you can now create a new document and start writing what you want."
          btn={
            <Link to="/dashboard/writings">
              <Button style={{ height: 50, px: 4 }}>
                <Text text="START WRITING" style={styles.btnText} />
              </Button>
            </Link>
          }
          image={step2}
          reverse
        />

        <Tutorial
          title="Finally, Generate your writing"
          description="Provide some informations about what you want and then generate your writing by clicking on the button below."
          btn={
            <Link to="/dashboard/writings">
              <Button style={{ height: 50, px: 4 }}>
                <Text text="Access to the generator" style={styles.btnText} />
              </Button>
            </Link>
          }
          image={step3}
        />
      </Box>

      <Box component="section" sx={styles.ready}>
        <Text text="Are you ready ?" style={styles.readyTitle} />

        <Link to="/dashboard/writings">
          <Button
            style={{
              height: 50,
              px: 4,
            }}
          >
            <Text text="START WRITING" style={styles.btnText} />
          </Button>
        </Link>
      </Box>
    </BaseLayout>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  properties: (theme) => ({
    width: "calc(100% - 200px)",
    padding: "100px 100px",
    display: "flex",
    justifyContent: "space-between",
    gap: 5,

    [theme.breakpoints.down("md")]: {
      padding: "100px 50px",
      width: "calc(100% - 100px)",
      flexDirection: "column",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
      width: "calc(100% - 40px)",
    },
  }),

  propertyItem: (theme) => ({
    width: "calc(33% - 20px)",

    [theme.breakpoints.down("md")]: {
      width: "60%",
      mx: "auto",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      mx: 0,
    },
  }),

  tutorial: (theme) => ({
    width: "calc(100% - 200px)",
    padding: "50px 100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    backgroundColor: Colors.grayLight,

    [theme.breakpoints.down("md")]: {
      padding: "50px",
      width: "calc(100% - 100px)",
      flexDirection: "column",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
      width: "calc(100% - 40px)",
    },
  }),

  ready: (theme) => ({
    width: "calc(100% - 200px)",
    padding: "50px 100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,

    [theme.breakpoints.down("md")]: {
      padding: "50px",
      width: "calc(100% - 100px)",
      flexDirection: "column",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
      width: "calc(100% - 40px)",
    },
  }),

  btnText: {
    fontFamily: "Lexend Regular",
    fontSize: 16,
  },

  readyTitle: {
    fontFamily: "Lexend Bold",
    fontSize: 28,
  },
};

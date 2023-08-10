import { 
  Box, 
  // Button, 
  SxProps, 
  Theme 
} from "@mui/material";

import bgImage from "../../../assets/images/bgSignin.png";
import googleIcon from "../../../assets/images/google.png";
import { Colors } from "../../../constants/colors";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text"

export default function AuthPage(): React.ReactNode {

  return (
    <Box sx={styles.container}>
      <Box sx={styles.login}>
        <Text
          text="Login into your account"
          style={{
            fontFamily: "Lexend Black",
            fontSize: 50,
            color: "#fff",
            lineHeight: 1.2,
            mb: 7,
            mt:3,
          }}
        />

        <Button  variant="text" style={{ height: 60, px: 4, backgroundColor:"#FFF", borderRadius:"10px", mb:3, width:"100%"  }}>
          <img src={googleIcon} style={{height: "30px", width:"30px", position:"relative", left:"-20px"}} />
          <Text 
            text="continue with Google" 
            style={{ 
              fontFamily: "Lato Regular" ,
              color: Colors.blackBold,
              fontSize: 25,
              paddingLeft:"10px",
              textTransform: 'lowercase',
            }} 
          />
        </Button>
        <Text
          text="We are responsible for the security of your writings. Login and start writing."
          style={{
            fontFamily: "Lato Regular",
            fontSize: 20,
            color: "#fff",
            mb: 3,
          }}
        />
        <Box 
          sx={{
            display:"flex",
            mb: 4
          }}>
          <Text
            text="Check our "
            style={{
              fontFamily: "Lato Regular",
              fontSize: 20,
              color: "#fff",
              
            }}
          />
          <Text
            text="terms and conditions."
            style={styles.condition}
          />
        </Box>
        <Text
          text="Boilerplate."
          style={{
            fontFamily: "Lexend Bold",
            fontSize: 30,
            color: "#fff",
            mb: 3,
          }}
        />

      </Box>
      <Box sx={styles.bg} />
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("sm")]: {

    },
  }),
  login:(theme) => ({
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft:"10%",
    width: "360px",
    height: "80vh",
    padding:"40px",
    backgroundColor: Colors.primary,
    borderRadius:"20px",
    zIndex: 30,
  }),

  condition:(theme) => ({
    fontFamily: "Lato Bold",
    cursor:"pointer",
    fontSize: 20,
    color: "#fff",
    paddingLeft:"8px",

    '&:hover':{
      textDecoration: "underline",
    }
  }),
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }

};
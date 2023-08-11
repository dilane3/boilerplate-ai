import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { SxProps, Theme, Box, CardActionArea } from "@mui/material"
import Text from '../../atoms/texts/Text';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';

import letter from '../../../assets/images/profil.jpg'
import Icon from '../../atoms/icons/Icon';
import Button from '../../atoms/buttons/Button';

export default function Member() {


  return (
    <Card sx={styles.container} >
      <CardActionArea disableRipple sx={styles.containerItems}>

        <Box sx={styles.memberRole}>
            <CardMedia
                component="img"
                image={letter}
                alt="Profil"
                sx={styles.memberPicture}
            />

            <CardContent sx={{paddingLeft:"10px"}}>
                <Text
                    text="John Hemrick"
                    style={styles.memberName}
                />
                <Text
                    text="Founder of Boilerplate"
                    style={styles.description}
                />
                <Text
                    text="From Cameroon"
                    style={styles.description}
                />

            </CardContent>

        </Box>
        <Box sx={[{width: "100%", my:2}, styles.center]}>
            <Button style={{ height: 50, px: 4 }}>
                <GitHubIcon sx={{ mr: 1 }} />
            <Text text="Follow me" style={{ fontFamily: "Lexend Regular" }} />
            </Button>
            <Box sx={styles.center}>
                <Icon
                    style={{fontSize: "24px", color:"#000"}}
                >
                    <TwitterIcon />
                </Icon>
                <Icon
                    style={{fontSize: "24px", color:"#000"}}
                >
                    <LinkIcon sx={{transform: "rotate(-45deg)"}} />
                </Icon>
            </Box>
        </Box>

      </CardActionArea>
    </Card>
  );
}

const styles: Record<string, SxProps<Theme>> = {
    container: (theme) => ({
        
        width: "40%",
        marginTop:"20px",
        border:"none",
        boxShadow:"none",
        

      [theme.breakpoints.down("md")]: {
        width: "100%",
      }
    }),
    containerItems: {
        display: "flex",
        flexDirection: "column",
        maginBlock:"10px",

    },
    memberPicture: (theme) => ({
        maxWidth: 500, 
        width: "150px",
        height: "150px",
        borderRadius: "50%",

      [theme.breakpoints.down("sm")]: {
        
      }
    }),
    memberName:(theme) => ({
        fontFamily: "Lexend Bold",
        fontSize: 32,

    }),
    memberRole:{
        display: "flex",
        width: "100%",

    },
    description:{
        color:"#565656",
        fontSize: 22,
        fontFamily: "Lexend",
    }, 
    center:{
        display:"flex", 
        alignItems: "center", 
        justifyContent:"space-between",
        
    }
  
}
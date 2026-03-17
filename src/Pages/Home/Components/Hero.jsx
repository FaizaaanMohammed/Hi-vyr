import {
  Box,
  Typography,
  Container,
  
  Divider,
  Stack,
  List, ListItem, ListItemIcon, ListItemText, Link
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BannerImg from "../../../Assets/banner_img.png";
import "../../../App.css";
import {  Grid, } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 2 }, pb: 5 }}>
      {/* 1. Full Width Heading */}
      <Box sx={{ width: "100%", mb: { xs: 3, md: 2 } }}>
        <Typography
         
          sx={{
            fontSize: { xs: "36px", md: "58px" },
            lineHeight: {xs:"40px",md:"70px"},
            color: "#666", 
            fontWeight: {sm:"700",md:"500"},
            letterSpacing: "0px",
            
            fontFamily: "Montserrat",
          }}
        >
          CRAFTING CALM, CONFIDENT DIGITAL SPACES FOR
          <span style={{ color: "#000" }}>INSTITUTIONS THAT CARE</span>
        </Typography>
      </Box>

      {/* 2. Image (Aligned Right on Desktop, Full on Mobile) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          mb: 4,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "right" }}>
          <Box
            component="img"
            src={BannerImg}
            alt="Hero Illustration"
            sx={{ width: {md:"410px",xs:"100%"}, height: {md:"268px",xs:"auto"} }}
          />
          
        </Box>
      </Box>

      {/* 3. The Border (Divider) */}
      <Divider sx={{ mb: 2, borderColor: "#332B28", borderBottomWidth: 2, }} />

     
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
      >
        <Typography
          sx={{
            fontSize: { xs: "11px", md: "13px" },
            fontWeight: 700,
            color: "#11515A", 
            letterSpacing: 0.5,
            fontFamily:"Montserrat",
            
          }}
        >
          CUSTOM WEBSITES FOR SCHOOLS, COLLEGES, CLINICS & HOSPITALS
         
        </Typography>
         <Typography
          sx={{
            fontSize: { xs: "11px", md: "13px" },
            fontWeight: 700,
            color: "#000", 
            letterSpacing: 0.5,
            textTransform:"uppercase",
            fontFamily:"Montserrat"
          }}
        >
          By New Tab Tech Lab Pvt Ltd
        </Typography>

        
      </Stack>

      {/* button */}
       <Box sx={{ mb: 6,mt:6 }}>
          <Link 
            href="#" 
            sx={{ 
              color: '#333', 
              textDecoration: 'underline', 
              fontWeight: 700, 
              fontSize: '12px', 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              fontFamily: "Montserrat",
              textUnderlineOffset: '4px'
            }}
          >
            LET'S START OUR PROJECT <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Box>

        {/* --- Main Content Grid --- */}
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Left Column: Heading */}
          <Grid item  size={{xs:12,md:6}}>
            <Typography 
             
              sx={{ 
                fontWeight: 700, 
                lineHeight: {md:"48px",xs:"30px"},
                color: '#333',
                textTransform: 'uppercase',
                fontFamily: "Montserrat",
                fontSize: { xs: '2rem', md: '38px' }
              }}
            >
              <Box component="span" sx={{ color: '#9E938F' }}>BECAUSE YOUR</Box> <br />
              <Box component="span" sx={{ color: '#9E938F' }}>INSTITUTION</Box> DESERVES <br />
              TO FEEL SEEN, TRUSTED <br />
              & UNDERSTOOD
            </Typography>
          </Grid>

          {/* Right Column: List and Paragraph */}
          <Grid item  size={{xs:12,md:6}}>
            <List sx={{ p: 0, mb: 4 }}>
              {[
                "Your website isn’t just a digital address — it’s a quiet assurance.",
                "A calm welcome to a parent. A clear next step for a patient.",
                "A place where your values live and your story is gently told."
              ].map((text, index) => (
                <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: '20px', mt: '10px' }}>
                    <FiberManualRecordIcon sx={{ fontSize: '6px', color: '#333' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={text} 
                    primaryTypographyProps={{ 
                      fontSize: '15px', 
                      color: '#333', 
                      fontFamily: "Montserrat",
                      lineHeight: 1.5
                    }} 
                  />
                </ListItem>
              ))}
            </List>

            <Typography 
              sx={{ 
                color: '#444', 
                fontSize: '15px', 
                lineHeight: 1.6,
                fontFamily: "Montserrat",
                maxWidth: '500px'
              }}
            >
              At New Tab Tech Lab, we help educational and healthcare institutions 
              build digital homes that feel <strong>warm, trustworthy, and professional</strong> — 
              just like the care they provide in real life.
            </Typography>
          </Grid>
        </Grid>
    </Container>
  );
};

export default Hero;

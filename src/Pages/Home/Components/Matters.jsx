import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const WhyItMatters = () => {
  const orangeAccent = '#EC9874';
  const navyBg = '#0C1D31';

  const features = [
    {
      title: "FIRST IMPRESSIONS ARE OFTEN DIGITAL",
      description: "Before anyone visits your school or clinic, they visit your website. A clear, thoughtful design builds confidence and belonging — even before you speak."
    },
    {
      title: "IT’S ALWAYS OPEN, EVEN WHEN YOU’RE NOT",
      description: "A website is your 24/7 receptionist. It guides admissions, answers questions, confirms appointments, and shows who you are — even after hours."
    },
    {
      title: "PEOPLE LIVE ON THEIR PHONES",
      description: "Parents searching for schools or patients finding a clinic do so on mobile. A fast, intuitive mobile site isn't a luxury — it's a necessity."
    },
    {
      title: "GOOD DESIGN REDUCES CONFUSION",
      description: "In healthcare and education, clarity brings peace. We design sites that feel calm, organized, and accessible — no noise, just ease."
    },
    {
      title: "YOUR STORY DESERVES A PLACE TO SHINE",
      description: "Whether you’ve been serving for 2 years or 20, your work deserves to be represented with dignity. A good website tells your story beautifully and simply."
    }
  ];

  return (
    <Box sx={{ bgcolor: navyBg, color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* --- Top Header Section --- */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item  size={{xs:12,md:6}}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: "#EC9874", 
                fontWeight: 800, 
                lineHeight: 1.2,
                textTransform: 'uppercase',
                fontSize:{md:"38px",xs:"30px"},
                fontFamily:"Montserrat"
              }}
            >
              Why a thoughtfully <br /> built website matters
            </Typography>
          </Grid>
          <Grid item  size={{xs:12,md:6}}>
            <Typography 
              sx={{ 
                fontSize: '22px', 
                fontWeight: 500, 
                lineHeight: "22px", 
                opacity: 0.9,
                textTransform: 'uppercase',
                fontFamily:"Montserrat",
                color:"#fff"
              }}
            >
              In a world that moves quickly, people look for reassurance before they look for directions. Your website becomes the first moment of trust.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 8 }} />

        {/* --- Features Grid --- */}
        <Grid container spacing={6}>
          {features.map((item, index) => (
            <Grid item size={{xs:12,sm:6,md:4}} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2,fontFamily:"Montserrat" }}>
                {/* Orange Square */}
                <Box 
                  sx={{ 
                    width: 18, 
                    height: 18, 
                    bgcolor: orangeAccent, 
                    mr: 2, 
                    flexShrink: 0,
                    mt: 0.5 
                  }} 
                />
                <Typography 
                  variant="subtitle1" 
                  sx={{ fontWeight: 500, fontSize: '22px', lineHeight: "24px",fontFamily:"Montserrat" }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#fff', 
                  lineHeight: 1.7, 
                  fontSize: '14px',
                  pl: 4 ,
                  fontFamily:"Montserrat"
                }}
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyItMatters;
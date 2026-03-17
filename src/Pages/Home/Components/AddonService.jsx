import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material';

const AddOnServices = () => {
  const orangeAccent = '#EC9874'; 

  const services = [
    { title: "CONTENT WRITING", detail: "(₹3,500 FOR 5 PAGES)" },
    { title: "PHOTOGRAPHY &", detail: "WALKTHROUGHS" },
    { title: "GOOGLE REVIEWS SETUP", detail: "& LOCAL LISTING" },
    { title: "MOBILE APP FOR PARENTS/", detail: "PATIENTS (QUOTE-BASED)" },
    { title: "EMAIL & NEWSLETTER", detail: "AUTOMATION" },
  ];

  return (
    <Box sx={{ bgcolor: '#EAEAEA', py: { xs: 6, md: 4 }, fontFamily: "Montserrat",paddingBottom:"60px!important" }}>
      <Container maxWidth="lg">
        
        {/* Top Label and Divider */}
        <Box sx={{ borderBottom: '2px solid #333', pb: 0.5, mb: 6, width: '100%' }}>
          <Typography sx={{ fontSize: '12px', fontWeight: 800, letterSpacing: 1.5, fontFamily: "Montserrat" }}>
            ADD-ON
          </Typography>
        </Box>

        {/* Section Title */}
        <Typography 
          
          sx={{ 
            fontWeight: 700, 
            color: '#0B1D33', 
            mb: 8, 
            textTransform: 'uppercase',
            fontFamily: "Montserrat",
            fontSize: { xs: '1.8rem', md: '38px' }
          }}
        >
          Add-on Services
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item  size={{xs:12,md:4,sm:6}} key={index}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                
                <Box 
                  sx={{ 
                    width: 24, 
                    height: 24, 
                    bgcolor: orangeAccent, 
                    flexShrink: 0,
                    mt: 0.2 
                  }} 
                />
                
                <Box>
                  <Typography 
                    sx={{ 
                      fontFamily: "Montserrat", 
                      fontSize: '14px', 
                      fontWeight: 700, 
                      color: '#333',
                      lineHeight: 1.2
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: "Montserrat", 
                      fontSize: '14px', 
                      fontWeight: 700, 
                      color: '#333',
                      lineHeight: 1.2
                    }}
                  >
                    {service.detail}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};



export default AddOnServices;
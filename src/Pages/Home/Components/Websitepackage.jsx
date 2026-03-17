import React from 'react';
import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Reusable Card Component with Montserrat applied to internal text
const PackageCard = ({ color, title, price, subtitle, features }) => (
  <Box sx={{ 
    border: `2px solid ${color}`, 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column',
    bgcolor: '#fff'
  }}>
    <Box sx={{ p: 3, flexGrow: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <Box sx={{ width: 20, height: 20, bgcolor: color, opacity: 0.6 }} />
        <Typography sx={{ fontWeight: 800, fontSize: '13px', letterSpacing: 1, textTransform: 'uppercase', fontFamily: "Montserrat" }}>
          {title}
        </Typography>
      </Stack>
      
      <Typography variant="body2" sx={{ color: '#666', fontSize: '12px', mb: 1, lineHeight: 1.4, fontFamily: "Montserrat" }}>
        {subtitle}
      </Typography>
      
      <Typography sx={{ fontWeight: 800, fontSize: '18px', mb: 2, fontFamily: "Montserrat" }}>
        {price}
      </Typography>

      <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
        {features.map((f, i) => (
          <Typography key={i} component="li" sx={{ fontSize: '15px', color: '#444', mb: 0.5, display: 'flex', alignItems: 'flex-start', fontFamily: "Montserrat",lineHeight:"17px" }}>
            <Box component="span" sx={{ mr: 1 }}>•</Box> {f}
          </Typography>
        ))}
      </Box>
    </Box>

    <Button 
      fullWidth 
      endIcon={<ArrowForwardIcon sx={{ fontSize: '16px !important' }} />}
      sx={{ 
        justifyContent: 'space-between', 
        px: 2, 
        py: 1.5, 
        borderTop: `1px solid ${color}`,
        borderRadius: 0,
        color: '#333',
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
        fontFamily: "Montserrat", // Updated button font
        '&:hover': { bgcolor: `${color}10` }
      }}
    >
      Let's start our project
    </Button>
  </Box>
);

const WebsitePackages = () => {
  const eduColor = '#9C9DE1'; 
  const healthColor = '#FFAB91';

  return (
    <Box sx={{ bgcolor: '#F5F5F5', py: 10 }}>
      <Container maxWidth="lg">
        {/* Section Label */}
        <Box sx={{ borderBottom: '2px solid #333', pb: 0.5, mb: 8, width: '100%' }}>
          <Typography sx={{ fontSize: '12px', fontWeight: 700, letterSpacing: 1, fontFamily: "Montserrat" }}>
            WEBSITE PACKAGES
          </Typography>
        </Box>

        {/* --- EDUCATION SECTION --- */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item size={{xs:12,md:5}}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, textTransform: 'uppercase', color: '#333', fontFamily: "Montserrat", fontSize: "32px" }}>
              Education Website Packages
            </Typography>
            <Typography sx={{ color: '#555', fontSize: '16px', lineHeight: 1.6, maxWidth: '400px', fontFamily: "Montserrat" }}>
              At New Tab Tech Lab, we help educational and healthcare institutions build digital homes that feel <strong>warm, trustworthy, and professional</strong> — just like the care they provide in real life.
            </Typography>
          </Grid>
          <Grid item size={{xs:12,md:7}}>
            <Grid container spacing={3}>
              <Grid item size={{xs:12,sm:6}}>
                <PackageCard 
                  color={eduColor}
                  title="EduStart Presence"
                  subtitle="For schools beginning their digital journey"
                  price="₹28,000 + GST"
                  features={["Clean, mobile-friendly 5-page website", "Inquiry form + Google Maps", "Noticeboard & WhatsApp contact", "Social media links", "1-month gentle tech support"]}
                />
              </Grid>
              <Grid item size={{xs:12,sm:6}}>
                <PackageCard 
                  color={eduColor}
                  title="EduStart Presence"
                  subtitle="For schools beginning their digital journey"
                  price="₹65,000 + GST"
                  features={["10+ pages with a branded layout", "Online admission form & fee gateway", "Blog for updates and articles", "Admin panel for easy edits", "Hosting & domain for 1 year", "Friendly onboarding + 3-month support"]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* --- HEALTHCARE SECTION --- */}
        <Grid container spacing={4}>
          <Grid item size={{xs:12,md:5}}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, textTransform: 'uppercase', color: '#333', fontFamily: "Montserrat", fontSize: "32px" }}>
              Healthcare Website Packages
            </Typography>
            <Typography sx={{ color: '#555', fontSize: '16px', lineHeight: 1.6, maxWidth: '400px', fontFamily: "Montserrat" }}>
              At New Tab Tech Lab, we help educational and healthcare institutions build digital homes that feel <strong>warm, trustworthy, and professional</strong> — just like the care they provide in real life.
            </Typography>
          </Grid>
          <Grid item size={{xs:12,md:7}}>
            <Grid container spacing={3}>
              <Grid item size={{xs:12,sm:6}}>
                <PackageCard 
                  color={healthColor}
                  title="MediLite Presence"
                  subtitle="For solo doctors, clinics, and diagnostics centers"
                  price="₹30,000 + GST"
                  features={["5 pages with service details, timings & contact", "Inquiry form with WhatsApp connection", "Google Business integration", "Mobile-first design with warm layout", "Post-launch guidance for 1 month"]}
                />
              </Grid>
              <Grid item size={{xs:12,sm:6}}>
                <PackageCard 
                  color={healthColor}
                  title="MediPro Advantage"
                  subtitle="For schools beginning their digital journey"
                  price="₹70,000 + GST"
                  features={["10+ pages including doctor profiles & departments", "Appointment booking form + emergency quick connect", "Payment gateway for OPD/lab services", "Blog & wellness articles", "1-year hosting + 3-month support", "Built-in analytics & SEO"]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WebsitePackages;
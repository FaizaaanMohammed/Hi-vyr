import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  const orangeAccent = '#D97D54';
  const navyBg = '#0B1D33';

  return (
    <Box component="footer">
      {/* --- Main Footer Section --- */}
      <Box sx={{ bgcolor: navyBg, color: '#fff', pt: 8, pb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Column: Contact & Info */}
            <Grid item xs={12} md={7} size={{xs:12,md:7}}>
              <Typography 
                
                sx={{ 
                  color: orangeAccent, 
                  fontWeight: 700, 
                  letterSpacing: 1, 
                  mb: 3,
                  textTransform: 'uppercase',
                  fontSize:"42px",
                  fontFamily:"Montserrat"
                }}
              >
                Let’s begin, together
              </Typography>
              
              <Typography sx={{ maxWidth: '400px', mb: 4, opacity: 0.9, lineHeight: 1.6,fontSize:"16px" }}>
                We believe your digital presence should feel as thoughtful as your physical one. 
                If you’re ready to build something that reflects your care, values, and clarity — we’re here
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Link href="mailto:hello@newtabtechlab.com" sx={{ color: '#fff', textDecoration: 'underline', display: 'block', mb: 0.5, fontWeight: 600,fontFamily:"Montserrat",fontSize:"16px" }}>
                  hello@newtabtechlab.com
                </Link>
                <Typography variant="body2" sx={{ opacity: 0.8,fontFamily:"Montserrat",fontSize:"16px" }}>
                  Based in India | Serving Institutions Nationwide
                </Typography>
              </Box>

              <Box>
                <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 1, display: 'block', mb: 1 }}>
                  Socials
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Link href="#" sx={{ color: '#fff', textDecoration: 'underline', fontWeight: 700,fontFamily:"Montserrat" ,fontSize:"16px" }}>LINKEDIN</Link>
                  <Link href="#" sx={{ color: '#fff', textDecoration: 'underline', fontSize: '12px', fontWeight: 700,fontFamily:"Montserrat" ,fontSize:"16px" }}>X</Link>
                </Stack>
              </Box>
            </Grid>

            {/* Right Column: CTA Links */}
            <Grid item size={{xs:12,md:5}}>
              <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'flex-end' }} sx={{ mt: { xs: 4, md: 13 } }}>
                <Link href="#" sx={{ color: '#fff', textDecoration: 'underline', fontWeight: 700, fontSize: '14px', letterSpacing: 1,fontFamily:"Montserrat"}}>
                  BOOK A FREE CONSULTATION
                </Link>
                
                <Stack direction="row" spacing={4} justifyContent="flex-end">
                   <Link href="#" sx={{ color: '#fff', textDecoration: 'underline', fontWeight: 700, fontSize: '16px', letterSpacing: 1,fontFamily:"Montserrat" }}>
                    DOWNLOAD BROCHURE
                  </Link>
                   <Link href="#" sx={{ color: '#fff', textDecoration: 'underline', fontWeight: 700, fontSize: '16px', letterSpacing: 1 ,fontFamily:"Montserrat"}}>
                    CHAT WITH US
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- Sub-Footer (Light Gray) --- */}
      <Box sx={{ bgcolor: '#EAEAEA', py: 2 }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#666', textTransform: 'uppercase',fontFamily:"Montserrat" }}>
              © 2024 New Tab Tech Lab
            </Typography>
            <Link href="#" sx={{ fontSize: '12px', fontWeight: 600, color: '#666', textDecoration: 'none', textTransform: 'uppercase',fontFamily:"Montserrat" }}>
              Sitemap
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
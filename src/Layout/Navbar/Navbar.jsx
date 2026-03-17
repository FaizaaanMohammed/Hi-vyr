import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Container, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "../../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ['About', 'Services', 'Package', 'Contact'];
  const trigger = useScrollTrigger({
    disableHysteresis: true, 
    threshold: 50, 
  });

  return (
    <AppBar position="sticky" color="transparent" elevation={trigger ? 2 : 0}  sx={{ 
        py: 1,
        transition: '0.3s ease-in-out', 
        backgroundColor: trigger ? '#F5F5F5' : 'transparent', 
       
        fontFamily: "Montserrat",borderBottom:{xs:"2px solid #000",md:"none"}
      }} >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: {xs:'center',md:"flex-end"} }}>
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: 'text.primary', ml: 4, textTransform: 'none', fontWeight: 500,fontFamily:"Montserrat",fontSize:"16px",lineHeight:"21px" }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Sidebar */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>

        
        <List sx={{ width: 250, pt: 4 }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
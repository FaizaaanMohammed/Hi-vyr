import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const faqData = [
    {
      question: "CAN WE EDIT THE WEBSITE OURSELVES?",
      answer: "Yes, and we’ll train your team gently. We ensure the backend is intuitive so you don't need a developer for basic updates."
    },
    {
      question: "DO WE NEED TO PROVIDE EVERYTHING UPFRONT?",
      answer: "No, we can work in phases. We'll start with the core structure and add content as you have it ready."
    },
    {
      question: "WILL IT LOOK GREAT ON PHONES?",
      answer: "Absolutely. Every design is built mobile-first to ensure it looks professional on all screen sizes."
    },
    {
      question: "WHAT IF WE’RE NOT VERY TECH-SAVVY?",
      answer: "That’s why we’re here. We handle the technical complexity so you can focus on your institution’s mission."
    }
  ];

  return (
    <Box sx={{ bgcolor: '#EAEAEA', py: 10 }}>
      <Container maxWidth="lg">
        {/* --- Top Blue Accent Line --- */}
        <Box sx={{ borderBottom: '2px solid #0C1D31', width: '100%', pt: 1, mb: 4 }}>
          <Typography variant="caption" sx={{ fontWeight: 800, letterSpacing: 1,fontFamily:"Montserrat",pb:1 }}>
            FAQ
          </Typography>
        </Box>

        {/* --- Heading --- */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 500, 
            color: '#0B1D33', 
            mb: 2, 
            textTransform: 'uppercase',
            fontSize: { xs: '1.8rem', md: '42px' } ,
            fontFamily:"Montserrat"
          }}
        >
          Soft answers to  common questions
        </Typography>

        {/* --- Interactive Accordion List --- */}
        <Box>
          {faqData.map((item, index) => (
            <Accordion 
              key={index} 
              disableGutters 
              elevation={0} 
              sx={{ 
                bgcolor: 'transparent', 
                borderBottom: '1px solid #999',
                '&:before': { display: 'none' }, 
                fontFamily:"Montserrat"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 0, py: 1 }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#333',fontFamily:"Montserrat" }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              
              <AccordionDetails sx={{ px: 0, pb: 3 }}>
                <Typography 
                  sx={{ 
                    color: '#666', 
                    fontStyle: 'italic', 
                    fontSize: '15px',
                    lineHeight: 1.6 ,
                    fontFamily:"Montserrat"
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
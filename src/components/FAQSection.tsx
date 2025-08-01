'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
}

export default function FAQSection({ title, description, faqs }: FAQSectionProps) {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={2}>
        {title}
      </Typography>
      {description && (
        <Typography variant="h6" color="text.secondary" textAlign="center" mb={4} fontWeight={700}>
          {description}
        </Typography>
      )}
      <Box maxWidth={900} mx="auto">
        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ mb: 2, borderRadius: 3, boxShadow: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" fontWeight={700}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" fontWeight={700}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
} 
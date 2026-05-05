import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <Typography fontWeight="800" fontSize="32px" color="#FF2625">
        Peak Fit
      </Typography>
    </Stack>

  </Box>
);

export default Footer;

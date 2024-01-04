import { Box } from '@mui/material';
import { ReactNode } from 'react';

type BeforeLoginLayoutType = {
  children: ReactNode;
  modal: ReactNode;
};
export default function Layout({ children, modal }: BeforeLoginLayoutType) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100dvw',
        height: '100dvh',
      }}>
      {children}
      {modal}
    </Box>
  );
}

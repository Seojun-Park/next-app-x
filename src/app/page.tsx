import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import { Box, Button, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100dvw',
        height: '100dvh',
      }}>
      <Stack
        flexDirection={'row'}
        alignItems={'center'}>
        <Box>
          <Image
            src={logo}
            alt='logo'
            width={400}
            height={400}
            style={{
              objectFit: 'contain',
            }}
            priority
          />
        </Box>
        <Stack spacing={2}>
          <Typography variant='h3'>{`What's happening?`}</Typography>
          <Typography variant='h4'>Sign up now</Typography>
          <Link href='/i/flow/signup'>
            <Button variant='contained'>Sign Up</Button>
          </Link>
          <Typography variant='h5'>Already Signed up?</Typography>
          <Link href='/login'>
            <Button variant='contained'>Login</Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

import Image from 'next/image';
import logo from '../../../../public/logo.png';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';

export default function Main() {
  return (
    <Stack
      sx={{
        width: '100dvw',
        height: '100dvh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      direction={'row'}>
      <Box>
        <Image
          src={logo}
          alt='logo'
          width={300}
          height={300}
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Stack spacing={2}>
        <Typography variant='h3'>{`What's happening?`}</Typography>
        <Typography variant='h4'>Sign up now</Typography>
        <Link href='/i/flow/signup'>
          <Button variant='contained'>Sign up</Button>
        </Link>
        <Typography variant='h5'>Already have an account?</Typography>
        <Link href='/login'>
          <Button variant='contained'>Login</Button>
        </Link>
      </Stack>
    </Stack>
  );
}

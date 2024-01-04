'use client';
import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <Wrapper>
      <Modal>
        <Stack
          sx={{
            padding: '36px 80px 20px',
            fontSize: '31px',
            fontWeight: 'bold',
          }}
          direction={'row'}
          spacing={2}>
          <Button
            variant='text'
            onClick={onClickClose}>
            <svg
              width={24}
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03'>
              <g>
                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
              </g>
            </svg>
          </Button>
          <Typography
            variant='h3'
            fontWeight={'bold'}
            color={'black'}>
            로그인하세요.
          </Typography>
        </Stack>
        <form
          onSubmit={onSubmit}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 50px',
          }}>
          <Stack
            sx={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            spacing={2}>
            <TextField
              sx={{
                width: '400px',
              }}
              value={id}
              onChange={onChangeId}
              type='text'
            />
            <TextField
              sx={{
                width: '400px',
              }}
              value={password}
              onChange={onChangePassword}
              type='password'
            />
          </Stack>
          <Box>{message}</Box>
          <Box
            sx={{
              margin: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              variant='contained'
              disabled={!id && !password}>
              로그인하기
            </Button>
          </Box>
        </form>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  width: '100vw',
  height: '100%',
  justifyContent: 'center',
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.4)',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const Modal = styled('div')({
  background: '#ffffff',
  position: 'relative',
  top: '5%',
  maxWidth: '80vw',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  width: '40vw',
  margin: '50px auto',
});

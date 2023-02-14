import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button } from '@mui/material'
import Welcome from './Welcome'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      
      <Box>
          <Welcome/>
      </Box>
    </>
  )
}

"use client"
import 'react'
import styles from './logo.module.css'
import Link from 'next/link';

export default function Logo() {

  return (
    <img className={styles.mainLogo} src="/mainLogo2.png" alt="Lost in nostalgia logo" />
  );
}
'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = () => {
  return (
    <>
      <Next13ProgressBar nonce={`${btoa(crypto.randomUUID())}`} height="2px" color="#fff" options={{ showSpinner: false }} showOnShallow />
    </>
  );
};
export default Providers;
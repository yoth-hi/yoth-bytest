'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = () => {
  return (
    <>
      <Next13ProgressBar nonce={`${btoa(crypto.randomUUID())}`} height="4px" color="#0A2FFF" options={{ showSpinner: false }} showOnShallow />
    </>
  );
};
export default Providers;
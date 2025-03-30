import { useState, useEffect } from 'react';
import { addMusicLoadingListener } from './audio';

export const useMusicLoading = () => {
  const [isMusicLoading, setIsMusicLoading] = useState(false);

  useEffect(() => {
    // Subscribe to music loading state changes
    const unsubscribe = addMusicLoadingListener(setIsMusicLoading);
    
    // Add fallback timeout to prevent infinite loading
    // const timeoutId = setTimeout(() => {
    //   console.log("Fallback timeout: forcing loading state to false");
    //   setIsMusicLoading(false);
    // }, 10000); // Force loading to complete after 5 seconds max
    
    // Clean up subscription and timeout when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return isMusicLoading;
};
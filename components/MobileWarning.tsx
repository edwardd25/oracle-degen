'use client';

import { useEffect, useState } from 'react';

export default function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        maxWidth: '400px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{fontSize: '64px', marginBottom: '24px'}}>🖥️</div>
        <h2 style={{fontSize: '24px', fontWeight: 700, marginBottom: '16px'}}>
          Desktop Required
        </h2>
        <p style={{fontSize: '16px', color: '#9ca3af', lineHeight: '1.6', marginBottom: '24px'}}>
          Oracle Degen is optimized for desktop browsers. Please visit us on your computer for the best experience.
        </p>
        <p style={{fontSize: '14px', color: '#a78bfa', fontWeight: 600}}>
          oracledegen.fun
        </p>
      </div>
    </div>
  );
}
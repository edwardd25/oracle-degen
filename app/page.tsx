'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';
import { mockMarkets } from '@/lib/mockData';
import MarketCard from '@/components/MarketCard';

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center mb-16">
  <div className="flex items-center gap-8">
    <div className="flex items-center gap-3">
      <Image 
        src="/logo.png" 
        alt="Oracle Degen Logo" 
        width={50} 
        height={50}
        className="rounded-lg"
      />
      <h1 className="text-3xl font-bold tracking-tight">Oracle Degen</h1>
    </div>
    
    {/* Navigation Menu */}
    <div className="flex items-center gap-8" style={{marginLeft: '100px'}}>
      <a href="https://tally.so/r/mRp9vP" target="_blank" rel="noopener noreferrer"
        style={{
          fontSize: '14px', 
          color: 'white', 
          textDecoration: 'none', 
          fontWeight: 600,
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4b5fd'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#a78bfa'}>
        Join Testnet Waitlist
      </a>
    </div>
  </div>
  <WalletMultiButton className="!h-10 !text-sm" />
</nav>

<div className="text-center max-w-4xl mx-auto mb-20">
  <h2 style={{fontSize: '70px', marginBottom: '8px'}} className="font-bold text-white tracking-tight leading-tight">
    Predict. Bet. Win.
  </h2>
  
  <p className="text-base text-gray-200 mb-12 font-normal">
    Solana&apos;s First Memecoin Prediction Market
  </p>
</div>
        
        {/* Markets Section */}
        <div className="max-w-7xl mx-auto mb-32">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
            <h3 className="text-2xl font-bold">🔥 Trending Markets</h3>
            <button style={{color: '#a78bfa', fontSize: '14px', cursor: 'pointer', background: 'none', border: 'none'}}>
              View All →
            </button>
          </div>
  
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '80px'
          }}>
            {mockMarkets.map(market => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {!publicKey && (
          <div className="max-w-7xl mx-auto px-4">
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '48px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              backdropFilter: 'blur(8px)'
            }}>
              <h3 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>Ready to Start Predicting?</h3>
              <p style={{fontSize: '16px', marginBottom: '24px', opacity: 0.9, color: '#e5e7eb'}}>
                Connect your Solana wallet and place your first bet in seconds
              </p>
              <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !h-12 !text-base !font-semibold" />
            </div>
          </div>
        )}
      </div>
  
      
        {/* Footer */}
<footer style={{
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: '80px',
  paddingTop: '40px',
  paddingBottom: '40px'
}}>
  <div className="max-w-7xl mx-auto px-4">
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '40px'
    }}>
      {/* Brand */}
      <div>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
          <Image 
            src="/logo.png" 
            alt="Oracle Degen" 
            width={32} 
            height={32}
            className="rounded-lg"
          />
          <h3 style={{fontSize: '20px', fontWeight: 700}}>Oracle Degen</h3>
        </div>
        <p style={{fontSize: '14px', color: '#9ca3af', lineHeight: '1.6'}}>
          Solana&apos;s first memecoin prediction market. Bet on the future with transparent odds.
        </p>
      </div>

      {/* Social Links */}
      <div>
        <h4 style={{fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: '#d1d5db'}}>
          Community
        </h4>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <a 
            href="https://x.com/OracleDegenSol" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter/X
          </a>
          <a href="https://tally.so/r/mRp9vP" target="_blank" rel="noopener noreferrer">
            Docs (Coming Soon)
          </a>
        </div>
      </div>

      {/* Token Contract */}
      <div>
        <h4 style={{fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: '#d1d5db'}}>
          Token Contract
        </h4>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <input
            type="text"
            value="ODEGEN-Contract"
            readOnly
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#9ca3af',
              fontSize: '12px',
              fontFamily: 'monospace',
              outline: 'none'
            }}
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText('YOUR_TOKEN_CONTRACT_ADDRESS');
              alert('Contract address copied!');
            }}
            style={{
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '11px',
              color: '#a78bfa',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)';
            }}
          >
            Copy
          </button>
        </div>
        <p style={{fontSize: '11px', color: '#6b7280', marginTop: '8px'}}>
          Token launching soon
        </p>
      </div>
    </div>

    {/* Copyright */}
    <div style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '24px',
      textAlign: 'center'
    }}>
      <p style={{fontSize: '12px', color: '#6b7280'}}>
        © 2025 Oracle Degen. Built on Solana.
      </p>
      <p style={{fontSize: '11px', color: '#4b5563', marginTop: '8px'}}>
        ⚠️ Demo Version - Smart contracts under development
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function DocsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
              <Image 
                src="/logo.png" 
                alt="Oracle Degen Logo" 
                width={50} 
                height={50}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold tracking-tight">Oracle Degen</h1>
            </div>
            
            <div className="flex items-center gap-8" style={{marginLeft: '100px'}}>
              <a href="/" style={{fontSize: '14px', color: '#d1d5db', textDecoration: 'none', transition: 'color 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                Markets
              </a>
              <a href="https://tally.so/r/mRp9vP" target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: '14px', 
                  color: '#a78bfa',
                  textDecoration: 'none', 
                  fontWeight: 600,
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5fd'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#a78bfa'}>
                Join Testnet Waitlist
              </a>
              <a href="/docs" style={{fontSize: '14px', color: '#fff', textDecoration: 'none', fontWeight: 600}}>
                Docs
              </a>
            </div>
          </div>
          <WalletMultiButton className="!h-10 !text-sm" />
        </nav>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h1 style={{fontSize: '48px', fontWeight: 700, marginBottom: '16px'}}>Documentation</h1>
          <p style={{fontSize: '18px', color: '#9ca3af', marginBottom: '48px'}}>
            Everything you need to know about Oracle Degen
          </p>

          {/* What is Oracle Degen */}
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>What is Oracle Degen?</h2>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}>
              <p style={{fontSize: '16px', lineHeight: '1.8', color: '#d1d5db', marginBottom: '16px'}}>
                Oracle Degen is Solana's first prediction market specifically designed for memecoin events. 
                Users can bet on outcomes of various events in the Solana memecoin ecosystem using SOL.
              </p>
              <p style={{fontSize: '16px', lineHeight: '1.8', color: '#d1d5db'}}>
                Our platform uses an Automated Market Maker (AMM) system to provide transparent and fair odds, 
                ensuring that the platform never bets against users.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>How It Works</h2>
            <div style={{display: 'grid', gap: '16px'}}>
              {[
                {
                  step: '1',
                  title: 'Connect Wallet',
                  desc: 'Connect your Solana wallet (Phantom, Solflare, etc.) to get started.'
                },
                {
                  step: '2',
                  title: 'Browse Markets',
                  desc: 'Explore active prediction markets about memecoin prices, listings, and events.'
                },
                {
                  step: '3',
                  title: 'Place Your Bet',
                  desc: 'Choose YES or NO, enter your bet amount in SOL, and confirm the transaction.'
                },
                {
                  step: '4',
                  title: 'Claim Winnings',
                  desc: 'After market resolution, claim your winnings directly to your wallet (3% platform fee applies).'
                }
              ].map((item) => (
                <div key={item.step} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  gap: '16px'
                }}>
                  <div style={{
                    backgroundColor: '#7c3aed',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{fontSize: '18px', fontWeight: 600, marginBottom: '8px'}}>{item.title}</h3>
                    <p style={{fontSize: '14px', color: '#9ca3af', lineHeight: '1.6'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Market Types */}
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>Market Types</h2>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  { type: 'Price Predictions', desc: 'Bet on whether a token will reach a specific price' },
                  { type: 'Market Cap', desc: 'Predict if a token will achieve certain market cap milestones' },
                  { type: 'Listings', desc: 'Bet on exchange listings for memecoin projects' },
                  { type: 'Ecosystem Events', desc: 'Predict outcomes of Solana ecosystem developments' },
                  { type: 'Social Events', desc: 'Bet on influencer actions and community events' }
                ].map((item, i) => (
                  <li key={i} style={{
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: i < 4 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                  }}>
                    <strong style={{fontSize: '16px', color: '#fff'}}>{item.type}:</strong>
                    <span style={{fontSize: '16px', color: '#9ca3af', marginLeft: '8px'}}>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Fees */}
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>Fees</h2>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}>
              <p style={{fontSize: '16px', lineHeight: '1.8', color: '#d1d5db', marginBottom: '16px'}}>
                Oracle Degen charges a <strong>3% platform fee</strong> on winning payouts.
              </p>
              <p style={{fontSize: '16px', lineHeight: '1.8', color: '#d1d5db'}}>
                Fee distribution: 50% supports platform operations, 50% rewards ORACLE token stakers.
              </p>
            </div>
          </section>

          {/* Roadmap */}
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>Roadmap</h2>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '24px',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {[
                  { phase: 'Q4 2025', items: ['Testnet Launch', 'Community Building', 'ORACLE Token Launch'] },
                  { phase: 'Q1 2026', items: ['Mainnet Launch', 'Smart Contract Audit', 'Partnership Announcements'] },
                  { phase: 'Q2 2026', items: ['Mobile App', 'Advanced Analytics', 'DAO Governance'] }
                ].map((phase) => (
                  <div key={phase.phase}>
                    <h3 style={{fontSize: '18px', fontWeight: 600, color: '#a78bfa', marginBottom: '12px'}}>
                      {phase.phase}
                    </h3>
                    <ul style={{listStyle: 'disc', paddingLeft: '24px', color: '#9ca3af'}}>
                      {phase.items.map((item, i) => (
                        <li key={i} style={{fontSize: '15px', marginBottom: '8px'}}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section style={{marginBottom: '48px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 700, marginBottom: '16px'}}>FAQ</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {[
                {
                  q: 'Is Oracle Degen live on mainnet?',
                  a: 'Not yet. We are currently in development and will launch on testnet first for community testing.'
                },
                {
                  q: 'How are markets resolved?',
                  a: 'Markets are resolved manually by the Oracle Degen team based on verifiable data from trusted sources like CoinGecko, official announcements, and blockchain data.'
                },
                {
                  q: 'What happens if I lose a bet?',
                  a: 'If your prediction is incorrect, you lose the SOL you bet. The funds go to winners proportionally based on their bets.'
                },
                {
                  q: 'Can I cancel my bet?',
                  a: 'No. Once a bet is placed and the transaction is confirmed on-chain, it cannot be canceled.'
                }
              ].map((faq, i) => (
                <div key={i} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '20px',
                  backdropFilter: 'blur(8px)'
                }}>
                  <h3 style={{fontSize: '16px', fontWeight: 600, marginBottom: '8px'}}>{faq.q}</h3>
                  <p style={{fontSize: '14px', color: '#9ca3af', lineHeight: '1.6'}}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section style={{
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            backdropFilter: 'blur(8px)'
          }}>
            <h2 style={{fontSize: '24px', fontWeight: 700, marginBottom: '12px'}}>Have Questions?</h2>
            <p style={{fontSize: '16px', color: '#d1d5db', marginBottom: '20px'}}>
              Join our community or reach out on Twitter/X
            </p>
            <a 
              href="https://tally.so/r/mRp9vP" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                backgroundColor: '#7c3aed',
                borderRadius: '8px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              Join Testnet Waitlist
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
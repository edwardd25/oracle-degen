'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { mockMarkets, calculateOdds, calculatePayout } from '@/lib/mockData';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function MarketDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { publicKey } = useWallet();
  
  const market = mockMarkets.find(m => m.id === params.id);
  const [betSide, setBetSide] = useState<'yes' | 'no'>('yes');
  const [betAmount, setBetAmount] = useState('');
  const [isPlacingBet, setIsPlacingBet] = useState(false);

  if (!market) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 text-white flex items-center justify-center">
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '24px', fontWeight: 700, marginBottom: '16px'}}>Market not found</h2>
          <button 
            onClick={() => router.push('/')}
            style={{
              backgroundColor: '#7c3aed',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const odds = calculateOdds(market.yesPool, market.noPool);
  const totalPool = market.yesPool + market.noPool;
  const amount = parseFloat(betAmount) || 0;
  const currentPool = betSide === 'yes' ? market.yesPool : market.noPool;
  const estimatedPayout = amount > 0 ? calculatePayout(amount, currentPool, totalPool + amount) : 0;

  const handlePlaceBet = async () => {
    if (!publicKey) {
      alert('Please connect your wallet first!');
      return;
    }

    if (amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setIsPlacingBet(true);
    
    // Simulate transaction
    setTimeout(() => {
      alert(`✅ Bet Placed!\n\nSide: ${betSide.toUpperCase()}\nAmount: ${amount} SOL\nEstimated Payout: ${estimatedPayout.toFixed(2)} SOL\n\n(This is a demo - no real transaction)`);
      setIsPlacingBet(false);
      setBetAmount('');
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <button 
            onClick={() => router.push('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#d1d5db',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ← Back to Markets
          </button>
          <WalletMultiButton className="!h-10 !text-sm" />
        </nav>

        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px', marginTop: '24px'}}>
          {/* Left Column - Market Info */}
          <div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '24px',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
                {market.imageUrl.startsWith('/') ? (
  <Image 
    src={market.imageUrl} 
    alt={market.category}
    width={48}
    height={48}
    className="rounded-full"
  />
) : (
  <span style={{fontSize: '48px'}}>{market.imageUrl}</span>
)}
                <div style={{flex: 1}}>
                  <span style={{fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em'}}>{market.category}</span>
                  <h1 style={{fontSize: '28px', fontWeight: 700, marginTop: '8px', marginBottom: '16px'}}>{market.question}</h1>
                  <p style={{color: '#d1d5db', fontSize: '14px', lineHeight: '1.6'}}>{market.description}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <div style={{fontSize: '12px', color: '#9ca3af', marginBottom: '4px'}}>💰 Total Pool</div>
                  <div style={{fontSize: '20px', fontWeight: 700}}>{totalPool.toFixed(2)} SOL</div>
                </div>
                <div>
                  <div style={{fontSize: '12px', color: '#9ca3af', marginBottom: '4px'}}>📊 Total Bets</div>
                  <div style={{fontSize: '20px', fontWeight: 700}}>247</div>
                </div>
                <div>
                  <div style={{fontSize: '12px', color: '#9ca3af', marginBottom: '4px'}}>⏰ Ends In</div>
                  <div style={{fontSize: '20px', fontWeight: 700}}>
                    {Math.ceil((market.endTime.getTime() - Date.now()) / (1000 * 60 * 60 * 24))}d
                  </div>
                </div>
              </div>
            </div>

            {/* Current Odds */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(8px)',
              marginBottom: '24px'
            }}>
              <h2 style={{fontSize: '18px', fontWeight: 700, marginBottom: '16px'}}>Current Odds</h2>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                <div style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '2px solid rgb(34, 197, 94)',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '12px', color: '#9ca3af', marginBottom: '8px'}}>YES</div>
                  <div style={{fontSize: '40px', fontWeight: 700, color: '#4ade80', marginBottom: '8px'}}>{odds.yes}%</div>
                  <div style={{fontSize: '12px', color: '#9ca3af'}}>{market.yesPool.toFixed(2)} SOL pooled</div>
                </div>
                <div style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '2px solid rgb(239, 68, 68)',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '12px', color: '#9ca3af', marginBottom: '8px'}}>NO</div>
                  <div style={{fontSize: '40px', fontWeight: 700, color: '#f87171', marginBottom: '8px'}}>{odds.no}%</div>
                  <div style={{fontSize: '12px', color: '#9ca3af'}}>{market.noPool.toFixed(2)} SOL pooled</div>
                </div>
              </div>
            </div>
          </div>

          {/* ADD THIS: Betting Activity Chart */}
<div style={{
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '32px',
  backdropFilter: 'blur(8px)'
}}>
  <h2 style={{fontSize: '18px', fontWeight: 700, marginBottom: '16px'}}>Betting Activity</h2>
  
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={[
      { time: '00:00', yes: 45, no: 55 },
      { time: '04:00', yes: 48, no: 52 },
      { time: '08:00', yes: 52, no: 48 },
      { time: '12:00', yes: 55, no: 45 },
      { time: '16:00', yes: 57, no: 43 },
      { time: '20:00', yes: parseFloat(odds.yes), no: parseFloat(odds.no) },
    ]}>
      <XAxis 
        dataKey="time" 
        stroke="#9ca3af" 
        style={{fontSize: '12px'}}
      />
      <YAxis 
        stroke="#9ca3af" 
        style={{fontSize: '12px'}}
        domain={[0, 100]}
      />
      <Tooltip 
        contentStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          fontSize: '12px'
        }}
      />
      <Line 
        type="monotone" 
        dataKey="yes" 
        stroke="#4ade80" 
        strokeWidth={2}
        dot={false}
        name="YES %"
      />
      <Line 
        type="monotone" 
        dataKey="no" 
        stroke="#f87171" 
        strokeWidth={2}
        dot={false}
        name="NO %"
      />
    </LineChart>
  </ResponsiveContainer>
  
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  }}>
    <div>
      <div style={{fontSize: '11px', color: '#9ca3af', marginBottom: '4px'}}>24h Volume</div>
      <div style={{fontSize: '18px', fontWeight: 700}}>{totalPool.toFixed(2)} SOL</div>
    </div>
    <div>
      <div style={{fontSize: '11px', color: '#9ca3af', marginBottom: '4px'}}>Total Traders</div>
      <div style={{fontSize: '18px', fontWeight: 700}}>247</div>
    </div>
  </div>
</div>

          {/* Right Column - Betting Interface */}
          <div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '24px',
              backdropFilter: 'blur(8px)',
              position: 'sticky',
              top: '32px'
            }}>
              <h2 style={{fontSize: '18px', fontWeight: 700, marginBottom: '24px'}}>Place Your Bet</h2>

              {/* Side Selection */}
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px'}}>
                <button
                  onClick={() => setBetSide('yes')}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: betSide === 'yes' ? 'rgb(34, 197, 94)' : 'rgba(107, 114, 128, 0.5)',
                    color: 'white',
                    transition: 'all 0.2s'
                  }}
                >
                  YES {odds.yes}%
                </button>
                <button
                  onClick={() => setBetSide('no')}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: betSide === 'no' ? 'rgb(239, 68, 68)' : 'rgba(107, 114, 128, 0.5)',
                    color: 'white',
                    transition: 'all 0.2s'
                  }}
                >
                  NO {odds.no}%
                </button>
              </div>

              {/* Amount Input */}
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '8px'}}>Amount (SOL)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  placeholder="0.00"
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(107, 114, 128, 0.3)',
                    border: '1px solid rgba(156, 163, 175, 0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'white',
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                />
                <div style={{display: 'flex', gap: '8px', marginTop: '8px'}}>
                  {[0.1, 0.5, 1, 5].map(val => (
                    <button
                      key={val}
                      onClick={() => setBetAmount(val.toString())}
                      style={{
                        flex: 1,
                        backgroundColor: 'rgba(107, 114, 128, 0.3)',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '8px',
                        fontSize: '12px',
                        color: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      {val} SOL
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Payout */}
              {amount > 0 && (
                <div style={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px'
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                    <span style={{fontSize: '12px', color: '#9ca3af'}}>Potential Payout</span>
                    <span style={{fontSize: '18px', fontWeight: 700, color: '#a78bfa'}}>
                      {estimatedPayout.toFixed(2)} SOL
                    </span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '12px'}}>
                    <span style={{color: '#9ca3af'}}>Potential Profit</span>
                    <span style={{color: '#4ade80', fontWeight: 600}}>
                      +{(estimatedPayout - amount).toFixed(2)} SOL
                    </span>
                  </div>
                </div>
              )}

              {/* Place Bet Button */}
              {publicKey ? (
                <button
                  onClick={handlePlaceBet}
                  disabled={isPlacingBet || amount <= 0}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '16px',
                    border: 'none',
                    cursor: isPlacingBet || amount <= 0 ? 'not-allowed' : 'pointer',
                    backgroundColor: isPlacingBet || amount <= 0 
                      ? 'rgba(107, 114, 128, 0.5)' 
                      : betSide === 'yes'
                      ? 'rgb(34, 197, 94)'
                      : 'rgb(239, 68, 68)',
                    color: isPlacingBet || amount <= 0 ? '#6b7280' : 'white',
                    transition: 'all 0.2s'
                  }}
                >
                  {isPlacingBet ? 'Placing Bet...' : `Bet ${betSide.toUpperCase()}`}
                </button>
              ) : (
                <WalletMultiButton className="!w-full !py-4 !rounded-xl !font-bold !text-base" />
              )}

              <p style={{fontSize: '10px', color: '#6b7280', textAlign: 'center', marginTop: '16px'}}>
                3% platform fee • Winnings claimable after market resolves
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
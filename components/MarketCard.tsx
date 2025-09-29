'use client';

import { Market, calculateOdds } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function MarketCard({ market }: { market: Market }) {
  const odds = calculateOdds(market.yesPool, market.noPool);
  const totalPool = market.yesPool + market.noPool;
  const timeLeft = Math.ceil((market.endTime.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <Link href={`/market/${market.id}`} style={{textDecoration: 'none'}}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(8px)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      >
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            {market.imageUrl.startsWith('/') ? (
              <Image 
                src={market.imageUrl} 
                alt={market.category}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <span style={{fontSize: '32px'}}>{market.imageUrl}</span>
            )}
            <div>
              <span style={{fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em'}}>{market.category}</span>
              <h3 style={{fontSize: '16px', fontWeight: 600, marginTop: '4px', color: 'white'}}>{market.question}</h3>
            </div>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px'}}>
          <div style={{
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '10px', color: '#9ca3af', marginBottom: '4px'}}>YES</div>
            <div style={{fontSize: '24px', fontWeight: 700, color: '#4ade80'}}>{odds.yes}%</div>
            <div style={{fontSize: '10px', color: '#6b7280'}}>{market.yesPool.toFixed(2)} SOL</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '12px',
            padding: '12px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '10px', color: '#9ca3af', marginBottom: '4px'}}>NO</div>
            <div style={{fontSize: '24px', fontWeight: 700, color: '#f87171'}}>{odds.no}%</div>
            <div style={{fontSize: '10px', color: '#6b7280'}}>{market.noPool.toFixed(2)} SOL</div>
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px'}}>
          <div style={{color: '#9ca3af'}}>
            Total Pool: <span style={{color: 'white', fontWeight: 600}}>{totalPool.toFixed(2)} SOL</span>
          </div>
          <div style={{color: timeLeft > 7 ? '#9ca3af' : '#fbbf24'}}>
            ⏱ {timeLeft}d left
          </div>
        </div>
      </div>
    </Link>
  );
}
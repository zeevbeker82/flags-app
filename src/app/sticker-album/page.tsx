'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { countries } from '@/data/countries';
import { players, clubs } from '@/data/football';

type Tab = 'countries' | 'players' | 'clubs';

export default function StickerAlbumPage() {
  const { progress, loaded } = useProgress();
  const [tab, setTab] = useState<Tab>('countries');

  if (!loaded) return <div className="text-center py-20 text-gray-400">טוען...</div>;

  const collectedCountries = progress.collectedCountries || [];
  const collectedPlayers = progress.collectedPlayers || [];
  const collectedClubs = progress.collectedClubs || [];

  const tabs: { id: Tab; label: string; emoji: string; collected: number; total: number }[] = [
    { id: 'countries', label: 'דגלים', emoji: '🌍', collected: collectedCountries.length, total: countries.length },
    { id: 'players',  label: 'שחקנים', emoji: '⭐', collected: collectedPlayers.length,  total: players.length },
    { id: 'clubs',    label: 'מועדונים', emoji: '🏟️', collected: collectedClubs.length, total: clubs.length },
  ];

  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      {/* כותרת */}
      <div className="flex items-center gap-3">
        <Link href="/" className="text-blue-500 font-bold text-sm">← בית</Link>
        <h1 className="text-3xl font-black text-gray-800">📘 אלבום מדבקות</h1>
      </div>

      {/* טאבים */}
      <div className="grid grid-cols-3 gap-3">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`p-4 rounded-2xl border-2 text-center transition-all ${
              tab === t.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-blue-200'
            }`}
          >
            <div className="text-2xl mb-1">{t.emoji}</div>
            <div className="font-bold text-sm text-gray-800">{t.label}</div>
            <div className={`text-xs font-bold mt-1 ${t.collected === t.total ? 'text-green-600' : 'text-gray-400'}`}>
              {t.collected}/{t.total}
            </div>
          </button>
        ))}
      </div>

      {/* פרוגרס בר */}
      {(() => {
        const active = tabs.find(t => t.id === tab)!;
        const pct = active.total > 0 ? Math.round((active.collected / active.total) * 100) : 0;
        return (
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
              <span>אספת {active.collected} מתוך {active.total}</span>
              <span className={pct === 100 ? 'text-green-600 font-black' : 'text-blue-600'}>{pct}%</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: pct === 100 ? '#16a34a' : '#3b82f6' }}
              />
            </div>
            {pct === 100 && (
              <p className="text-center text-green-600 font-black text-sm mt-2 animate-bounce-in">🏆 אספת הכל! אלוף!</p>
            )}
          </div>
        );
      })()}

      {/* גריד מדבקות */}
      {tab === 'countries' && (
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {countries.map(country => {
              const isCollected = collectedCountries.includes(country.id);
              return (
                <div
                  key={country.id}
                  className="flex flex-col items-center gap-0.5"
                  title={country.nameHebrew}
                >
                  <div className={`relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                    isCollected ? 'border-green-400 shadow-md shadow-green-200' : 'border-gray-200'
                  }`}>
                    <Image
                      src={country.flagUrl}
                      alt={country.nameHebrew}
                      fill
                      style={{ objectFit: 'cover', filter: isCollected ? 'none' : 'grayscale(1) opacity(0.3)' }}
                    />
                    {!isCollected && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-xs font-black">?</span>
                      </div>
                    )}
                  </div>
                  {isCollected && (
                    <span className="text-[9px] text-gray-500 text-center leading-tight max-w-12 truncate">
                      {country.nameHebrew}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {tab === 'players' && (
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {players.map(player => {
              const isCollected = collectedPlayers.includes(player.id);
              return (
                <div
                  key={player.id}
                  className={`rounded-2xl overflow-hidden border-2 transition-all ${
                    isCollected ? 'border-yellow-400 shadow-md shadow-yellow-100' : 'border-gray-200'
                  }`}
                >
                  {player.photoUrl && isCollected ? (
                    <div className="relative h-20">
                      <Image
                        src={player.photoUrl}
                        alt={player.nameHebrew}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                  ) : (
                    <div
                      className="h-20 flex items-center justify-center"
                      style={{
                        background: isCollected
                          ? `linear-gradient(135deg, ${player.jerseyColor}, ${player.jerseySecondaryColor})`
                          : '#f3f4f6',
                        filter: isCollected ? 'none' : 'grayscale(1)',
                      }}
                    >
                      <span className="text-3xl">{isCollected ? player.flagEmoji : '❓'}</span>
                    </div>
                  )}
                  <div className={`p-2 text-center text-xs font-bold ${isCollected ? 'text-gray-700' : 'text-gray-400'}`}>
                    {isCollected ? player.nameHebrew : '???'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {tab === 'clubs' && (
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {clubs.map(club => {
              const isCollected = collectedClubs.includes(club.id);
              return (
                <div
                  key={club.id}
                  className={`rounded-2xl overflow-hidden border-2 p-3 flex flex-col items-center gap-2 transition-all ${
                    isCollected ? 'border-green-400 shadow-md shadow-green-100' : 'border-gray-200'
                  }`}
                >
                  <div className="relative w-14 h-14">
                    {isCollected ? (
                      <Image
                        src={club.logoUrl}
                        alt={club.nameHebrew}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    ) : (
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black"
                        style={{ background: '#f3f4f6', color: '#d1d5db' }}
                      >
                        ?
                      </div>
                    )}
                  </div>
                  <span className={`text-xs font-bold text-center leading-tight ${isCollected ? 'text-gray-700' : 'text-gray-400'}`}>
                    {isCollected ? club.nameHebrew : '???'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* טיפ */}
      <div className="bg-blue-50 rounded-2xl p-4 text-center text-sm text-blue-600">
        💡 עני נכון בחידוני הדגלים, הכדורגל וחיות כדי לאסוף מדבקות!
      </div>
    </div>
  );
}

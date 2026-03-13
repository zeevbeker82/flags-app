'use client';
import { useState, useEffect, useCallback } from 'react';
import { MemoryCard, Country } from '@/types';
import { shuffle } from '@/utils/shuffle';

interface MemoryBoardProps {
  countries: Country[];
  onComplete: (moves: number, time: number) => void;
}

function createCards(countries: Country[]): MemoryCard[] {
  const cards: MemoryCard[] = [];
  countries.forEach(c => {
    cards.push({ id: `${c.id}-flag`, countryId: c.id, type: 'flag', country: c, isFlipped: false, isMatched: false });
    cards.push({ id: `${c.id}-name`, countryId: c.id, type: 'name', country: c, isFlipped: false, isMatched: false });
  });
  return shuffle(cards);
}

export default function MemoryBoard({ countries, onComplete }: MemoryBoardProps) {
  const [cards, setCards] = useState<MemoryCard[]>(() => createCards(countries));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(t);
  }, [started]);

  useEffect(() => {
    if (matched === countries.length && started) {
      onComplete(moves, time);
    }
  }, [matched, countries.length, moves, time, started, onComplete]);

  const handleFlip = useCallback((cardId: string) => {
    if (locked) return;
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    if (!started) setStarted(true);

    if (flipped.length === 1) {
      const firstCard = cards.find(c => c.id === flipped[0])!;
      const newFlipped = [...flipped, cardId];
      setFlipped(newFlipped);
      setMoves(m => m + 1);
      setCards(prev => prev.map(c => c.id === cardId ? { ...c, isFlipped: true } : c));

      if (firstCard.countryId === card.countryId) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.countryId === card.countryId ? { ...c, isMatched: true } : c
          ));
          setMatched(m => m + 1);
          setFlipped([]);
        }, 600);
      } else {
        setLocked(true);
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c
          ));
          setFlipped([]);
          setLocked(false);
        }, 1200);
      }
    } else {
      setFlipped([cardId]);
      setCards(prev => prev.map(c => c.id === cardId ? { ...c, isFlipped: true } : c));
    }
  }, [cards, flipped, locked, started]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div>
      <div className="flex justify-center gap-8 mb-6 text-center">
        <div className="bg-blue-100 rounded-xl p-3 min-w-20">
          <p className="text-2xl font-bold text-blue-700">{moves}</p>
          <p className="text-xs text-blue-500">צעדים</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-3 min-w-20">
          <p className="text-2xl font-bold text-purple-700">{formatTime(time)}</p>
          <p className="text-xs text-purple-500">זמן</p>
        </div>
        <div className="bg-green-100 rounded-xl p-3 min-w-20">
          <p className="text-2xl font-bold text-green-700">{matched}/{countries.length}</p>
          <p className="text-xs text-green-500">זוגות</p>
        </div>
      </div>

      <div className={`grid gap-3 ${countries.length <= 4 ? 'grid-cols-4' : countries.length <= 8 ? 'grid-cols-4' : 'grid-cols-6'}`}>
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={`aspect-[3/2] rounded-xl transition-all duration-300 border-2 overflow-hidden ${
              card.isMatched
                ? 'border-green-400 bg-green-50 opacity-70'
                : card.isFlipped
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-200 bg-gradient-to-br from-blue-500 to-purple-600 cursor-pointer hover:scale-105'
            }`}
          >
            {card.isFlipped || card.isMatched ? (
              card.type === 'flag' ? (
                <img src={card.country.flagUrl} alt={card.country.nameHebrew} className="w-full h-full object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full p-1">
                  <span className="text-xs font-bold text-gray-800 text-center">{card.country.nameHebrew}</span>
                </div>
              )
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-2xl">🌍</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

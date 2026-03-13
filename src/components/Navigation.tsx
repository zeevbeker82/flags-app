'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'בית', icon: '🏠' },
  { href: '/learn', label: 'למידה', icon: '📚' },
  { href: '/quiz', label: 'תרגול', icon: '🎯' },
  { href: '/memory', label: 'משחק זיכרון', icon: '🧠' },
  { href: '/speed', label: 'מבחן מהיר', icon: '⚡' },
  { href: '/progress', label: 'התקדמות', icon: '📊' },
  { href: '/achievements', label: 'הישגים', icon: '🏆' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">🌍 דגלי העולם</Link>
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden md:block">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

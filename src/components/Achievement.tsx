interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
}

export default function AchievementCard({ icon, title, description, unlocked }: AchievementCardProps) {
  return (
    <div className={`rounded-2xl p-4 flex items-center gap-4 transition-all ${
      unlocked ? 'bg-yellow-50 border-2 border-yellow-300 shadow-md' : 'bg-gray-100 border-2 border-gray-200 opacity-60'
    }`}>
      <div className={`text-4xl ${!unlocked ? 'grayscale' : ''}`}>{icon}</div>
      <div>
        <p className={`font-bold text-lg ${unlocked ? 'text-yellow-800' : 'text-gray-500'}`}>{title}</p>
        <p className={`text-sm ${unlocked ? 'text-yellow-600' : 'text-gray-400'}`}>{description}</p>
        {unlocked && <p className="text-xs text-green-600 mt-1">✓ הושג!</p>}
      </div>
    </div>
  );
}

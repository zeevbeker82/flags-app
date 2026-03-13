interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  label?: string;
  showPercent?: boolean;
}

export default function ProgressBar({ value, max, color = '#3B82F6', label, showPercent = true }: ProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          {label && <span>{label}</span>}
          {showPercent && <span>{pct}%</span>}
        </div>
      )}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <div className="text-xs text-gray-400 mt-1 text-center">{value} / {max}</div>
    </div>
  );
}

interface FunFactPopupProps {
  fact: string;
  visible: boolean;
}

export default function FunFactPopup({ fact, visible }: FunFactPopupProps) {
  if (!visible || !fact) return null;
  return (
    <div className="mt-3 p-3 bg-blue-50 border-2 border-blue-200 rounded-2xl animate-bounce-in text-sm text-blue-700 text-center leading-relaxed">
      <span className="font-bold">💡 ידעת? </span>{fact}
    </div>
  );
}

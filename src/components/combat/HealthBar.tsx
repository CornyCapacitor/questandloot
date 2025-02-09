export const HealthBar = ({ currentHP, maxHP }: { currentHP: number, maxHP: number }) => {
  const healthPercentage = (currentHP / maxHP) * 100;

  return (
    <div className="w-full max-w-[300px] bg-gray-300 rounded-sm h-8 relative overflow-hidden border border-gray-500">
      <div style={{ width: `${healthPercentage}%` }} className={`absolute h-full bg-green-500 transition-all duration-300`}
      ></div>
      <div className="absolute w-full h-full flex items-center justify-center text-white font-bold">{currentHP} / {maxHP}</div>
    </div>
  );
};

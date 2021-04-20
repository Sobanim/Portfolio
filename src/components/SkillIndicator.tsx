const MAX_SKILL_LEVEL = 10;

type Props = {
  skilllevel: number;
};

function SkillIndikator({ skilllevel }: Props) {
  return (
    <div className="grid grid-cols-10 gap-x-0.5 sm:gap-x-1">
      {[...Array(MAX_SKILL_LEVEL).keys()].map((index) => {
        const isFilled = index < skilllevel;
        const color = isFilled ? 'bg-pink-500' : 'bg-gray-400';
        return <div key={index} className={`${color} h-2`} />;
      })}
    </div>
  );
}

export default SkillIndikator;

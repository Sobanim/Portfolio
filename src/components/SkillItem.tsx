import { Skill } from '../types';
import SkillIndikator from './SkillIndicator';

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <li
      className="flex flex-col w-full py-4 lg:py-3 lg:pr-10 lg:w-1/3"
      key={skill.name}
    >
      <h3 className="font-medium leading-10">{skill.name}</h3>
      <SkillIndikator skilllevel={skill.level} />
    </li>
  );
}

export default SkillItem;

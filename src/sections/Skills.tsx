import SkillItem from '../components/SkillItem';
import Subtitle from '../components/Subtitle';
import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <div className="my-16 p-6  border-2 border-pink-500">
      <Subtitle subtitle="My skillset" />
      <ul className="mt-2 lg:flex lg:flex-wrap">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

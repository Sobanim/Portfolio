import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <div className="my-16 p-8  border-2 border-pink-500">
      <h2 className="text-4xl font-bold text-pink-500 pb-3">My skillset</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

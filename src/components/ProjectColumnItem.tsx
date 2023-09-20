import { Project } from '../types';
import Link from 'next/link';

type Props = {
  alignment: 'left' | 'right';
  project: Project;
};

function ProjectColumnItem({ alignment, project }: Props) {
  const ClassNames =
    alignment === 'left'
      ? 'lg:text-left lg:ml-16 lg:mt-20'
      : 'lg:text-right lg:mr-16 lg:mb-20';
  return (
    <div className={`${ClassNames} text-center mb-8`}>
      <Link
        href={`/projects/${project.id}`}
        className="font-bold text-lg text-customGreen leading-10"
      >
        {project.name}
      </Link>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectColumnItem;

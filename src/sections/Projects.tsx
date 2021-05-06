import ProjectColumn from '../components/ProjectColumn';
import ProjectColumnItem from '../components/ProjectColumnItem';
import Subtitle from '../components/Subtitle';
import { Project } from '../types';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const leftColumn = projects.filter((_project, index) => index % 2 === 0);
  const rightColumn = projects.filter((_project, index) => index % 2 === 1);

  return (
    <div>
      <div className="text-center my-6">
        <Subtitle subtitle="Past project" />
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <ProjectColumn>
          {leftColumn.map((item) => (
            <ProjectColumnItem alignment="right" project={item} key={item.id} />
          ))}
        </ProjectColumn>
        <ProjectColumn>
          {rightColumn.map((item) => (
            <ProjectColumnItem alignment="left" project={item} key={item.id} />
          ))}
        </ProjectColumn>
      </div>
    </div>
  );
}

export default Projects;

import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import Layout from '../../components/Layout';
import Subtitle from '../../components/Subtitle';
import { Project } from '../../types';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title={`Project | ${projectData.name}`}>
      <h1>{projectData.name}</h1>
      <Subtitle subtitle="Subtitle" />

      <p>{projectData.description}</p>

      <Subtitle subtitle="Project showcase" />
      <div>
        {projectData.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = getProjectData(params?.id as string);

  return {
    props: {
      projectData,
    },
  };
};

export default ProjectDetail;

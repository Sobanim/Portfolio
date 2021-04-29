import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import InfoBar from '../../components/InfoBar';
import Layout from '../../components/Layout';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { Project } from '../../types';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title={`Project | ${projectData.name}`}>
      <Title title={projectData.name} />

      <p className="my-4 text-lg leading-6">{projectData.description}</p>

      <Subtitle subtitle="Project showcase" />

      <InfoBar
        infos={projectData.technologies.map((technology) => ({
          label: technology,
        }))}
      />

      <div className="flex flex-col lg:flex-row">
        {projectData.images.map((image, index) => (
          <div key={index} className="relative w-full my-2 lg:mr-2">
            <Image
              src={image}
              layout="responsive"
              width="1920px"
              height="1080px"
            />
          </div>
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

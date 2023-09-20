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

      <div className="flex justify-between">
        <InfoBar
          infos={projectData.technologies.map((technology) => ({
            label: technology,
          }))}
        />
        <div>
          <a
            href={projectData.github}
            target="_blank"
            className="text-customGreen hover:underline"
            rel="noreferrer"
          >
            <i>Source Code</i>
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {projectData.images.map((image, index) => (
          <div key={index} className="relative w-full my-2 lg:mr-2">
            <Image
              src={image}
              decoding="async"
              layout="responsive"
              width="1920"
              height="1080"
              alt={projectData.name}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-16 ">
        <a
          href={projectData.link}
          target="_blank"
          className="inline-block text-customWhite bg-customGreen p-4 rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
          rel="noreferrer"
        >
          View the project
        </a>
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

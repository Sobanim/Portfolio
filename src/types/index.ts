export type Project = {
  id: string;
  name: string;
  position: string;
  company: string;
  description: string;
  timeStart: string;
  timeEnd: string;
  technologies: string[];
  images: string[];
  link: string;
  github: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Info = {
  label: string;
  link?: string;
};

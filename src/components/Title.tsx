type Props = {
  title: string;
};

function Title({ title }: Props) {
  return <h1 className="text-5xl font-bold text-customGreen pb-2">{title}</h1>;
}

export default Title;

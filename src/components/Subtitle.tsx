type Props = {
  subtitle: string;
};

function Subtitle({ subtitle }: Props) {
  return (
    <h2 className="text-4xl font-bold text-customGreen pb-3">{subtitle}</h2>
  );
}

export default Subtitle;

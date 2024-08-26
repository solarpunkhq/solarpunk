type CardContentProps = {
  title: string;
  subtitle: string;
};

function CardContent({ title, subtitle }: CardContentProps) {
  return (
    <p className="fs-24 leading-normal tracking-tight text-gray-50 sm:text-18">
      <span className="font-medium text-gray-20">{title}</span> <span>{subtitle}</span>
    </p>
  );
}

export default CardContent;

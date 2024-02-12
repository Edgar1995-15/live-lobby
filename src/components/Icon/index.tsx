import { cn } from '../../utils/helper';

interface IIconProps {
  name: string;
  size?: string;
  className?: string;
  fill?: string;
}

const Icon = ({ name, className = 'lg:h-auto sm:h-6 cursor-pointer' }: IIconProps) => {
  return <img src={`/images/${name}.svg`} alt={name} className={className} />;
};

export const SVGIcon = ({ name, className, size, fill }: IIconProps) => {
  return (
    <svg className={cn('lg:h-auto sm:h-6 cursor-pointer', className, size)}>
      <use
        xlinkHref={`/images/${name}`}
        href={`/images/${name}`}
        fill={fill}
      />
    </svg>
  );
};

export default Icon;

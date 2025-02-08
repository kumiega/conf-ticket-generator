import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('w-full font-bold rounded-md cursor-pointer', {
  variants: {
    variant: {
      primary: 'text-white bg-orange-500 hover:bg-orange-700 border-b-4 border-orange-500',
      secondary: 'text-white bg-neutral-700 hover:bg-neutral-300 hover:text-neutral-900',
    },
    size: {
      sm: 'text-sm px-3 py-1',
      md: 'text-lg px-4 py-2',
      lg: 'text-xl px-5 py-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Button = ({ children, variant, size, className, ...props }: ButtonProps) => {
  return (
    <button type="submit" className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;

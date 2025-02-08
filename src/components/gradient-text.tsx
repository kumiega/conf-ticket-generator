import { ReactNode } from 'react';

const GradientText = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-white">
      {children}
    </span>
  );
};

export default GradientText;

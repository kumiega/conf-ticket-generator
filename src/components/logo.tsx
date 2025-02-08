import logo from '@/assets/images/logo-full.svg';

const Logo = ({ size = '1.5rem' }: { size?: string }) => {
  return (
    <img
      style={{
        height: size,
      }}
      src={logo}
      alt="Logo of Coding Conference 2025"
    />
  );
};

export default Logo;

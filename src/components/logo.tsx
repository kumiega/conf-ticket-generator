const Logo = ({ size = '1.5rem' }: { size?: string }) => {
  return (
    <img
      style={{
        height: size,
      }}
      src="./src/assets/images/logo-full.svg"
      alt="Logo of Coding Conference 2025"
    />
  );
};

export default Logo;

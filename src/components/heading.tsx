const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-center text-5xl leading-14 font-extrabold max-w-[30ch] mx-auto">
      {children}
    </h1>
  );
};

export default Heading;

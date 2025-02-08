const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-lg text-center mx-auto max-w-[48ch] mt-5 opacity-80">{children}</p>;
};

export default Paragraph;

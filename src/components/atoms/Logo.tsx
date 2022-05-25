const Logo = ({ height }: { height: number }) => {
  const width = height * 1.54;

  return <img alt="" height={height} width={width} src="/logga-gul.svg" />;
};

export default Logo;

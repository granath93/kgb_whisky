import Logo from "atoms/Logo";
import { createUseStyles } from "react-jss";

const mail = "info@kgbwhisky.se";

const Footer = () => {
  const classes = useFooterStyle();

  return (
    <footer className={classes.footer}>
      <address>
        <p>Contact</p>
        <a href="tel:+46721746727">072-1746727</a>
        <a href={`mailto:${mail}`}>{mail}</a>
      </address>
      <Logo height={60} />
      <button>Provningsprotokoll</button>
    </footer>
  );
};

const useFooterStyle = createUseStyles({
  footer: {
    display: "flex",
    justifyContent: "center",
    background: "#000",
    height: 100,
  },
});

export default Footer;

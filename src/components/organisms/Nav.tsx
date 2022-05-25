import Logo from "atoms/Logo";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const Nav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <Logo height={40} />
      </Link>
      <Link to="old-meetups">Tidigare whiskyprovningar</Link>
    </nav>
  );
};

const useStyles = createUseStyles({
  nav: {
    display: "flex",
    justifyContent: "center",
    background: "black",
    padding: 5,
    alignItems: "center",
    "& a": {
      color: "white",
      padding: 10,
      textDecoration: "none",
      height: "fit-content",
    },
  },
});

export default Nav;

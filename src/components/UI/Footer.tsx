import "./../../assets/css/footer.css";
const Footer = () => {
  return (
    <footer onContextMenu={(e) => e.stopPropagation()} className="footer">
      <p>
        <strong>If you want to support author :</strong>{" "}
        <a
          title="Steam tradeoffer"
          href="https://steamcommunity.com/tradeoffer/new/?partner=90549429&token=KJgIT2Wh"
          target="_blank"
        >
          Tradeoffer
        </a>
      </p>
      <p>
        Contact/bug report:{" "}
        <a href="https://discord.gg/RNc4BcMF " title="Discord">
          Discord chanel
        </a>
      </p>
      <p>
        Website created and designed by:{" "}
        <a target="_blank" href="https://github.com/G1Lroy">
          G1lroy
        </a>
        .
      </p>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

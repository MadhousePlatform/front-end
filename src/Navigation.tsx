import "./Navigation.css";

const Header = () => {
  return (
    <header>
      <nav title="Site Navigation">
        <img
          src="logo@3x.5c184dbe.webp"
          className="logo"
          alt="Madhouse Miners Logo"
        />

        <a href="/">Home</a>
        <a href="/server-status">Server Status</a>

        <img
          src="discord.png"
          className="discord-logo"
          alt="Join the Discord Chat"
        />
      </nav>
      <nav className="right" title="Account Actions">
        <a href="/log-in">Log In</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
};

export default Header;

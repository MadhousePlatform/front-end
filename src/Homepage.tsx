import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <h1>Welcome to Madhouse Miners! Unleash Your Inner Madness!</h1>
      <h2>
        We run allow listed modded Minecraft servers. The currently available
        modpacks are shown below.
      </h2>

      <div className="pack-cards">
        {/* TODO: Make this a proper component */}
        <div className="pack">
          <img src="637291848539782193.png" alt="Uncle Genny's Logo" />
          <p className="pack-name">Uncle Genny's</p>
          <p>
            <img
              className="access-logo"
              src="allowlist.png"
              alt="Available to All Allow List"
            />
            <span>
              Available to Allow
              <br />
              Listed Players
            </span>
          </p>
        </div>
        <div className="pack">
          <img src="637291848539782193.png" alt="Uncle Genny's Logo" />
          <p className="pack-name">Uncle Genny's</p>
          <p>
            <img
              className="access-logo"
              src="Patreon-logo.png"
              alt="Only for Patreons"
            />
            <span>
              Only available to
              <br />
              Patreons
            </span>
          </p>
        </div>
        <div className="pack">
          <img src="637291848539782193.png" alt="Uncle Genny's Logo" />
          <p className="pack-name">Uncle Genny's</p>
          <p>
            <img
              className="access-logo"
              src="Patreon-logo.png"
              alt="Only for Patreons"
            />
            <span>
              Only available to
              <br />
              Patreons
            </span>
          </p>
        </div>
        <div className="pack">
          <img src="637291848539782193.png" alt="Uncle Genny's Logo" />
          <p className="pack-name">Uncle Genny's</p>
          <p>
            <img
              className="access-logo"
              src="Patreon-logo.png"
              alt="Only for Patreons"
            />
            <span>
              Only available to
              <br />
              Patreons
            </span>
          </p>
        </div>
      </div>

      <a href="/register" className="button">
        Allow for Allow Listing
      </a>
    </>
  );
};

export default Homepage;

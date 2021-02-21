export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-4">
            <a className="header--logo">
              <img src="/logo.svg" alt="Amadezing" />
            </a>
          </div>
          <div className="col-xs-8 end-xs">
            <span className="end-xs">
              <span>👋</span> <span className="hide-mobile">Hablémos,</span>{" "}
              <b>
                <a href="mailto:hello@amadezing.com">hello@amadezing.com</a>
              </b>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

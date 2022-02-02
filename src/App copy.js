import "./style.scss";
import data from "./data/data.json";
const App = () => {
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <header></header>
        <main>
          <div className="Cards">
            {data.map((profil, i) => (
              <div
                className={
                  profil.featured ? "Jobs-card Featured-style" : "Jobs-card"
                }
                key={i}
              >
                <div className="Jobs-content">
                  {" "}
                  <div className="Logo">
                    <div
                      className="Img"
                      style={{
                        backgroundImage: `url(${require(`./images/${profil.logo}.svg`)})`,
                      }}
                    ></div>
                  </div>
                  <div className="Profil">
                    <div className="Company">
                      <div className="Company-title">{profil.company}</div>
                      {profil.new ? <div className="New">NEW!</div> : null}
                      {profil.featured ? (
                        <div className="Featured">FEATURED</div>
                      ) : null}
                    </div>
                    <div className="Position">{profil.position}</div>
                    <div className="Other-info">
                      <div className="PostedAt">
                        {profil.postedAt} &nbsp;&nbsp;.
                      </div>
                      <div className="Contract">
                        {profil.contract} &nbsp;&nbsp;.
                      </div>
                      <div className="Location">{profil.location}</div>
                    </div>
                  </div>
                  <div className="Languages">
                    <div className="Languages-content">
                      {profil.languages.map((lang, i) => (
                        <>
                          <div
                            key={i}
                            className="Language"
                            onClick={() => console.log(lang)}
                          >
                            {lang}
                          </div>
                        </>
                      ))}
                      <div
                        className="Language"
                        onClick={() => console.log(profil.role)}
                      >
                        {profil.role}
                      </div>
                      <div
                        className="Language"
                        onClick={() => console.log(profil.level)}
                      >
                        {profil.level}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

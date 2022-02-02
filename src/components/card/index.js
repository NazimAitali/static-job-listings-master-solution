import React from "react";
import "./style.scss";
const Card = ({ data, addToFilter, filterList }) => {
  return (
    <div className={filterList.length === 0 ? "Cards" : "Cards Top"}>
      {data.map((profil, i) => (
        <div
          className={
            filterList.length === 0
              ? profil.featured
                ? "Jobs-card Featured-style"
                : "Jobs-card"
              : profil.featured
              ? "Jobs-card Featured-style Height"
              : "Jobs-card Height"
          }
          key={i}
        >
          <div className="Jobs-content">
            {" "}
            <div className="Logo">
              <div
                className="Img"
                style={{
                  backgroundImage: `url(${require(`../../images/${profil.logo}.svg`)})`,
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
                <div className="PostedAt">{profil.postedAt} &nbsp;&nbsp;.</div>
                <div className="Contract">{profil.contract} &nbsp;&nbsp;.</div>
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
                      onClick={() => addToFilter(lang)}
                    >
                      {lang}
                    </div>
                  </>
                ))}
                {profil.tools.map((tool, i) => (
                  <>
                    <div
                      key={i}
                      className="Language"
                      onClick={() => addToFilter(tool)}
                    >
                      {tool}
                    </div>
                  </>
                ))}
                <div
                  className="Language"
                  onClick={() => addToFilter(profil.role)}
                >
                  {profil.role}
                </div>
                <div
                  className="Language"
                  onClick={() => addToFilter(profil.level)}
                >
                  {profil.level}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

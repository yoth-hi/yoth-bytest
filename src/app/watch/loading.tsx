import Description from "../../components/Description";
import AvtCh from "../../components/cardChannel";
export default function () {
  return (
    <div className="page-watch">
      <div className="page-watch-info">
        <div className="page-watch-info-conteiner">
          <div id="player-video"><div className="skeleton-video"/></div>
          <div className="page-watch-info-title">
            <h3 className="title-string">
              <div className="skeleton-text title" />
            </h3>
          </div>
          <div className="page-watch-info-outers">
            <AvtCh data={undefined} endpoint={undefined} />
            <div className="skeleton_page-watch-info-buttons">
              <div className="button-skeleton" />
              <div className="button-skeleton" />
              <div className="button-skeleton" />
              <div className="button-skeleton" />
              <div className="button-skeleton" />
            </div>
          </div>
          <Description text={""} metadata={[]} />
        </div>
        <div className="page-watch-items"></div>
      </div>
    </div>
  );
}

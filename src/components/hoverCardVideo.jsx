import React from "react";

export default class HoverCardVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="player-next">
        <img
          src="https://i.ytimg.com/vi/[id]/hq720.jpg"
          className="player-next-thumbnail"
        />
        <div className="player-next-details ">
          <h3 className="player-next-title">[title]</h3>
          <span className="player-next-metadata">[actorName]</span>
          <span className="player-next-metadata">[metadata]</span>
        </div>
      </div>
    );
  }
}

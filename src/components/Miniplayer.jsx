"use client";
import Title from "./string";
export default function () {
  return (
    <div className="miniplayer">
      <div>
        <div className="miniplayer-player-container"></div>
        <div>
          <div className="miniplayer-metadata">
            <Title className="miniplayer-title" title="[[Title]]"/>
            <div>[[metadata]]</div>
          </div>
        </div>
      </div>
    </div>
  );
}

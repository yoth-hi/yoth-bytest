import Link from "next/link";
import Title from "../string";
import Image from "../image";
export default function ({ href = "",onClick, newness, icon, title, imageUrl }) {
  return (
    <div>
      <Link onClick={onClick} href={href}>
        <div className="guide-section-item-content">
          <div className="guide-section-item-icon">{icon}</div>
          <Image src={imageUrl} />
          <Title title={title} className="guide-section-item-title" />
          {newness && (
            <div
              className={"dot-newness dot-newness-" + newness}
              type={newness}
            />
          )}
        </div>
      </Link>
    </div>
  );
}

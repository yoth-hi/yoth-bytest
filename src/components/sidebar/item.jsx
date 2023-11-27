"use client";
import Link from "next/link";
import Title from "../string";
import Button from "../button_root";
import Image from "../image";
export default function ({
  href = "",
  className,
  onClick,
  newness,
  icon,
  title,
  imageUrl,
}) {
  return (
    <Button root={"div"} className={(className||"") +" guide-section-item-btn"}>
      <Link
        onClick={onClick}
        href={href}
        aria-label={title || "button navegation"}
      >
        <div className="guide-section-item-content">
          <div className="guide-section-item-icon">{icon}</div>
          <Image src={imageUrl} alt={title} />
          <Title title={title} className="guide-section-item-title" />
          {newness && (
            <div
              className={"dot-newness dot-newness-" + newness}
              type={newness}
            />
          )}
        </div>
      </Link>
    </Button>
  );
}

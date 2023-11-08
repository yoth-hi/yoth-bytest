import Button from "./Button";
import Link from "next/link";
import Home from "./icons/home";
import Title from "./string";
import Image from "./image";

const Avatar = function ({ profile, name }) {
  const isLive = Math.random()<.2
  return (
    <div className="card-avatar">
      <Link href="/" className="card-avatar-endpoint">
        <div className="card-avatar-contener">
          <Image
            classRoot="card-avatar-image"
            src="https://yt3.ggpht.com/PTiLCyqs4-z3-ndytSzw4EcA3fyu5a5IM1dGAxWUah5RlogLLGlDyk_AjgzlkUXnbur-CvML5w=s88-c-k-c0x00ffffff-no-rj"
          />
          <div className="card-avatar-info">
            <span>Aruan</span>
            {isLive&&(<><div className="dot-red" /><div className="text-live">Live</div></>)}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function () {
  const Trass = {
    Home: "Inicio",
    Reels: "Reels",
    Folllows: "Segue",
    Library: "Biblioteca",
    Gaming: "Jogando",
    Close: "Fechar",
  };
  return (
    <div className="sidebar">
      <div className="hover-item">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}

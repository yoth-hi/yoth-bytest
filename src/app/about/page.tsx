import Image from "next/image";
import "./styles.css";
export const metadata = {
  title:"About"
}
export default function (props: any) {
  return (
    <div>
      <div className="page-about-content">
        <div>
          <h1 className="page-about-title-site">Yoth</h1>
        </div>
        <span className="page-about-subtitle-site">Welcome to Yoth! an esteemed platform dedicated to delivering curated content sourced from premier social networks like YouTube and Twitch. Our mission is to provide you with a seamless and enriching experience as you explore a diverse array of engaging multimedia. Feel free to immerse yourself in the captivating world of online content creation right here on Yoth – where discovery meets innovation, and your entertainment knows no bounds.</span>
      </div>
    </div>
  );
}
import HomeIcon from "../../public/home-icon";
import Link from "next/link";
import "./header.scss";

export default function Header({ headerTitle }) {
  return (
    <div className="app-header">
      <Link href="/">
        <HomeIcon />
      </Link>
      <h2 className="header-title">{headerTitle}</h2>
    </div>
  );
}

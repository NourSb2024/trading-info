import HomeIcon from "../../public/home-icon";
import Link from "next/link";

export default function DataReactContainer() {
  return (
    <div>
      <Link href="/">
        <HomeIcon />
      </Link>
    </div>
  );
}

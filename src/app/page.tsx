import HomeIcon from "@/assets/icons/home-icon";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HomeIcon />
      <div className="home-page-container">
        <Link className="nav-btn" href="data-grid-table-container">
          Display some data with Ag-grid
        </Link>
        <Link className="nav-btn" href="data-react-container">
          Display some data with React
        </Link>
      </div>
    </div>
  );
}

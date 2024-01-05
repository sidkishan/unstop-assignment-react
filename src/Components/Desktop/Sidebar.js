import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import dashboardIcon from "../../Assets/dashboard.svg";
import assesmentIcon from "../../Assets/note_alt.svg";
import "../Desktop/styles.css";
import AdminNav from "./AdminNav";
import adminUrl from "../../Assets/admin_meds.svg";
import quizUrl from "../../Assets/quiz.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <Link to="/dashboard">
          <NavItem text={"Dashboard"} imgUrl={dashboardIcon} />
        </Link>
        <div className="active">
          <Link to="/">
            <NavItem text={"Assesments"} imgUrl={assesmentIcon} />
          </Link>
        </div>

        <Link to="/my-library">
          <NavItem text={"My Library"} imgUrl={quizUrl} />
        </Link>
        <Link>
          <AdminNav NavItem={NavItem} text={"Round Status"} imgUrl={adminUrl} />
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;

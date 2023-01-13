import logo from "../Assets/Icons/Navbar/logo.png";
import heart from "../Assets/Icons/Navbar/heart.png";
import user from "../Assets/Icons/Navbar/user.png";
const navBarConfig = [
  {
    name: "Logo",
    icon_path: logo,
    nav_to: "",
    is_top: true,
    is_page_active: true,
    is_mobile: true,
  },
  {
    name: "favourites",
    icon_path: heart,
    nav_to: "/favourites",
    is_top: false,
    is_page_active: false,
    is_mobile: true,
  },
  {
    name: "Profile",
    icon_path: user,
    nav_to: "/profile",
    is_top: false,
    is_page_active: false,
    is_mobile: true,
  },
];
export default navBarConfig;

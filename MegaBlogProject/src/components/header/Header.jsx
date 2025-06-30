import { useSelector } from "react-redux";
import LogutBtn from "./LogutBtn";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Create Post",
      slug: "/create-post",
      active: authStatus,
    },
    {
      name: "Sign Up",
      slug: "/sign-up",
      active: !authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
  ];
  return (
    <header>
      // logo div
      <div>
        <Logo />
      </div>
      <nav>
        <div>
          <ul>
            // conditional rendering nav items
            {navItems.map((item) =>
              item.active ? (
                <li key={item.slug}>
                  <Link to={item.slug}>{item.name}</Link>
                </li>
              ) : null
            )}
            // conditional rendering logut button
            {authStatus && (
              <li>
                <LogutBtn />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

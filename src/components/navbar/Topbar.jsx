import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="w-full sm:hidden lg:flex sm:p-0 sm:justify-center lg:px-28 lg:justify-between bg-white  flex-row items-center text-sm min-h-14">
      {/* text */}
      <p className="sm: lg:block">Free shipping on all order within Lagos</p>
      {/* logo */}
      <p>
        <Link className="text-3xl font-extrabold" to={"/"}>
          MIKA'S EMPIRE
        </Link>
      </p>
      {/* social links */}
      <section className="sm:hidden lg:block">
        <FaFacebookF className="inline-block mx-1 text-gray-600" />
        <FaTwitter className="inline-block mx-1 text-gray-600" />
        <FaInstagram className="inline-block mx-1 text-gray-600" />
        <Link to="/">mikaempire _ pef</Link>
      </section>
    </div>
  );
}

export default TopBar;

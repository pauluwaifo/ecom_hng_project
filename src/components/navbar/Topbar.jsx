import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="w-full px-28 justify-between bg-white flex flex-row items-center text-sm min-h-14">
      {/* text */}
      <p>Free shipping on all order within Lagos</p>
      {/* logo */}
      <p className="text-3xl font-extrabold">MIKA'S EMPIRE</p>
      {/* social links */}
      <section>
        <FaFacebookF className="inline-block mx-1 text-gray-600" />
        <FaTwitter className="inline-block mx-1 text-gray-600" />
        <FaInstagram className="inline-block mx-1 text-gray-600" />
        <Link to="/">mikaempire _ pef</Link>
      </section>
    </div>
  );
}

export default TopBar;

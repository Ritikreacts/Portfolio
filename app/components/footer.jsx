// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <p className="text-sm text-center">
          © Developer Portfolio by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ritiksingh1/"
            className="text-[#16f2b3]"
          >
            Ritik Singh
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;

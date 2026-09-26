import Image from "next/image";
import Link from "next/link";
import logo from '@/app/assets/logo.png'


const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-white/70 sm:flex-row">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="btn btn-ghost text-lg">
            <Image src={logo} alt="Fit Log Logo" width={20} height={50} />
            FITLOG
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} © 2026 FitLog — Workout Library.
        </p>

        {/* Links */}
      </div>
    </footer>
  );
};

export default Footer;

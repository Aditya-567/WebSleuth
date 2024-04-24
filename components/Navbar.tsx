import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav
        className="nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          // boxShadow: "0px 0px 4px blue",
          backgroundColor: "white",
        }}
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            height={45}
            width={45}
            alt="logo"
          />

          <p className="nav-logo">
            Web<span className="text-indigo-500">Sleuth</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/components/product.tsx"
            className="flex items-center gap-1"
          >
            <Image
              src="/assets/icons/black-heart.svg"
              height={35}
              width={35}
              alt="logo"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <nav>
        <ul className="py-5 bg-blue-300">
          <div className="flex justify-around max-w-sm">
            <Link href="/">
              <a>
                <li>Top</li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <li>Contact</li>
              </a>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

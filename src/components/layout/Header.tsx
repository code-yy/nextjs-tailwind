import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <nav>
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className="inline-block p-4 text-red-500">{label}</a>
          </Link>
        );
      })}
    </nav>
  );
};

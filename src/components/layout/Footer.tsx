import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <nav className="bg-gray-200 text-right pr-8">
      {items.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <a className="text-blue-500 px-4 ">{label}</a>
          </Link>
        );
      })}
    </nav>
  );
};

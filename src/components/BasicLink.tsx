import Link from "next/link";
import React from "react";

const BasicLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className="text-blue-500 hover:text-blue-700"> {title}</a>
    </Link>
  );
};

export default BasicLink;

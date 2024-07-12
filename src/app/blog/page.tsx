import BasicLink from "@/components/BasicLink";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-8">
      <ol className="list-decimal pl-4">
        <li>
          <BasicLink href="/blog/brasil" title="Brasil" />
        </li>
        {/* <li>
          <Link href="/blog/brasil">Page 2</Link>
        </li>
        <li>
          <Link href="/page3">Page 3</Link>
        </li> */}
      </ol>
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 text-center">
      <div className="border-t border-slate-900/5 py-6">
        <p className="mt-5 text-center text-sm leading-6 text-slate-600">
          © {new Date().getFullYear()} <Link href='https://shahuluiux.com'><a className="font-medium hover:underline" aria-label="Navigate to shahuluiux.com" aria-describedby="shahuluiux.com">ShahulUIUX</a></Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

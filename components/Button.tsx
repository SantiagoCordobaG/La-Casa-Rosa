import Link from "next/link";
import { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const classes =
    variant === "primary"
      ? "bg-accent text-white hover:bg-brand"
      : "border border-brand/20 bg-brand/5 text-dark hover:border-brand hover:bg-brand/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-pill px-7 py-3.5 text-sm font-semibold font-body transition duration-300 shadow-spa hover:shadow-spa-lg ${classes}`}
    >
      {children}
    </Link>
  );
}

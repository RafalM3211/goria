import { Link, Button } from "@mui/joy";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink(props: Props) {
  return (
    <Link
      sx={{
        display: "block",
        mx: "10px",
      }}
      level="body1"
      variant="plain"
      color="neutral"
      underline="none"
      href={props.href}
    >
      {props.children}
    </Link>
  );
}

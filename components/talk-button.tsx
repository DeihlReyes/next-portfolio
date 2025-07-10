import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const TalkButton = () => {
  return (
    <Link href="#contact">
      <Button>Let&apos;s Talk!</Button>
    </Link>
  );
};

export default TalkButton;

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const TalkButton = () => {
  return (
    <Button asChild>
      <Link href="/contact">Let&apos;s Talk!</Link>
    </Button>
  );
};

export default TalkButton;

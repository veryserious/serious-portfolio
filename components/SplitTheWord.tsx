"use client";

import { useEffect } from "react";

export function SplitTheWord() {
  useEffect(() => {
    const splitting = require("splitting");
    splitting();
  }, []);

  return null;
}

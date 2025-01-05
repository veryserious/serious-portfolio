"use client";

import { useEffect } from "react";

export function SplitTheWord() {
  useEffect(() => {
    const splitting = require("Splitting");
    splitting();
  }, []);

  return null;
}

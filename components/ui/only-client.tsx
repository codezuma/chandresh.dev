"use client";

import React from "react";

export const OnlyClient = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};

export default OnlyClient;

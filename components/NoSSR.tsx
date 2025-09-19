'use client';

import { useState, useEffect } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
}

export default function NoSSR({ children }: NoSSRProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
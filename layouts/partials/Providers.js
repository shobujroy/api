"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const Providers = ({ children }) => {
  const pathname = usePathname();

  // Scroll to top on pathname change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  // Create a QueryClient instance (using useState ensures it's only created once)
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default Providers;

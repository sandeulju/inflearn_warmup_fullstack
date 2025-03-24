"use client";

import { QueryClient, QueryClientProvider } from "react-query";

// QueryClient is a client for managing server state
// It is used to fetch, cache, and update data from the server
// QueryClient는 클라이언트 단에서 모든 값들을 관리해주는 제일 큰 스토어 개념이라고 보면 됨.
export const queryClient = new QueryClient();

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

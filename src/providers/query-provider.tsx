'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

type QueryClientProps = {
  children: ReactNode
}

export function QueryProvider({ children }: QueryClientProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  )
}
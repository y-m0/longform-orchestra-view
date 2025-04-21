
"use client"

import * as React from "react"
import { useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Remove 'use client' warning since we're not using Next.js
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(props.defaultTheme || 'light')
  }, [props.defaultTheme])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

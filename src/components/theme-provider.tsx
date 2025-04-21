
"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Initialize theme class on document element
    if (mounted) {
      const root = window.document.documentElement
      const initialColorMode = props.defaultTheme || 'light';
      
      // Remove existing theme classes
      root.classList.remove('light', 'dark')
      
      // Apply stored theme or default
      const storedTheme = localStorage.getItem(props.storageKey || 'ui-theme')
      const theme = storedTheme || initialColorMode
      
      root.classList.add(theme)
      
      // Set data-theme attribute for additional styling hooks
      root.setAttribute('data-theme', theme)
    }
  }, [mounted, props.defaultTheme, props.storageKey])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

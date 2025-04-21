
"use client"

import * as React from "react"
import { useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Initialize theme class on document element
    const root = window.document.documentElement
    const initialColorMode = props.defaultTheme || 'light';
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    // Apply stored theme or default
    const storedTheme = localStorage.getItem(props.storageKey || 'theme')
    const theme = storedTheme || initialColorMode
    
    root.classList.add(theme)
    
    // Set data-theme attribute for additional styling hooks
    root.setAttribute('data-theme', theme)
  }, [props.defaultTheme, props.storageKey])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

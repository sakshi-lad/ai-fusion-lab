import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider } from '@/components/ui/sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_componets/AppSidebar'

function Provider({
  children,
  ...props
}) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    {...props}>
      <SidebarProvider>
        <AppSidebar/>
        <SidebarTrigger></SidebarTrigger>
          <div>{children}</div>
      </SidebarProvider>
    </NextThemesProvider>
  )
}

export default Provider
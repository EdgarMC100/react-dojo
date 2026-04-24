"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/Sidebar"
import { SearchModal } from "@/components/SearchModal"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export function AppShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.getElementById("scroll-area")?.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

  return (
    <SidebarProvider defaultOpen className="h-svh! overflow-hidden flex-col!">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <SidebarInset className="flex flex-col overflow-hidden min-w-0">
          <div id="scroll-area" className="flex-1 overflow-y-auto min-h-0">
            <div key={pathname} className="page-enter">
              {children}
            </div>
          </div>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

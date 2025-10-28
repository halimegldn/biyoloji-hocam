"use client"

import type React from "react"
import { useState } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Home, User, BookOpen, Library, Mail, Bell, ChevronLeft, ChevronRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, } from "@/components/ui/tooltip"

const iconMap = {
    Anasayfa: Home,
    Hakkımda: User,
    Derslerim: BookOpen,
    Kaynaklar: Library,
    İletişim: Mail,
    Duyurular: Bell,
}

type LinkProps = {
    href: string
    children: React.ReactNode
    icon: React.ElementType
    isCollapsed: boolean
    isActive?: boolean
}

const SidebarIconLink = ({ href, children, icon: Icon, isActive = false }: LinkProps) => {
    const LinkInner = (
        <a
            href={href}
            className={`group relative flex items-center justify-center gap-3 px-3 py-2.5 rounded-lg
                  transition-all duration-200 ease-out
                  ${isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
            aria-label={String(children)}
        >
            <Icon
                className={`h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
            />
        </a>
    )

    return (
        <Tooltip delayDuration={150}>
            <TooltipTrigger asChild>{LinkInner}</TooltipTrigger>
            <TooltipContent side="right" sideOffset={12} className="px-2 py-1 text-xs">
                {children}
            </TooltipContent>
        </Tooltip>
    )
}

export function Sidebar() {
    const { setTheme } = useTheme()
    const pathname = usePathname()

    const navLinksData = [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkımda", href: "/about" },
        { label: "Derslerim", href: "/lessons" },
        { label: "Kaynaklar", href: "/sources" },
        { label: "İletişim", href: "/contact" },
        { label: "Duyurular", href: "/announcements" },
    ]

    return (
        <TooltipProvider>
            {/* Sadece ikonik, dar sidebar */}
            <aside
                className={`hidden md:flex fixed left-0 top-0 h-screen z-20
                    w-20 flex-col items-center bg-sidebar border-r border-sidebar-border
                    transition-all duration-300 ease-in-out`}
            >
                {/* Üst: küçük logo/nokta istersen bırak, yoksa silebilirsin */}
                <div className="w-full flex items-center justify-center px-3 py-5 border-b border-sidebar-border">
                    <div className="relative w-6 h-6">
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-primary top-0 left-1/2 -translate-x-1/2 animate-pulse"></span>
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-primary/80 left-0 top-1/2 -translate-y-1/2"></span>
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-primary/80 right-0 top-1/2 -translate-y-1/2"></span>
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 bottom-0 left-1/2 -translate-x-1/2"></span>
                    </div>
                </div>

                {/* Nav ikonları */}
                <nav className="flex-1 w-full flex flex-col gap-1 p-3 overflow-y-auto">
                    {navLinksData.map((link) => (
                        <SidebarIconLink
                            key={link.href}
                            href={link.href}
                            icon={iconMap[link.label as keyof typeof iconMap]}
                            isActive={pathname === link.href}
                            isCollapsed={true}
                        >
                            {link.label}
                        </SidebarIconLink>
                    ))}
                </nav>

                {/* Tema butonları: Açık / Koyu / Sistem */}
                <div className="w-full p-3 border-t border-sidebar-border flex items-center justify-center gap-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                                aria-label="Açık tema"
                                onClick={() => setTheme("light")}
                            >
                                <Sun className="h-5 w-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={12} className="px-2 py-1 text-xs">
                            Açık
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                                aria-label="Koyu tema"
                                onClick={() => setTheme("dark")}
                            >
                                <Moon className="h-5 w-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={12} className="px-2 py-1 text-xs">
                            Koyu
                        </TooltipContent>
                    </Tooltip>
                </div>
            </aside>
            {/* Mobile bottom nav aynı kalabilir (istersen orayı da sadece ikon + tooltip yaparız) */}
        </TooltipProvider>
    )
}

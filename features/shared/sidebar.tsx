"use client"

import type React from "react"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Home, User, BookOpen, Library, Mail, Bell, ChevronLeft, ChevronRight, Monitor } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const iconMap = {
    Anasayfa: Home,
    Hakkımda: User,
    Derslerim: BookOpen,
    Kaynaklar: Library,
    İletişim: Mail,
    Duyurular: Bell,
}

const AnimatedSidebarLink = ({
    href,
    children,
    icon: Icon,
    isCollapsed,
    isActive = false,
}: {
    href: string
    children: React.ReactNode
    icon: React.ElementType
    isCollapsed: boolean
    isActive?: boolean
}) => {
    return (
        <a
            href={href}
            className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg
                       transition-all duration-200 ease-out
                       ${isCollapsed ? "justify-center" : ""}
                       ${isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
        >
            <Icon
                className={`h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
            />
            {!isCollapsed && <span className="text-sm font-medium whitespace-nowrap">{children}</span>}

            {isActive && !isCollapsed && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
            )}
        </a>
    )
}

export function Sidebar() {
    const { setTheme } = useTheme()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [activeLink, setActiveLink] = useState("/")

    const navLinksData = [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkımda", href: "/about" },
        { label: "Derslerim", href: "/lessons" },
        { label: "Kaynaklar", href: "/sources" },
        { label: "İletişim", href: "/contact" },
        { label: "Duyurular", href: "/announcements" },
    ]

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={`hidden md:flex fixed left-0 top-0 h-screen z-20
                           flex-col bg-sidebar border-r border-sidebar-border
                           transition-all duration-300 ease-in-out
                           ${isCollapsed ? "w-20" : "w-72"}`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-sidebar-border">
                    {!isCollapsed && (
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <span className="absolute w-2 h-2 rounded-full bg-primary top-0 left-1/2 transform -translate-x-1/2 animate-pulse"></span>
                                <span className="absolute w-2 h-2 rounded-full bg-primary/80 left-0 top-1/2 transform -translate-y-1/2"></span>
                                <span className="absolute w-2 h-2 rounded-full bg-primary/80 right-0 top-1/2 transform -translate-y-1/2"></span>
                                <span className="absolute w-2 h-2 rounded-full bg-primary/60 bottom-0 left-1/2 transform -translate-x-1/2"></span>
                            </div>
                            <span className="text-lg font-semibold text-sidebar-foreground">Portal</span>
                        </div>
                    )}

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                    >
                        {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                    </Button>
                </div>

                <nav className="flex-1 flex flex-col gap-1 p-4 overflow-y-auto">
                    {navLinksData.map((link) => (
                        <AnimatedSidebarLink
                            key={link.href}
                            href={link.href}
                            icon={iconMap[link.label as keyof typeof iconMap]}
                            isCollapsed={isCollapsed}
                            isActive={activeLink === link.href}
                        >
                            {link.label}
                        </AnimatedSidebarLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-sidebar-border">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className={`w-full bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80 ${isCollapsed ? "px-0" : ""
                                    }`}
                            >
                                <Sun className="h-5 w-5 block dark:hidden" aria-hidden />
                                <Moon className="h-5 w-5 hidden dark:block" aria-hidden />
                                {!isCollapsed && <span className="ml-2">Tema</span>}
                                <span className="sr-only">Tema değiştir</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 h-4 w-4" />
                                Açık
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 h-4 w-4" />
                                Koyu
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <span className="mr-2 h-4 w-4 flex items-center justify-center">⚙️</span>
                                Sistem
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </aside>

            <nav
                className="md:hidden fixed bottom-0 left-0 right-0 z-20
                          bg-sidebar border-t border-sidebar-border
                          px-2 py-2 safe-area-inset-bottom"
            >
                <div className="flex items-center justify-around gap-1">
                    {navLinksData.slice(0, 5).map((link) => {
                        const Icon = iconMap[link.label as keyof typeof iconMap]
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${activeLink === link.href ? "text-primary" : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="text-xs font-medium">{link.label.slice(0, 5)}</span>
                            </a>
                        )
                    })}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10 text-sidebar-foreground/70">
                                <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 mr-20" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 h-4 w-4" />
                                Açık
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-20 h-4 w-4" />
                                Koyu
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <span className="mr-20 h-4 w-4 flex items-center justify-start">⚙️</span>
                                Sistem
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </>
    )
}

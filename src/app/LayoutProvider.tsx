'use client'
import { usePathname } from 'next/navigation';
import Footer from '@/components/users/shared/Footer';
import Nav from '@/components/users/shared/Nav';
import { Toaster } from "@/components/ui/toaster"

export const LayoutProvider = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            {children}
            {!pathname.includes('/protected') && <Footer/>}
            {!pathname.includes('/protected') && <Nav/>}
        </>
    )
};
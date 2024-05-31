export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-center w-screen items-center py-8 bg-[#C5DDFF]">
            {children}
        </main>
    );
}
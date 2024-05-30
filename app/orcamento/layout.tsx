export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center w-full items-center py-8 bg-[#C5DDFF]">
            {children}
        </div>
    );
}
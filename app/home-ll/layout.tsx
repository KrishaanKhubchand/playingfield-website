export default function HomeLLLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Hide the global Navigation for this page */}
      <style>{`
        header.w-full.py-8 { display: none !important; }
      `}</style>
      {children}
    </>
  )
}

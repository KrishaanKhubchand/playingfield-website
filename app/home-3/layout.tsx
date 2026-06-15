export default function Home3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Load the design's fonts; React hoists these into <head>. */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      {/* Hide the global Navigation for this full-bleed page */}
      <style>{`header.w-full.py-8 { display: none !important; }`}</style>
      {children}
    </>
  )
}

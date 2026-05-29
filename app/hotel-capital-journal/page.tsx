export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-serif font-light">The Hotel Capital Journal</h1>
          <p className="text-lg text-muted-foreground font-light">Coming soon.</p>
        </div>
      </main>
      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground font-light">© {new Date().getFullYear()} Playing Field</p>
        </div>
      </footer>
    </div>
  )
}

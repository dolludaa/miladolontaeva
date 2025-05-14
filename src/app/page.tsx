import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-16">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h2>
        <p className="text-xl text-gray-600 mb-8">
          Here you'll find my projects and works showcasing my experience and skills
        </p>
        <Link 
          href="/projects" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Projects
        </Link>
      </section>
    </div>
  )
}

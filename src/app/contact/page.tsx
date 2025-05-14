import Link from 'next/link'

export default function Contact() {
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

      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
          <div className="space-y-2">
            <p className="flex items-center text-gray-600">
              <span className="mr-2">📧</span>
              email@example.com
            </p>
            <p className="flex items-center text-gray-600">
              <span className="mr-2">📱</span>
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
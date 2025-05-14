import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Brief description of the first project',
    image: '/project1.jpg',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Brief description of the second project',
    image: '/project2.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
  // Add more projects as needed
]

export default function Projects() {
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

      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200">
              {/* Project image will be here */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
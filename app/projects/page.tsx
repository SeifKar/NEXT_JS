import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Project 1',
    description: 'A Node.js project involves building server-side applications using JavaScript, leveraging Node.js for its non-blocking, event-driven architecture. Projects can range from creating RESTful APIs to full-stack web applications when combined with frontend frameworks.',
    image: '/project1.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. Highlight the key features and your role in development.',
    image: '/project2.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of the projects I've worked on. Each project represents
          different challenges and learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

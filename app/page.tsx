import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Brian Seif Karume</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A passionate developer focused on creating beautiful and functional web applications.
              I specialize in frontend development with React and Next.js.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'React.js',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'Git',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

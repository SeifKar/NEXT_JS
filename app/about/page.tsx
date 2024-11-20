export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Hello! I'm a passionate web developer with a strong focus on creating
            intuitive and performant web applications. My journey in web development
            started with a curiosity about how websites work, and it has evolved
            into a professional career where I get to build amazing digital
            experiences every day.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">My Journey</h2>
          <p className="mb-6">
            I began my coding journey in the year 2024 the month of May. Since then, I've
            worked on various projects that have helped me develop a deep
            understanding of modern web technologies and best practices.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Education</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-3">
              <strong>Degree</strong> - Strathmore University (2015 - 2021)
            </li>
            <li className="mb-3">
              <strong>Relevant Certifications</strong> - Diploma Business
              Management,
              Bachelor of Commerce (Marketing)
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-4">Frontend</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  React.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-green-100">
              <h3 className="font-bold text-green-900 mb-4">Backend</h3>
              <ul className="text-green-800 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Express
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  PostgreSQL
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-purple-100">
              <h3 className="font-bold text-purple-900 mb-4">Tools</h3>
              <ul className="text-purple-800 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Git
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  VS Code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Docker
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  AWS
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Interests</h2>
          <p className="mb-6">
            Outside of coding, I enjoy flying aircrafts, travelling, cooking and very passionate about music. I believe that having
            diverse interests helps in bringing fresh perspectives to
            problem-solving and creative thinking in development.
          </p>
        </div>
      </div>
    </div>
  );
}
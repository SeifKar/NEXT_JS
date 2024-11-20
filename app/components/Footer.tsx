const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="mailto:brianseif01@gmail.com" className="text-gray-600 hover:text-blue-600">
              Email
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SeifKar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

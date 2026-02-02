export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find requested resource</p>
      <a 
        href="/" 
        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors apple-transition"
      >
        Return Home
      </a>
    </div>
  );
}
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mt-4 text-xl">Page Not Found</h2>
      <p className="mt-4 text-gray-600">The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="mt-6 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  )
}
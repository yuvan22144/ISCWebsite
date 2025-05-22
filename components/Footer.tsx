export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            className="mx-2 hover:text-zinc-400"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="mx-2 hover:text-zinc-400"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="mx-2 hover:text-zinc-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

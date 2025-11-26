import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-black text-center">
        <Image
          className="dark:invert mb-6"
          src="logo.svg"
          alt="ZephyrDev logo"
          width={140}
          height={48}
          priority
        />

        <h1 className="text-4xl font-extrabold text-black dark:text-zinc-50 mb-4">
          ZephyrDevs
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-6">
          A lightweight Next.js starter. This site is deployed using Vercel (auto
          deploys on push). If you want GitHub Pages, the repository contains an
          export workflow that publishes a static build to the `gh-pages` branch.
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/tsetzer3clt/zephyrdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-900"
          >
            View on GitHub
          </a>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Vercel
          </a>
        </div>
      </main>
    </div>
  );
}

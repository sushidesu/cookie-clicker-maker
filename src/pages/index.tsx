import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Cookie Clicker Maker</h1>
        <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
          Start
        </button>
      </main>
    </div>
  )
}

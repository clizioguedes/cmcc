import { getArticles } from '@/http/requests/get-articles'

export default async function HomePage() {
  let teste = {}

  try {
    const articles = await getArticles()
    teste = articles
  } catch (error) {
    console.log(error)
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <pre>
        <code>{JSON.stringify(teste, null, 2)}</code>
      </pre>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>

      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  )
}

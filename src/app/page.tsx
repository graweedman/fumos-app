import { db } from "@/db"
import { users } from "@/db/schema"

export default async function Home() {

  const result = await db.select().from(users)

  return (
    <main >
      <h1 className="">{JSON.stringify(result)}</h1>
    </main>
  )
}

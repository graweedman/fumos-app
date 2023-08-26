import { prisma } from "@/db"

export default async function Home() {

  const fumos = await prisma.fumos.findMany()

  return (
    <>
      <ul className="">{fumos.map(fumo => (
        <li key="fumo.id">{fumo.name}</li>
        ))}
      </ul>
    </>
  )
}

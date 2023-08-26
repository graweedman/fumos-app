import { prisma } from "@/db"

export default async function Fumos() {
    const fumos = await prisma.fumos.findMany()
    return (
        <main>
            <ul className="">{fumos.map(fumo => (
                <li key="fumo.id">{fumo.name}</li>
                ))}
            </ul>
        </main>
    )
}

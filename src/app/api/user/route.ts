import { db } from '@/db'


export async function GET() {

    const result = await db.query.users.findFirst({
        with: {
            profile: true
        }
    })

    result?.profile
}
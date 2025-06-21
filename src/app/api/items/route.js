import dbConnect from "@/lib/dbConnect"


export async function GET() {

    const result = await dbConnect('coffee').find({}).toArray()

    return Response.json(result)

}


export async function POST(req) {

    const data = await req.json()
    const result = await dbConnect('coffee').insertOne(data)
    return Response.json(result)
}
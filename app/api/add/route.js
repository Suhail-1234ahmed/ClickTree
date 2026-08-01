import clientPromise from "@/lib/mongodb";


export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("clicktree") 
    const collection = db.collection("link")
    const result = await collection.insertOne(body)
    return Response.json({
        success: true,error:false,message:'added', result:result,
    });
}
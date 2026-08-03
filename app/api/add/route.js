import clientPromise from "@/lib/mongodb";


export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("clicktree") 
    const collection = db.collection("link")
    //if  link alredy exits
    const doc = await collection.findOne({handle:body.handle})
    if(doc){
           return Response.json({
        success: false,error:true,message:'your link is alredy exist', result:null,
    });
    }
    const result = await collection.insertOne(body)
    return Response.json({
        success: true,error:false,message:'your link has been added', result:result,
    });
}
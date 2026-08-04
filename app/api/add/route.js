import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("clicktree");
    const collection = db.collection("link");

    const doc = await collection.findOne({
        handle: body.handle
    });

    if (doc) {
        return Response.json({
            success: false,
            message: "Handle already exists."
        });
    }

    const result = await collection.insertOne({
        handle: body.handle,
        pic: body.pic,
        links: body.links
    });

    return Response.json({
        success: true,
        message: "ClickTree created successfully.",
        result
    });
}
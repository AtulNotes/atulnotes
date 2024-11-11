
export async function GET(request, { params }) {

    const { searchParams } = new URL(request.url);
    // const paramValue = searchParams.get('slug');
    const paramValue = searchParams.slug;
    console.log(searchParams.slug);
    
    
    return Response.json({ name: "atul", paramValue: paramValue });
}
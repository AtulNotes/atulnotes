import Navbar from "@/components/Navbar";
export default async function Page({ params }) {
    const slug = (await params).slug
    return (
        <>
            <Navbar />
            <div>My Post: {slug}</div>
        </>
    )
}
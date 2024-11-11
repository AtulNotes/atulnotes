
import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";
import Slide from "@/components/Slide";

export default async function Page({ params }) {
    const slug = (await params).slug
    let URL = process.env.URL;

    const response = await fetch(`${process.env.API_URL}/json/docs.json`);
    const data = await response.json();
    
    let slugs =  await fetch(`${URL}/apis/docs?slug=${slug}`);
    
    console.log(slugs);
    
    return (
        <>
        <Navbar/>
        <nav className="sidebar astro-vrdttmbt" aria-label="Main">
            <button
                aria-expanded="false"
                aria-label="Menu"
                aria-controls="starlight__sidebar"
                className="sl-flex md:sl-hidden astro-jif73yzw">
                <svg
                    aria-hidden="true"
                    className="astro-jif73yzw astro-c6vsoqas"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                        d="M3 8h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
                    />
                </svg>
            </button>
            <div className="main-frame astro-vrdttmbt">
                <div className="lg:sl-flex astro-67yu43on">
                    <Aside data={data} />
                    <div className="main-pane astro-67yu43on">
                        <main data-pagefind-body lang="en" dir="ltr" className="astro-bguv2lll">
                            <div className="content-panel astro-7nkwcw3z max-width">
                                <div className="sl-container astro-7nkwcw3z">
                                    {/* <h1 id="_top" className="astro-j6tvhyss">{title}</h1> */}
                                </div>
                            </div>
                            <div>
                                <div className="content-panel astro-7nkwcw3z max-width">
                                    <div className="sl-container astro-7nkwcw3z">
                                        <div className="sl-container astro-7nkwcw3z">
                                            <div className="sl-markdown-content">
                                                {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Slide data={data}/>
        </nav>
    </>
    )
}
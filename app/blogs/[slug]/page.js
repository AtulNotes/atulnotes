
import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";
import Slide from "@/components/Slide";
import htmltoContent from "@/utils/htmltoContent";
const matter = require('gray-matter');

export default async function Page({ params }) {
    const slug = (await params).slug

    // Data Fetching
    const response = await fetch(`${process.env.API_URL}/json/blogs.json`);
    const slideData = await response.json();
    
    // Slug Fetching
    let page = slug.split('%40')[0];
    let lang = slug.split('%40')[1];
    if (page === 'home') {
        var slugsResponse = await fetch(`https://atul22g-notesapi.pages.dev/blogs/home.md`);
    } else {
        var slugsResponse = await fetch(`https://atul22g-notesapi.pages.dev/blogs/${lang}/${page}.md`);
        
    }
    let slugsText = await slugsResponse.text();
    const { content, data } = matter(slugsText)

    // content to html
    let htmlContent = await htmltoContent(content);
    
    
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
                    <Aside  data={htmlContent} />
                    <div className="main-pane astro-67yu43on">
                        <main data-pagefind-body lang="en" dir="ltr" className="astro-bguv2lll">
                            <div className="content-panel astro-7nkwcw3z max-width">
                                <div className="sl-container astro-7nkwcw3z">
                                    <h1 id="_top" className="astro-j6tvhyss">{data.title}</h1>
                                </div>
                            </div>
                            <div>
                                <div className="content-panel astro-7nkwcw3z max-width">
                                    <div className="sl-container astro-7nkwcw3z">
                                        <div className="sl-container astro-7nkwcw3z">
                                            <div className="sl-markdown-content">
                                                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Slide slugP={page} page="blogs" data={slideData}/>
        </nav>
    </>
    )
}
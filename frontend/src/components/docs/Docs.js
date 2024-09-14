import React, { useState, useEffect } from 'react';
import Slide from './Slide'
import Aside from './Aside'

const Docs = () => {
    const [data, setData] = useState({});
    // const [pagePara, setPagePara] = useState('');

    const fetchData = async () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const page = params.get('page');
        // setPagePara(page);

        try {
            // const response = await fetch(`../../json/data/${page}.json`);
            const response = "";
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
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
                        <Aside />
                        <div className="main-pane astro-67yu43on">
                            <main data-pagefind-body lang="en" dir="ltr" className="astro-bguv2lll">

                                <div >
                                    {/* {
                                        data && data.length > 0 && data.map((item, index) => {
                                            return (
                                                <div key={index} className="content-panel astro-7nkwcw3z">
                                                    <div className="sl-container astro-7nkwcw3z">
                                                        <h1 id={item.id} className="astro-j6tvhyss">{item.title}</h1>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    } */}
                                    <div className="content-panel astro-7nkwcw3z">
                                        <div className="sl-container astro-7nkwcw3z">
                                            <div className="sl-container astro-7nkwcw3z">
                                                <div className="sl-markdown-content">
                                                    {/* {
                                                        data && data.length > 0 && data.map((item, index) => {
                                                            let content = item.content;
                                                            return (
                                                                content && content.length > 0 && content.map((item, index) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            <h2 id={item.id}>{item.title}</h2>
                                                                            <p className="sl-markdown-content " dangerouslySetInnerHTML={{ __html: item.content }} />
                                                                        </div>
                                                                    )
                                                                })
                                                            )
                                                        })
                                                    } */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <Slide />

                {/*  */}
            </nav>

            {/*  */}
        </>
    )
}

export default Docs
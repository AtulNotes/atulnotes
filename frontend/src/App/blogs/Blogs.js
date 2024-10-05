import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Aside from './Aside';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkRehype from 'remark-rehype';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { transformerCopyButton } from '@rehype-pretty/transformers'

const Blogs = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const fetchData = async () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const page = params.get('page');
        const lang = params.get('lang');
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blogs/${lang}/${page}`, options);
            const textData = await response.json();
            const { content, data } = textData;


            const processor = unified()
                .use(remarkParse)
                .use(remarkRehype)
                .use(rehypeFormat)
                .use(rehypeStringify)
                .use(rehypeSlug)
                .use(rehypeAutolinkHeadings)
                .use(rehypePrettyCode, {
                    theme: "github-dark",
                    transformers: [
                        transformerCopyButton({
                            visibility: 'hover',
                            feedbackDuration: 3_000,
                        }),
                    ],
                })

            const htmlContent = (await processor.process(content)).toString();
            setTitle(data.title);
            setContent(htmlContent);
        } catch (error) {
            console.error('Error: Fetching data Failed');
            window.location.href = "/";
        }
    };

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
                        <Aside htmlContent={content} />
                        <div className="main-pane astro-67yu43on">
                            <main data-pagefind-body lang="en" dir="ltr" className="astro-bguv2lll">
                                <div className="content-panel astro-7nkwcw3z max-width">
                                    <div className="sl-container astro-7nkwcw3z">
                                        <h1 id="_top" className="astro-j6tvhyss">{title}</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-panel astro-7nkwcw3z max-width">
                                        <div className="sl-container astro-7nkwcw3z">
                                            <div className="sl-container astro-7nkwcw3z">
                                                <div className="sl-markdown-content">
                                                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
            </nav>
        </>
    );
};

export default Blogs;

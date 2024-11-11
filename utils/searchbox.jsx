// "use client";
import { DeactiveSearchFunc } from '@/func/navfunc';
import React, { useState } from 'react';
import Image from 'next/image'

export const Search = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <dialog
                style={{ padding: 0 }}
                aria-label="Search"
                className="astro-v37mnknz"
            >
                <div className="dialog-frame sl-flex astro-v37mnknz">
                    <span className="cursor-pointer">
                        <Image onClick={() => DeactiveSearchFunc()} src="/svgs/cross.svg" width="15" height="15" alt="cross" />
                    </span>
                    <div className="search-container astro-v37mnknz">
                        <div id="starlight__search" className="astro-v37mnknz">
                            <div className="pagefind-ui svelte-e9gkc3 pagefind-ui--reset">
                                <form className="pagefind-ui__form svelte-e9gkc3" role="search">
                                    <input className="pagefind-ui__search-input svelte-e9gkc3" type="text" placeholder="Search" value={search}
                                        onChange={e => setSearch(e.target.value)} />
                                </form>
                                <div className={search ? 'pagefind-ui__results-area svelte-e9gkc3' : 'pagefind-ui__results-area svelte-e9gkc3 d-none'}>
                                    <p className="pagefind-ui__message svelte-e9gkc3">Searching for {search}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-frame astro-vrdttmbt hero-section">
        <div className="lg:sl-flex astro-67yu43on">
          <div className="main-pane astro-67yu43on">
            <main data-pagefind-body lang="en" dir="ltr" className="astro-bguv2lll ml-3">
              <div className="content-panel astro-7nkwcw3z max-width">
                <div className="sl-container astro-7nkwcw3z">
                  <div className="hero astro-jbfsktt5 ml-3">
                    <div className="sl-flex stack astro-jbfsktt5">
                      <div className="sl-flex copy astro-jbfsktt5">
                        <h1 id="_top" data-page-title className="astro-jbfsktt5">
                          Welcome to AtulNotes
                        </h1>
                        <div className="tagline astro-jbfsktt5">
                          Next-gen documentation that builds reading habits into
                          your workflow.
                        </div>
                      </div>
                      <div className="sl-flex actions astro-jbfsktt5">
                        <Link
                          className="sl-flex action primary astro-yjy4zhro"
                          href="docs/home">
                          Check out the docs
                          <svg
                            aria-hidden="true"
                            className="astro-yjy4zhro astro-c6vsoqas"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                              d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
                          </svg>
                        </Link>
                        <a
                          className="sl-flex action secondary astro-yjy4zhro"
                          href="blogs?page=home">
                          Blogs
                          <svg
                            aria-hidden="true"
                            className="astro-yjy4zhro astro-c6vsoqas"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                              d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

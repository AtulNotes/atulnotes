import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkRehype from 'remark-rehype';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { transformerCopyButton } from '@rehype-pretty/transformers'

const htmltoContent = async (content) => {
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

    return htmlContent;
}

export default htmltoContent;
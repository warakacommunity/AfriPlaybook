import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {usePluginData} from '@docusaurus/useGlobalData';
import Heading from '@theme/Heading';
import { IconArrowRight } from '@site/src/components/Icons';
import styles from '../index.module.css';

export default function BlogTeaserSection() {
  const {withBaseUrl} = useBaseUrlUtils();
  // Custom plugin "recent-blog-posts" (defined in docusaurus.config.js) exposes
  // the latest posts in a flat shape — easier to consume than digging into the
  // stock blog plugin's internal structure.
  const blogData = usePluginData('recent-blog-posts');
  const posts = (blogData?.recentPosts ?? []).slice(0, 4);

  if (posts.length === 0) return null;

  const resolveImg = (img) => {
    if (!img) return null;
    return /^https?:\/\//.test(img) ? img : withBaseUrl(img);
  };

  return (
    <section className={clsx(styles.section, styles.altSection, styles.snapSection)} data-snap-section="blog">
      <div className="container">
        <div className={styles.blogTeaserHeader}>
          <Heading as="h2" className={styles.blogTeaserHeading}>
            From the Blog
          </Heading>
          <Link className={styles.blogTeaserViewAll} to="/blog">
            View all articles <IconArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.blogTeaserGrid}>
          {posts.map((post) => {
            const {
              title,
              permalink,
              date,
              description,
              frontMatter,
              authors,
              tags,
            } = post;
            const tag = tags?.[0]?.label;
            const imageSrc = resolveImg(frontMatter?.image);
            const author = authors?.[0];
            const authorImg = author && resolveImg(author.imageURL);
            const dateStr = new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            return (
              <Link
                key={permalink}
                to={permalink}
                className={styles.blogTeaserCard}>
                {imageSrc && (
                  <div className={styles.blogTeaserThumb}>
                    <img
                      src={imageSrc}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className={styles.blogTeaserBody}>
                  {tag && (
                    <span className={styles.blogTeaserTag}>{tag}</span>
                  )}
                  <h3 className={styles.blogTeaserCardTitle}>{title}</h3>
                  {description && (
                    <p className={styles.blogTeaserExcerpt}>{description}</p>
                  )}
                  <div className={styles.blogTeaserAuthor}>
                    {authorImg && (
                      <img
                        src={authorImg}
                        alt={author.name}
                        className={styles.blogTeaserAuthorAvatar}
                        loading="lazy"
                      />
                    )}
                    <div className={styles.blogTeaserAuthorMeta}>
                      {author?.name && (
                        <span className={styles.blogTeaserAuthorName}>
                          {author.name}
                        </span>
                      )}
                      <span className={styles.blogTeaserDate}>{dateStr}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

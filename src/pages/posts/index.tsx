import {GetStaticProps} from 'next';
import Head from 'next/head';
import * as prismic from '@prismicio/client';
import {RichText} from 'prismic-dom';
import Link from 'next/link';

import getPrismicClient from '../../services/prismic';

import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  exerpt: string;
  updateAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({posts}: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link key={post.slug} href={`/posts/preview/${post.slug}`}>
              <a>
                <time>{post.updateAt}</time>
                <strong>{post.title}</strong>
                <p>{post.exerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicClient = getPrismicClient();

  const response = await prismicClient.get({
    predicates: prismic.predicate.at('document.type', 'post'),
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      exerpt:
        post.data.content.find(content => content.type === 'paragraph')?.text ??
        '',
      updateAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
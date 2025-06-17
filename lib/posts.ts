// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
export type Post = {
    slug: string;
    title: string;
    description: string;
    date: string;
    mediumLink: string;
    linkedinLink?: string; // optional
  };

  export function getAllPosts(): Post[] {
    const files = fs.readdirSync(postsDirectory);
  
    return files.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
  
      const { data } = matter(fileContents);
  
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        description: data.description,
        date: data.date,
        mediumLink: data.mediumLink,
        linkedinLink: data.linkedinLink,
      };
    });
  }
  

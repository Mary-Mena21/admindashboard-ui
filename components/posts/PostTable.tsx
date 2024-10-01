import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';
// import { Button } from '../ui/button';
interface PostTableProps {
  limit?: number;
  title?: string;
  // posts: Post[];
}
const PostTable = ({ limit, title }: PostTableProps) => {
  //Sort posts by date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  //Filter posts to limit
  const limitedPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  return (
    <>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-5">
          {title ? title : 'post'}
        </h3>
        <Table>
          <TableCaption>A list of recent posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Author</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">View</TableHead>
              {/* <TableHead className='hidden md:table-cell'>Comments</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {limitedPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.author}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.date}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {/* <Link href={`/posts/edit/${post.id}`}> */}
                  {/* <Button variant="secondary">Edit</Button> */}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                  {/* </Link> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PostTable title="post" limit={5} />
    </>
  );
};

export default PostTable;

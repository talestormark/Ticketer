import { Post, PostRequest, PostResponse } from '../types';
import restHandler from './restHandler';

export async function createPost(request: PostRequest): Promise<PostResponse> {
  // antar alltid at alt går bra :)

  const response: PostResponse =
    await restHandler.postWithResponse<PostResponse>('/post/create', request);

  // TODO: legge til feilhåndtering
  console.log(response);
  return response;
}

export async function getPosts(): Promise<Post[]> {
  // antar alltid at alt går bra :)

  const posts: Post[] = await restHandler.get<Post[]>('/post');

  // TODO: legge til feilhåndtering
  return posts;
}

export async function getPostsByAuthorId(authorId: number): Promise<Post[]> {
  // antar alltid at alt går bra :)

  const posts: Post[] = await restHandler.get<Post[]>('/post/user/' + authorId);

  // TODO: legge til feilhåndtering
  return posts;
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const concertPosts: Post[] = await restHandler.get<Post[]>(
    '/post/' + category
  );

  return concertPosts;
}

export async function changePost(
  postId: number,
  request: PostRequest
): Promise<Post> {
  // antar alltid at alt går bra :)

  const post: Post = await restHandler.put<Post>('/post/' + postId, request);

  // TODO: legge til feilhåndtering
  return post;
}

export async function deletePost(id: number): Promise<string> {
  // antar alltid at alt går bra :)

  const posts: string = await restHandler.delete('/post/' + id);

  // TODO: legge til feilhåndtering
  return posts;
}

export async function sellPost(postId: number): Promise<PostResponse> {
  // antar alltid at alt går bra :)

  const response: PostResponse = await restHandler.put<PostResponse>(
    '/post/sell/' + postId
  );
  console.log(response);
  // TODO: legge til feilhåndtering
  return response;
}

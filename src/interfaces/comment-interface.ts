export interface Comment {
  id: string;
  author: string;
  content: string;
  voteCount: number;
  children: Comment[];
}

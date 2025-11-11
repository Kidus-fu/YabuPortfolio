export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export interface Feedback {
  id: number;
  name: string;
  comment: string;
  date?: string;
}
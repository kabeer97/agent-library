
export interface UseCase {
  id: string;
  title: string;
  badges: Array<{ text: string; color?: string }>;
  description: string;
  integrations: Array<{
    src: string;
    alt: string;
    type?: 'image' | 'placeholder';
    backgroundColor?: string;
  }>;
  category: string[];
  type: string;
}

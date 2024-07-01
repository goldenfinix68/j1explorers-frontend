export interface SpanDetail {
  className?: string;
  title: string;
}

export interface SpanGroupProps {
  content: SpanDetail[];
  className?: string;
}

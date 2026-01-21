import type { PropsWithChildren, ReactNode } from "react";

interface SimpleCardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

export function SimpleCard({ title, children, footer }: SimpleCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children} </div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
}

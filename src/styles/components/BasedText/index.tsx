import { iBasedTextProps } from "./types";

export const BasedText = ({ children, className, tag }: iBasedTextProps) => {
  return (
    <>
      {tag === "Headline" && <span className={className}>{children}</span>}
      {tag === "HeadlineBold" && <span className={className}>{children}</span>}
      {tag === "HeadlineItalic" && (
        <span className={className}>{children}</span>
      )}
    </>
  );
};

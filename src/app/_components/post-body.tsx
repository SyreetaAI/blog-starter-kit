import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        // pb-0 and mb-0 remove the bottom spacing of the blog container
        // -mt-4 pulls the content slightly higher if needed
        className={`${markdownStyles["markdown"]} pb-0 mb-[-60px]`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

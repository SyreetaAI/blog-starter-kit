import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        // We add 'mb-0' or 'pb-4' here to kill the extra space
        style={{ marginBottom: '0px', paddingBottom: '20px' }} 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  // This automatically colors every mention of Syreeta.ai in your text
  const brandedContent = content.replace(
    /Syreeta\.ai/g, 
    '<span style="color: #0F172A; font-weight: bold;">Syreeta</span><span style="color: #F97316; font-weight: bold;">.ai</span>'
  );

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: brandedContent }}
      />
    </div>
  );
}

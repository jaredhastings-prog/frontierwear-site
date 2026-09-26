import type { ReactNode } from "react";

export function MediaFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-blue/25 bg-[#080d16] shadow-[0_24px_70px_rgba(71,112,219,0.18)]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_28%_18%,rgba(71,112,219,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

export function YouTubeEmbed({
  title,
  videoId
}: {
  title: string;
  videoId: string;
}) {
  return (
    <MediaFrame>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
      />
    </MediaFrame>
  );
}

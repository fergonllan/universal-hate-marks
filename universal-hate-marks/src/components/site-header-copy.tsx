import { siteMeta } from "@/content/site-content";

export function SiteHeaderCopy() {
  return (
    <div className="site-header-copy">
      <div className="brand-row">
        <h1 className="site-title">{siteMeta.projectShortName}</h1>
        <span className="brand-badge">Civic Tech Research</span>
      </div>
    </div>
  );
}

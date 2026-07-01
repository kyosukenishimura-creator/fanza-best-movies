"use client";

import { useEffect, useRef } from "react";

type Props = {
  bannerId: string;
};

export default function BannerAd({ bannerId }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const scriptId = `fanza-banner-${bannerId}`;
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.className = "widget-banner-script";
    script.src = `https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=fanzame-001&banner_id=${bannerId}`;
    ref.current.appendChild(script);
  }, [bannerId]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
      <div ref={ref}>
        <ins className="widget-banner" />
      </div>
    </div>
  );
}

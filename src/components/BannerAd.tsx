"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_BANNER = "1732_300_250";
const PC_BANNER = "1742_640_100";

export default function BannerAd() {
  const ref = useRef<HTMLDivElement>(null);
  const [bannerId, setBannerId] = useState<string | null>(null);

  useEffect(() => {
    const id = window.innerWidth >= 768 ? PC_BANNER : MOBILE_BANNER;
    setBannerId(id);
  }, []);

  useEffect(() => {
    if (!bannerId || !ref.current) return;
    ref.current.innerHTML = "";
    const ins = document.createElement("ins");
    ins.className = "widget-banner";
    ref.current.appendChild(ins);
    const script = document.createElement("script");
    script.className = "widget-banner-script";
    script.src = `https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=fanzame-001&banner_id=${bannerId}`;
    ref.current.appendChild(script);
  }, [bannerId]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
      <div ref={ref} />
    </div>
  );
}

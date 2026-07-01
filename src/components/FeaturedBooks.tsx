const books = [
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_743574%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_743574/d_743574pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_755406%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_755406/d_755406pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_426055%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/game/d_426055/d_426055pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_556317%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_556317/d_556317pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_460182%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_460182/d_460182pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_748548%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_748548/d_748548pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_755865%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_755865/d_755865pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_367181%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_367181/d_367181pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_147216%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_147216/d_147216pl.jpg" },
  { href: "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flovecul.dmm.co.jp%2Fbl%2F-%2Fdetail%2F%3D%2Fcid%3Dd_779085%2F&af_id=fanzame-001&ch=search_link&ch_id=package", img: "https://doujin-assets.dmm.co.jp/digital/comic/d_779085/d_779085pl.jpg" },
];

export default function FeaturedBooks() {
  return (
    <section style={{ padding: "48px 0 40px" }}>
      <style>{`
        .featured-books-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }
        @media (max-width: 600px) {
          .featured-books-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
        }
        .featured-books-item {
          display: block;
          border-radius: 4px;
          overflow: hidden;
          transition: opacity 0.2s, transform 0.2s;
        }
        .featured-books-item:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
      `}</style>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ color: "#b5838d", fontSize: 11, letterSpacing: "0.2em", marginBottom: 6 }}>PICKUP</p>
        <h2 style={{ fontSize: 18, fontWeight: "400", color: "#1c1c1c", letterSpacing: "0.1em" }}>管理人おすすめ作品</h2>
        <p style={{ color: "#999", fontSize: 12, marginTop: 6 }}>腐女子歴15年のみつきが実際に読んで良かった作品</p>
      </div>
      <div className="featured-books-grid">
        {books.map((book, i) => (
          <a
            key={i}
            href={book.href}
            rel="sponsored"
            target="_blank"
            className="featured-books-item"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={book.img}
              alt={`おすすめBL作品 ${i + 1}`}
              style={{ margin: 0, padding: 0, border: 0, width: "100%", display: "block" }}
            />
          </a>
        ))}
      </div>
      <p style={{ textAlign: "center", color: "#ccc", fontSize: 10, marginTop: 12 }}>
        ※ アフィリエイトリンクを含みます
      </p>
    </section>
  );
}

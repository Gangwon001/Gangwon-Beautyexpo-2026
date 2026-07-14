"use client";

import { useEffect, useState } from "react";

const brands = [
  {
    id: "smedicos", name: "SMEDICOS", company: "에스메디코스", category: "HAIR & SKIN SCIENCE",
    tagline: "차세대 엑소좀 기반 헤어·스킨 부스터", keywords: ["Nexotide™", "Hair Booster", "Skin Booster"],
    image: "/brands/smedicos.jpg", site: "https://raclia.co.kr/", catalog: "/catalogs/Smedicos.pdf",
    copy: "독자적인 차세대 줄기세포 유래 기술을 바탕으로 두피와 피부의 회복 가능성을 연구합니다. 전문 시술용 STEMIR22 헤어 부스터와 STEMIDE31 스킨 부스터를 선보입니다.",
  },
  {
    id: "kustogen", name: "KUSTOGEN", company: "커스토젠", category: "MICROBIOME CARE",
    tagline: "피부와 두피 미생물 생태계의 균형", keywords: ["AK-20", "Microbiome", "PDRN"],
    image: "/brands/kustogen.jpg", site: "http://en.akshooter.com/", catalog: "/catalogs/KUSTOGEN.pdf",
    copy: "강원대학교 연구 기반의 마이크로바이옴 기술로 피부 트러블과 두피 고민에 접근합니다. Akshooter, Blancshooter, 고순도 PDRN 스킨케어 Hwido를 전개합니다.",
  },
  {
    id: "delaluz", name: "DE LA LUZ", company: "델라루즈", category: "NATURE & RADIANCE",
    tagline: "자연에서 발견한 맑고 건강한 빛", keywords: ["Glutathione", "Microbiome", "Lifting"],
    image: "/brands/delaluz.jpg", site: "http://delaluz.biz/eng/", catalog: "/catalogs/DELALUZ.pdf",
    copy: "피부 본연의 빛을 자연에서 찾는 스킨케어 브랜드입니다. 글루타치온 브라이트닝, 식물 줄기세포 리프팅, 마이크로바이옴 밸런스 라인을 제안합니다.",
  },
  {
    id: "facebloom", name: "FACEBLOOM", company: "페이스블룸", category: "PROFESSIONAL PEEL",
    tagline: "회복 부담을 낮춘 새로운 메디컬 필링", keywords: ["C³ Formula", "Zero Flaking", "Clinical"],
    image: "/brands/facebloom.jpg", site: "https://facebloom.kr/", catalog: "/catalogs/Facebloom.pdf",
    copy: "CLEAR·CALM·COMPLETE의 C³ 포뮬러로 얼굴부터 두피와 바디까지 확장하는 프로페셔널 필링 솔루션입니다. 필링 후 진정과 보습 밸런스까지 하나의 프로토콜로 설계합니다.",
  },
  {
    id: "yeinme", name: "YEINME", company: "예인미코스메틱", category: "FEMININE CLEAN BEAUTY",
    tagline: "여성의 일상에 자연스럽게 피어나는 클린 뷰티", keywords: ["Feminine Care", "Clean Beauty", "Bio-cellulose"],
    image: "/brands/yeinme.jpg", site: "https://www.yeinme.com/", catalog: "/catalogs/Yeinme.pdf",
    copy: "여성 청결과 바디 케어에 특화된 제조 역량을 바탕으로 딥씨워터, 프로바이오틱스, 식물 유래 성분을 활용합니다. 지속가능한 여성 케어와 프리미엄 마스크 솔루션을 제안합니다.",
  },
  {
    id: "bscare", name: "BSCARE", company: "비에스케어", category: "BEAUTY DEVICE",
    tagline: "집에서 완성하는 전문 풋 케어 루틴", keywords: ["Foot Care", "LED", "Home Device"],
    image: "/brands/bscare.jpg", site: "http://www.bscare.co.kr/", catalog: "/catalogs/BSCARE.pdf",
    copy: "전문 케어의 원리를 일상으로 가져오는 홈 뷰티 디바이스 기업입니다. 발톱·발 관리에 특화된 PLAWAY-B와 PEDIZEN 라인으로 간편하고 체계적인 풋 케어를 제공합니다.",
  },
];

type Brand = (typeof brands)[number];

export default function Home() {
  const [selected, setSelected] = useState<Brand | null>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { window.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <main>
      <header className="topbar">
        <a href="#top" className="mark" aria-label="처음으로"><span>GW</span><b>BEAUTY COLLECTIVE</b></a>
        <nav aria-label="주요 메뉴"><a href="#collective">Collective</a><a href="#brands">6 Brands</a><a href="#visit">Visit</a></nav>
        <a className="nav-cta" href="#brands">Explore brands <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="eyebrow"><span>GANGWON STATE PRESENTS</span><span>2026 · KINTEX</span></div>
        <h1><span>BEAUTY</span><span><em>RISING</em> FROM</span><span>GANGWON</span></h1>
        <p className="hero-copy">Premium Korean Beauty Brands<br/>from Gangwon State</p>
        <div className="event-ticket">
          <div><small>K-BEAUTY EXPO KOREA 2026</small><strong>15—17 OCT</strong></div>
          <div><small>LOCATION</small><strong>KINTEX Ⅰ · HALL 3—5</strong></div>
          <a href="#brands" aria-label="브랜드 살펴보기">↓</a>
        </div>
        <div className="orb orb-one"/><div className="orb orb-two"/><div className="orb orb-three"/>
      </section>

      <section className="manifesto" id="collective">
        <p className="section-label">01 / THE COLLECTIVE</p>
        <h2>One province.<br/>Six new perspectives<br/>on <i>beauty.</i></h2>
        <div className="manifesto-side"><span className="vertical">GANGWON STATE · K-BEAUTY</span><p>클린 뷰티에서 바이오 기술, 프로페셔널 케어와 뷰티 디바이스까지. 서로 다른 전문성이 하나의 강원 뷰티 공동관에서 연결됩니다.</p></div>
      </section>

      <section className="brands-section" id="brands">
        <div className="section-head"><div><p className="section-label">02 / MEET THE SIX</p><h2>Six brands.<br/>Distinct brilliance.</h2></div><p>브랜드를 선택해 핵심 기술과 제품을 확인하세요.<br/><span>Select a brand to discover more.</span></p></div>
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <button className="brand-card" key={brand.id} onClick={() => setSelected(brand)} aria-label={`${brand.name} 자세히 보기`}>
              <img src={brand.image} alt={`${brand.name} 대표 제품 카탈로그`} />
              <div className="card-wash" />
              <span className="brand-number">0{index + 1}</span>
              <div className="brand-meta"><small>{brand.category}</small><h3>{brand.name}</h3><p>{brand.tagline}</p></div>
              <span className="card-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="visit" id="visit">
        <p className="section-label">03 / VISIT US</p>
        <div className="visit-grid"><h2>See what’s<br/><i>next.</i></h2><div className="visit-details"><div><small>WHEN</small><strong>2026. 10. 15 THU<br/>— 10. 17 SAT</strong><span>10:00—17:00</span></div><div><small>WHERE</small><strong>KINTEX 1<br/>HALL 3—5</strong><span>Ilsan, Goyang</span></div></div></div>
        <p className="visit-note">바이어와 파트너를 기다립니다.<br/>강원 뷰티의 다음 장을 공동관에서 직접 만나보세요.</p>
      </section>

      <footer><div className="footer-brand"><span>GW</span><b>GANGWON<br/>BEAUTY COLLECTIVE</b></div><p>Presented by Gangwon State<br/>at K-BEAUTY EXPO KOREA 2026</p><a href="#top">BACK TO TOP ↑</a></footer>

      {selected && (
        <div className="modal-backdrop" onMouseDown={(e) => e.currentTarget === e.target && setSelected(null)} role="presentation">
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="brand-title">
            <button className="close" onClick={() => setSelected(null)} aria-label="닫기">×</button>
            <div className="modal-image"><img src={selected.image} alt=""/><span>{selected.category}</span></div>
            <div className="modal-copy"><p className="section-label">GW BEAUTY / {selected.company}</p><h2 id="brand-title">{selected.name}</h2><h3>{selected.tagline}</h3><p>{selected.copy}</p><div className="chips">{selected.keywords.map(k => <span key={k}>{k}</span>)}</div><div className="modal-actions"><a href={selected.site} target="_blank" rel="noreferrer">Official website ↗</a><a href={selected.catalog} target="_blank">View catalog ↓</a></div></div>
          </section>
        </div>
      )}
    </main>
  );
}

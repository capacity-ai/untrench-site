const LOGOS = [
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Phoenix_logo.webp', alt: 'City of Phoenix' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Denver_logo.png', alt: 'City of Denver' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/NYC_logo.png', alt: 'New York City' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Norfolk_logo.png', alt: 'City of Norfolk' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Pinellas_County_logo.png', alt: 'Pinellas County' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Alexandria_logo.png', alt: 'City of Alexandria' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Irving_logo.png', alt: 'City of Irving' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Nevada_County_logo.png', alt: 'Nevada County' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/Rochcester_logo.png', alt: 'City of Rochester' },
  { src: 'https://info.polco.us/hs-fs/hubfs/Logos/Clients/American_Canyon_logo.webp', alt: 'City of American Canyon' },
];

// Duplicate for seamless loop
const TRACK = [...LOGOS, ...LOGOS];

export default function CustomerLogos() {
  return (
    <section className="relative z-10 border-b hairline bg-[color:var(--paper)] overflow-hidden py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-7">
        <p className="mono text-[11px] uppercase tracking-[0.2em] opacity-50 text-center">
          Trusted by 1,000+ communities &middot; 50 states &middot; 30+ years
        </p>
      </div>
      <div className="logo-track-wrap">
        <div className="logo-track">
          {TRACK.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="logo-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { site } from "@/content/site";

/** Calendly inline embed once `site.calendlyUrl` is set; a neutral slot until then. */
export default function BookingEmbed() {
  if (!site.calendlyUrl) {
    return <div className="booking-slot">Online scheduling will appear here.</div>;
  }
  const src = `${site.calendlyUrl}?hide_gdpr_banner=1&background_color=fdfcf9&text_color=2b2928&primary_color=3b6348`;
  return <iframe className="booking-frame" src={src} title={`Schedule a consultation with ${site.name}`} loading="lazy" />;
}

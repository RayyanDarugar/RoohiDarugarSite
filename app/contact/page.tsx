import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/sections";
import ContactForm from "@/components/ContactForm";
import BookingEmbed from "@/components/BookingEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a free consultation with Roohi Darugar, CRPC®, financial advisor in San Diego.",
};

export default function Contact() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Let's start with a conversation"
        body="Your first consultation is free and there's no obligation. Book a time that works for you, or send a note."
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2>Meet with Roohi</h2>
            <p className="muted" style={{ marginTop: 18, maxWidth: "40ch" }}>
              We&apos;ll talk about where you are, where you want to be, and whether we&apos;re a good fit. In person or by video.
            </p>
            <div className="info-list">
              <div><div className="eyebrow">Email</div><a href={`mailto:${site.email}`}>{site.email}</a></div>
              <div><div className="eyebrow">Office</div>{site.address}</div>
              <div><div className="eyebrow">Meetings</div>In person, by video, or by phone</div>
              <div>
                <div className="eyebrow">Background</div>
                <a href={site.brokerCheckUrl} target="_blank" rel="noopener noreferrer">View Roohi on FINRA BrokerCheck</a>
              </div>
            </div>
          </div>

          <div className="booking">
            <div className="eyebrow">Book a free consultation</div>
            <BookingEmbed />
            <div className="eyebrow" style={{ marginBottom: 18 }}>Or send a message</div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

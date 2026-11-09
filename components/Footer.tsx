import Link from "next/link";
import { disclosures, site } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Logo />
            <p style={{ marginTop: 22 }}>
              {site.address}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <h2 className="fh">Explore</h2>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/who-i-serve">Who I Serve</Link></li>
              <li><Link href="/who-i-serve#stories">Client Stories</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="fh">Learn</h2>
            <ul>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="fh">Disclosures</h2>
            <ul>
              <li><a href={site.brokerCheckUrl} target="_blank" rel="noopener noreferrer">FINRA BrokerCheck</a></li>
              <li>
                <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer">FINRA</a> ·{" "}
                <a href="https://www.sipc.org/" target="_blank" rel="noopener noreferrer">SIPC</a>
              </li>
              <li><a href={site.formCrsUrl} target="_blank" rel="noopener noreferrer">LPL Financial Form CRS</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          {disclosures.map((d) => (
            <p key={d}>{d}</p>
          ))}
          <p>
            Check the background of this financial professional on{" "}
            <a href={site.brokerCheckUrl} target="_blank" rel="noopener noreferrer">FINRA&apos;s BrokerCheck</a>.
          </p>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

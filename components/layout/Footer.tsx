import { Mail, Phone, MessageCircle } from "lucide-react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.3-.4-4 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = () => <MessageCircle size={16} className="inline-block mr-2" />;
const CallIcon = () => <Phone size={16} className="inline-block mr-2" />;
const MailIcon = () => <Mail size={16} className="inline-block mr-2" />;

export function Footer() {
  return (
    <footer className="w-full py-12 relative overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-widest text-white mb-2 font-heading">
            SACHIDANANDA PATTANAIK
          </h3>
          <p className="text-sm text-foreground/50">
            Designing smarter and more efficient living spaces.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <a href="https://wa.me/+918260586277" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/50 hover:text-white transition-colors flex items-center">
              <WhatsappIcon />+91 8260586277
            </a>
            <a href="tel:+918260586277" className="text-sm text-foreground/50 hover:text-white transition-colors flex items-center">
              <CallIcon />+91 8260586277
            </a>
            <a href="mailto:pattnaiksachidananda0@gmail.com" className="text-sm text-foreground/50 hover:text-white transition-colors flex items-center">
              <MailIcon />pattnaiksachidananda0@gmail.com
            </a>
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a href="/#about" className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors">About</a>
          <a href="/#projects" className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors">Projects</a>
          <a href="/#insights" className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors">Insights</a>
          <a href="/#experience" className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors">Experience</a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/sachidananda-pattanaik-9955762a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[var(--color-neon-cyan)] transition-colors"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/the-sachiix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[var(--color-neon-purple)] transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/the_sachiix/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[var(--color-neon-pink)] transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="mailto:pattnaiksachidananda0@gmail.com"
            className="text-foreground/70 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

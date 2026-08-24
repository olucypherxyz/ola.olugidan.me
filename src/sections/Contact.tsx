import React from 'react';
import Button from '@/components/ui/Button';
import { contact, social } from '@/config/portfolio';

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-block chapter-contact"
      aria-labelledby="contact-heading"
    >
      <span className="contact-o" aria-hidden="true" />
      <div className="container-site contact-inner">
        <p className="eyebrow mb-3">Contact</p>
        <h2 id="contact-heading" className="section-heading contact-heading">
          {contact.heading}
        </h2>
        <p className="contact-line">{contact.line}</p>
        <div className="contact-actions">
          <Button href={`mailto:${social.email}`} variant="onDark" external>
            {social.email}
          </Button>
          <Button href={social.linkedin} variant="onDarkOutline" external>
            LinkedIn
          </Button>
          <Button href={social.github} variant="onDarkOutline" external>
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

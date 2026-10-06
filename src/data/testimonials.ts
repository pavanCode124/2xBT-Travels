export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
  /** Optional photo under /public/images/. */
  photo?: string;
};

/**
 * Real traveller reviews only. Nothing is invented here: drop in verbatim
 * quotes (with permission) from Google, Instagram or WhatsApp and the
 * section on the homepage appears by itself. Leave it empty and the page
 * shows the Google reviews invitation instead.
 */
export const testimonials: Testimonial[] = [];

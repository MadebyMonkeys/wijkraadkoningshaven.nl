export const type = "event";
export const layout = "layouts/event-post.vto";
export const templateEngine = "vto,md";
export const description = "Aankomende evenementen";

export function url(page) {
  return `/events/${page.data.title}/`
}

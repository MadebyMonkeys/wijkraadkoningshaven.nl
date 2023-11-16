export const type = "post";
export const layout = "layouts/nieuws-post.vto";
export const templateEngine = "vto,md";
export const description = "Lokale nieuws";

export function url(page) {
  return `/nieuws/${page.data.title}/`
}

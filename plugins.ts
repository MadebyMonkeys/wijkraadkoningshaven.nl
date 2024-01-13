import { Page, Site } from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import date, { Options as DateOptions } from "lume/plugins/date.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import decapCMS from "lume/plugins/decap_cms.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";

import nl from "npm:date-fns/locale/nl/index.js";

export interface Options {
  date?: Partial<DateOptions>;
  pagefind?: Partial<PagefindOptions>;
}

export default function (options: Options = {}) {
  return (site: Site) => {
    site
      .use(resolveUrls())
      .use(date(options.date))
      .use(picture())
      .use(transformImages())
      .use(inline())
      .use(metas())
      .use(decapCMS({
        identity: "netlify",
      }))
      .use(postcss())
      .use(sass())
      .use(svgo())
      .use(date({
        locales: { nl },
      }))
      
      .copy("fonts")
      .copy("js")
      .copy("static", ".");
  }
}
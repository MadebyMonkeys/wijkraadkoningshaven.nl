import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import imagick from "lume/plugins/imagick.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import netlify_cms from "lume/plugins/netlify_cms.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";
import vento from "lume/plugins/vento.ts";

import nl from "npm:date-fns/locale/nl/index.js";

const site = lume({
  location: new URL("https://wijkraadkoningshaven.nl"),
});

site
  .use(date())
  .use(imagick())
  .use(inline())
  .use(metas())
  .use(netlify_cms())
  .use(postcss())
  .use(sass())
  .use(svgo())
  .use(vento())
  .use(date({
    locales: { nl },
  }))

  .copy("static", ".");

export default site;

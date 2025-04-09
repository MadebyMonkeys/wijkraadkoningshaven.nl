import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import purgecss from "lume/plugins/purgecss.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";
import transform_images from "lume/plugins/transform_images.ts";
import decapCMS from "lume/plugins/decap_cms.ts";

import { nl } from "npm:date-fns/locale/nl";

export default function () {
    return (site: Lume.Site) => {
        /** 🔹 Filters */
        site
            .filter("getRelatedPosts", (postList, tags) =>
                postList.filter((post) =>
                    tags.some((tag) => post.tags.includes(tag))
                )
            );


        /** 🔹 Plugins */
        site
            .use(date({
                locales: { nl },
            }))
            .use(favicon({
                input: "/images/logo.svg",
              }))
            .use(svgo())
            .use(inline())
            .use(transform_images())
            .use(sass())
            .use(postcss())
            .use(purgecss())
            .use(metas())
            .use(robots())
            .use(decapCMS());
        
        
        /** 🔹 Copy files */
        site
            .copy("js")
            .copy("static", ".");
    }
}

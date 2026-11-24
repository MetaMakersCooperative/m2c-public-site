import { _facilityImages } from '@/data/facility';
import { _navItems } from '@/data/navigation';
import { _zonePages } from '@/data/zones';
import { _events } from '@/data/events';
import type { MetadataRoute } from 'next'
export const dynamic = "force-static";

export const BASE_URL = "https://metamakers.org";
export default function sitemap(): MetadataRoute.Sitemap {
    const main: MetadataRoute.Sitemap = [{
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
        images: [`${BASE_URL}/images/home.webp`, ..._zonePages.map((x)=> `${BASE_URL}/${x.image}`), ..._facilityImages.map((x) => `${BASE_URL}/${x.imageSrc}`)]
    },{
        url: `${BASE_URL}/faq`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },{
        url: `${BASE_URL}/join`,
        lastModified: new Date("2026-03-25"),
        changeFrequency: "yearly",
        priority: 0.9,
    },{
        url: `${BASE_URL}/gear-up`,
        lastModified: new Date("2026-03-25"),
        changeFrequency: "yearly",
        priority: 0.9,
        images: [`${BASE_URL}/images/funding/sponsor-wall.webp`]
    },
    ];
    const old: MetadataRoute.Sitemap = [{
        url: `${BASE_URL}/grants/csrf`,
        lastModified: new Date("2023-11-02"),
        changeFrequency: "never",
        priority: 0.0,
    },{
        url: `${BASE_URL}/assets/event.pdf`,
        lastModified: new Date("2026-03-25"),
        changeFrequency: "yearly",
        priority: 0.1,
    },{
        url: `${BASE_URL}/assets/membership_form.pdf`,
        lastModified: new Date("2026-03-25"),
        changeFrequency: "yearly",
        priority: 0.1,
    },{
        url: `${BASE_URL}/assets/SOP.pdf`,
        lastModified: new Date("2026-03-25"),
        changeFrequency: "yearly",
        priority: 0.1,
    },{
        url: `${BASE_URL}/assets/waiver.pdf`,
        lastModified: new Date("2026-03-25"),
        changeFrequency: "yearly",
        priority: 0.1,
    }];
    const pages: MetadataRoute.Sitemap = _navItems
        .filter((page) => page.submenu == null)
        .map((page) => {
            return {
                url: BASE_URL + page.href,
                lastModified: new Date(),
                changeFrequency: page.changes,
                priority: page.priority,
            };
        });
    const subPages: MetadataRoute.Sitemap = _navItems
        .filter((page) => page.submenu != null)
        .map((page) => page.submenu!
            .map((subPage) => {
                return {
                    url: BASE_URL + subPage.href,
                    lastModified: new Date(),
                    changeFrequency: subPage.changes,
                    priority: subPage.priority,
                    images: subPage.zone ? [`${BASE_URL}/${subPage.zone.image}`, ...subPage.zone.facilityImages.map((x) => `${BASE_URL}/${x.imageSrc}`), ...(subPage.zone.benefits?.map((x) => `${BASE_URL}/${x.image}`) ?? []) ] : undefined
                };
            })
        ).reduce((a, b) => a.concat(b), []);
    const events: MetadataRoute.Sitemap = _events.map((event) => ({
        url: `${BASE_URL}/events/${event.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
        images: [event.image, ...event.photos.map((x) => x.imageSrc)].map((x) => `${BASE_URL}/${x}`),
    }));
    return [...main, ...pages, ...subPages, ...events, ...old];
}

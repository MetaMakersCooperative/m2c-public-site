import { _facilityImages } from '@/data/facility';
import { _navItems } from '@/data/navigation';
import { _zonePages } from '@/data/zones';
import type { MetadataRoute } from 'next'
export const dynamic = "force-static";

export const BASE_URL = "https://m2c-test.niksteel.net";
export default function sitemap(): MetadataRoute.Sitemap {
    const home: MetadataRoute.Sitemap = [{
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
        images: [`${BASE_URL}/images/home.webp`, ..._facilityImages.map((x) => `${BASE_URL}/${x.imageSrc}`)]
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
    return [...home, ...pages, ...subPages];
}
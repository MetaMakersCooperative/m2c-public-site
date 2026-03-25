import { _zonePages, ZoneProps } from "./zones";

export const HEADER_HEIGHT = "72px";
export const HEADER_ALWAYS_SHOW_TOP = 150;

export interface NavItem {
    label: string,
    href: string,
    zone?: ZoneProps,
    priority?: number,
    changes?: "monthly" | "daily" | "weekly" | "always" | "hourly" | "yearly" | "never" | undefined;
    submenu?: NavItem[]
}

export const _navItems: NavItem[] = [
    { label: "About", href: "/about", priority: 0.9, changes: "monthly" },
    { label: "Membership", href: "/membership", priority: 0.9, changes: "monthly" },
    { label: "Classes", href: "/classes", priority: 0.9, changes: "weekly" },
    {
        label: "Zones",
        href: "#zones",
        submenu: _zonePages.map((zone) => ({
            label: zone.name,
            href: `/${zone.slug}`,
            priority: 0.8,
            changes: "weekly",
            zone
        })),
    },
    {
        label: "Funding", href: "/sponsorship",
        submenu: [
            {
                label: "Sponsorship",
                href: `/sponsorship`,
                priority: 0.7,
                changes: "monthly"
            },
            // {
            //   label: "Grants",
            //   href: `/grants`,,
            //   priority: 0.7, 
            //   changes: "monthly" 
            // }
        ]
    },
    {
        label: "Contact",
        href: "/contact",
        priority: 0.9,
        changes: "monthly"
    },
];
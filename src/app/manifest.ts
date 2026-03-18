import { MetadataRoute } from 'next'
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Meta Makers',
        short_name: "M2C",
        description: "Meta Makers Cooperative Makerspace",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                "src": "/logos/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/logos/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}
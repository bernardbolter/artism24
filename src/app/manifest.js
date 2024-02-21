export default function manifest() {
    return {
        name: 'Artism.org',
        short_name: "artism",
        description: "Artism.org - AR for artists",
        start_url: '/',
        display: 'standalone',
        background_color: '#F7F7F7',
        theme_color: '#B0A272',
        icons: [
            {
                "src": "/images/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/images/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}
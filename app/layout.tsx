import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Khaled Amr - Back-End Developer',
	description:
		'Welcome to my portfolio! I am a passionate Back-End developer with a focus on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.',
	keywords: [
		'Back-End Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Khaled Amr',
	],
	authors: [{ name: 'Khaled Amr' }],
	creator: 'Khaled Amr',
	openGraph: {
		title: 'Khaled Amr - Back-End Developer Portfolio',
		description: 'Passionate Back-End developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://your-domain.com',
		siteName: 'Khaled Amr - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Khaled Amr - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

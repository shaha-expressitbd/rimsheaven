import { notosans } from "@/lib/fonts";
import { AppProviders } from "@/lib/Provider/AppProvider";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

// Site constants
const SITE_URL = "https://rimsheavencom";
const OG_IMAGE_URL = `/assets/logo.png`;

export const metadata: Metadata = {
  title: "rimsheaven  | Your Ultimate Shopping Destination",
  description:
    "Discover unbeatable deals on electronics, fashion, home goods & more at rimsheaven !",
  verification: {
    google: "lbyp2dC9_aYxIWYVGEV5cnZ74DaZK40hAyrvvfiZqCQ",
  },
  openGraph: {
    title: "rimsheaven  | Your Ultimate Shopping Destination",
    description:
      "Discover unbeatable deals on electronics, fashion, home goods & more at rimsheaven !",
    url: SITE_URL,
    siteName: "rimsheaven ",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "rimsheaven  logo on shopping-cart background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rimsheaven  | Your Ultimate Shopping Destination",
    description:
      "Discover unbeatable deals on electronics, fashion, home goods & more at rimsheaven !",
    images: [OG_IMAGE_URL],
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>rimsheaven  | Your Ultimate Shopping Destination</title>

        {/* FACEBOOK  */}
        {process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION && (
          <meta
            name="facebook-domain-verification"
            content={process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION}
          />
        )}
        {/* GOOGLE */}
        {process.env.NEXT_PUBLIC_GOOGLE_DOMAIN_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_DOMAIN_VERIFICATION}
          />
        )}
        <link rel="dns-prefetch" href="//cdn.cloudecalquick.xyz" />
        <link
          rel="preconnect"
          href="https://cdn.cloudecalquick.xyz"
          crossOrigin="anonymous"
        />

        <Script
          id="fb-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1439819667585841');
fbq('track', 'PageView');

        `,
          }}
        />
      </head>
      <body className={`${notosans.className} w-full max-w-screen h-screen`}>
        <AppProviders>
          <main className="bg-white dark:bg-gray-800 cursor-default">
            <Toaster richColors position="top-center" closeButton />
            {children}
          </main>
        </AppProviders>

        {/* Scroll Depth Tracking Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            if (typeof window === 'undefined' || window.__scrollDepthTracked) return;
            window.__scrollDepthTracked = true;
            var depths = [25, 50, 75, 100];
            var fired = {};
            function trackScrollDepth() {
              var scrollTop = window.scrollY || window.pageYOffset;
              var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              var winHeight = window.innerHeight;
              var scrolled = ((scrollTop + winHeight) / docHeight) * 100;
              depths.forEach(function(depth) {
                if (!fired[depth] && scrolled >= depth) {
                  fired[depth] = true;
                  if (window.dataLayer) {
                    window.dataLayer.push({ event: 'scroll_depth', percent: depth });
                  }
                }
              });
            }
            window.addEventListener('scroll', trackScrollDepth);
          })();
        `,
          }}
        />
        {/* Global Error Logging */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.onerror = function(message, source, lineno, colno, error) {
              console.error('Error:', { message, source, lineno, colno, error });
              return true;
            };
          `,
          }}
        />

        {/* GTM noscript fallback */}

      </body>
    </html>
  );
}

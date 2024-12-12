import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

const img = require("../public/Background.png");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC3oL50ESMwlRfPqFJTrFT9yp4cw0Xhh5E",
//   authDomain: "crunkbot-9fad2.firebaseapp.com",
//   projectId: "crunkbot-9fad2",
//   storageBucket: "crunkbot-9fad2.firebasestorage.app",
//   messagingSenderId: "1005781049030",
//   appId: "1:1005781049030:web:34db4b6de9d760df1e01c7",
//   measurementId: "G-CG409NN7WQ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "red" },
  ],
};
const asdasd = {
  ".nav": {
    visibility: "hidden",
  },
  height: "100vh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx("  font-sans antialiased", fontSans.variable)}
        style={asdasd}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main
            style={{
              width: "100vw",
              height: "100vh",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                backgroundImage: "url(/Background.png)",
                backgroundAttachment: "fixed",
              }}
            >
              <div
                style={{ height: "100%", overflow: "hidden", paddingTop: 30 }}
              >
                {children}
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

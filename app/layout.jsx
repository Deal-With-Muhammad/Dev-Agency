import "./globals.css";
// import { Providers } from "./Providers";
import { Navigation } from "./Navigation";
export const metadata = {
  title: "Genieaura | Cutting-Edge Website Design & Custom Digital Solutions",
  description:
    "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
  keywords: [
    "website design",
    "UX/UI design",
    "web development",
    "full-stack development",
    "custom websites",
    "digital solutions",
    "social media management",
    "motion graphics",
    "3D motion graphics",
    "3D video production",
    "3D modeling",
    "interactive design",
    "creative digital agency",
    "multimedia design",
    "3D rendering services",
    "website redesign",
    "branding and design",
    "responsive web design",
    "animation services",
    "digital marketing solutions",
    "advanced video production",
    "digital media strategy",
  ],
  openGraph: {
    title: "Genieaura | Cutting-Edge Website Design & Custom Digital Solutions",
    description:
      "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
        <Navigation />
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}

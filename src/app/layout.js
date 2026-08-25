import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "./globals.css";

export const metadata = {
  title: "Chamodi Indrejith",
  description: "Portfolio of Chamodi Indrejith, a Temporary Demonstrator in ICT at the University of Vavuniya with software engineering experience, research interests in Kubernetes autoscaling observability, and a background in IT, project management, and UI/UX design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased leading-8 overflow-x-hidden bg-white dark:bg-gray-950 text-foreground">
        {children}
      </body>
    </html>
  );
}

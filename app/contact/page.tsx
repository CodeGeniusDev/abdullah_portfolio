"use client";
import { Github, Mail, Instagram, Linkedin, Globe } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Instagram size={20} />,
    href: "https://instagram.com/codegenius.dev",
    label: "Instagram",
    handle: "@codegenius.dev",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/CodeGeniusDev",
    label: "GitHub",
    handle: "CodeGeniusDev",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/abdullah-abbad",
    label: "LinkedIn",
    handle: "Abdullah Abbad",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:codegenius.inc@gmail.com",
    label: "Email",
    handle: "codegenius.inc@gmail.com",
  },
  {
    icon: <Globe size={20} />,
    href: "https://portfolio.triplealpha.blog",
    label: "Website",
    handle: "portfolio.triplealpha.blog",
  },
];

export default function Example() {
  return (
    <div className="py-16 pt-2 sm:pt-6 md:pt-26 lg:pt-32 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About" description="Let's get to know each other" />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="mx-auto mt-8 w-[400px]">
          <div className="relative flex flex-col items-center gap-2 rounded-md bg-cyan-800 px-4 py-6">
            <Image
              src={siteConfig.authorImage}
              width={82}
              height={82}
              alt={siteConfig.name}
              className="absolute -top-8 mb-4 rounded-full border bg-cyan-500"
            />
            <h3 className="mt-8 text-lg font-semibold">{siteConfig.author}</h3>
            <p className="text-center text-sm text-muted-foreground">
              Frontend Engineer
            </p>
            <div className="flex items-center space-x-2">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.path}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-cyan-500 px-0 hover:bg-cyan-500 transition-colors rounded-full p-2 size-8 bg-cyan-500/80"
                  )}
                >
                  <social.icon className="size-6" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="flex-1 text-center text-sm lg:text-start xl:text-base">
            🔭 I’m currently looking for{" "}
            <span className="text-orange-400">Fullstack Developer</span> prefer
            as <span className="text-orange-400"> Frontend</span>
            Developer. <br />
            🤝 I’m looking for help with ChatGPT, Docs, Claude.ai, DeepSeek.{" "}
            <br />
            🌱 I’m currently learning -{" "}
            <span className="text-cyan-500">WebGL</span> | Backend{" "}
            <span className="text-cyan-500">Python/Flask/FasAPI</span> |{" "}
            <span className="text-cyan-500">NestJs</span> <br /> ⚡ Fun fact - I
            like <span className="text-orange-400">cat.</span>
          </p>

          <p className="mt-4">
            {`I'm`} a seasoned Frontend Developer with 5 years of experience,
            specializing in JavaScript, TypeScript, Python. I love transforming
            ideas into interactive digital realities. My journey has equipped me
            with the skills to create user-friendly web applications that
            seamlessly blend design with functionality.
          </p>
        </div>
      </div>
    </div>
  );
}

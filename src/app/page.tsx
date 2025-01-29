import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
        <h1 className="w-full text-left text-3xl capitalize sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, <span className="text-cyan-500">I’m</span> <br />
          <span className="font-semibold text-cyan-500">Diko Mahendra</span>
        </h1>
        <p className="text-left leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex w-full items-center justify-start space-x-2">
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
        <div className="mt-4 flex w-full justify-start space-x-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-lg border bg-cyan-500 px-6 py-4 font-semibold hover:bg-cyan-700"
          >
            My Blog
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

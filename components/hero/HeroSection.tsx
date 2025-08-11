import { Button } from "@heroui/react";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[80vh] text-left">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-primary leading-tight">
              Turning Ideas Into Smart Software
              <br />
              with a Touch of Magic
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              At GenieAura, we craft intelligent, user-friendly web, mobile, and
              AI solutions that help forward-thinking brands grow. Whether it’s
              a stunning website, a powerful app, or an AI-powered tool — we
              make it happen.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                color="primary"
                className="font-semibold px-6 py-3"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="font-semibold px-6 py-3"
              >
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

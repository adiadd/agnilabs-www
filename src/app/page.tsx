import { Endeavours } from "~/components/endeavours";
import { Footer } from "~/components/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-grow font-mono">
        <div className="mx-auto mb-8 mt-20 max-w-4xl px-4">
          <div className="mx-auto">
            <div className="max-w-xl py-5">
              <h1 className="mb-4 h-[80px] cursor-default text-3xl font-bold sm:h-auto">
                <span className="inline-block">
                  <p className="whitespace-pre-wrap md:whitespace-nowrap">
                    🧪 agni labs 🔥
                  </p>
                </span>
              </h1>
              <p className="text-sm">we like to cook fire and fun projects</p>
            </div>
            <Endeavours />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
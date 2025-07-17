import Face from "@/components/Face";
import Project from "@/components/Project";
import ThemeChanger from "@/components/ThemeChanger";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" max-w-screen-sm p-6">
        <main className="flex-1 gap-[64px] flex flex-col">
          <Face />
          <section>
            <h1 className="text-xl font-bold text-foreground-colored-1 mb-[8px]">
              Hi! I&apos;m Mike.
            </h1>
            <p className="text-xl mb-2">
              I specialize in web development, mostly focused on frontend. But I
              also love exploring new technologies — from Rust to Godot.
            </p>
            <p className="text-xl mb-2">
              I&apos;m a big fan of Neovim and always enjoy tweaking
              <br />
              my workflow (Not really).
            </p>
            <p className="text-xl">Sometimes I stream on Twitch.</p>
          </section>
          <section className="flex flex-col gap-[16px]">
            <h2 className="text-xl font-bold text-foreground-colored-2">
              Projects
            </h2>
            <Project
              title="Evotars"
              description="Web-based overlay that adds animated avatars for Twitch chatters"
              link="https://evotars.inferst.com"
            />
            <Project
              title="Touch Deck (In progress)"
              description="Deck for Streamer Bot"
            />
            <Project
              title="Slovo"
              description="Guess the word in Russian with Twitch chatters"
              link="https://slovo.inferst.com"
            />
          </section>
          <section className="flex flex-col gap-[8px]">
            <h2 className="text-xl text-foreground-colored-3 font-bold">
              Connect
            </h2>
            <p>
              Feel free to contact me at{" "}
              <a href="mailto:inferst@gmail.com" className="underline">
                inferst@gmail.com
              </a>
            </p>
            <div className="flex gap-[12px]">
              <a
                href="https://github.com/inferst"
                className="rounded-sm px-3 py-1 text-sm bg-background-highlight hover:bg-foreground-highlight hover:text-background"
              >
                Github
              </a>
              <a
                href="https://t.me/inferst"
                className="rounded-sm px-3 py-1 text-sm bg-background-highlight hover:bg-foreground-highlight hover:text-background"
              >
                Telegram
              </a>
              <a
                href="https://www.twitch.tv/mikerime"
                className="rounded-sm px-3 py-1 text-sm bg-background-highlight hover:bg-foreground-highlight hover:text-background"
              >
                Twitch
              </a>
            </div>
          </section>
        </main>
        <footer className="flex items-center justify-center my-16">
          <ThemeChanger />
        </footer>
      </div>
    </div>
  );
}

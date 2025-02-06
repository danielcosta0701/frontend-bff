import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { HtmlValidatorByInputView } from "./modules/validators/html-validator/views/HtmlValidatorByInput.view";

export default function Home() {
  return (
    <main>
      <header className="w-full flex justify-end absolute top-0 left-0 z-[999999] p-6 px-12 text-white">
        <div className="fixed top-0 left-0 right-0 z-[99999]">
          <div className="grid grid-cols-12 gap-6 p-6 px-12">
            <div className="col-span-1">
              <div className="text-white text-xl">Linta</div>
            </div>
          </div>
        </div>
      </header>

      <section className="flex flex-col min-h-dvh bg-primary">
        <div className="sticky bg-primary top-0 left-0 right-0 z-40">
          <div className="grid grid-cols-12 gap-6 p-6 px-12">
            <div className="col-span-1 opacity-0">
              <div className="text-white text-xl">Linta</div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-12 gap-6 p-12">
          <div className="col-span-full md:col-span-5 flex flex-col justify-between ">
            <h2 className="scroll-m-20 text-4xl tracking-tight first:mt-0 text-white/30 text-pretty">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quidem.
            </h2>
            <ul className="hidden text-4xl md:flex flex-col gap-2 text-white">
              <li>
                HTML Code <span className="text-html5">{"<very soon>"}</span>
              </li>
              <li>
                HTML URL <span className="text-white/30">{"<soon>"}</span>
              </li>
              <li>
                HTML File <span className="text-white/30">{"<soon>"}</span>
              </li>
            </ul>
          </div>

          <div className="col-span-full md:col-start-6 md:col-span-7 flex flex-col justify-center gap-6">
            <Tabs defaultValue="htmlCode" className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-3 bg-white/5">
                <TabsTrigger value="htmlCode" className="data-[state=active]:bg-html5 data-[state=active]:text-white">Code</TabsTrigger>
                <TabsTrigger value="htmlUrl" className="data-[state=active]:bg-html5 data-[state=active]:text-white">URL</TabsTrigger>
                <TabsTrigger value="htmlFile" className="data-[state=active]:bg-html5 data-[state=active]:text-white">File</TabsTrigger>
              </TabsList>
              <TabsContent value="htmlCode" className="flex-1 flex text-white">
                <HtmlValidatorByInputView />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <div className="min-h-screen">
        <div className="flex justify-center sticky top-0 z-20 bg-zinc-300 p-6 px-12">
          <div className="text-white text-xl opacity-0">
            Linta
          </div>

          <NavigationMenu className="hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/tools" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Tools
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <section className="min-h-screen bg-white flex">
          <div className="grid grid-cols-12 gap-6 p-12 flex-1">
            <div className="col-start-2 col-span-10 flex justify-center items-center">
              <h2 className="scroll-m-20 text-4xl tracking-tight first:mt-0">
                code better with us
              </h2>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-zinc-100 flex">
          <div className="grid grid-cols-12 gap-6 p-12 flex-1">
            <div className="col-start-2 col-span-10 flex justify-center items-center">
              <h2 className="scroll-m-20 text-4xl tracking-tight first:mt-0 text-primary">
                {"<soon>"}
              </h2>
            </div>
          </div>
        </section>
      </div>

      <nav className="min-h-screen flex bg-html5 text-white sticky bottom-0 z-[-1]">
        <div className="flex-1 grid grid-cols-12 gap-6 p-12">
          <div className="col-span-full flex justify-between items-end">
            <ul className="text-4xl flex flex-col gap-2 text-white">
              <li>
                HTML Code <span className="text-white/70">{"<very soon>"}</span>
              </li>
              <li>
                HTML URL <span className="text-white/30">{"<soon>"}</span>
              </li>
              <li>
                HTML File <span className="text-white/30">{"<soon>"}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <footer className="bg-primary text-white">
        <div className="grid grid-cols-12 gap-6 py-6 px-12">
          <div className="col-span-full">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              &copy; 2025 Linta. Developed by Daniel Costa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

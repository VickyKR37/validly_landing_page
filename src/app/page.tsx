
import { SignupForm } from "@/components/signup-form";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background animate-fadeIn">
      <header className="py-6 px-6 sm:px-8">
        <div className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-primary">
            Validly
          </span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary tracking-tight">
              Welcome to Validly
            </h1>
            <div className="space-y-4 text-lg sm:text-xl font-body text-foreground/90">
              <p>
                Sign up for early access to Validly.
              </p>
              <p>
                The core features of this site are enabling users to post their business ideas for real feedback from real people and allowing users to find beta testers for their MVPs.
              </p>
              <p className="font-bold text-primary/90">
                Let&apos;s do this!
              </p>
            </div>
            <div className="pt-4 mx-auto md:mx-0 max-w-md">
              <SignupForm />
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <Image
              src="https://placehold.co/500x450.png"
              alt="Placeholder image representing ideas and validation"
              width={500}
              height={450}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="innovation collaboration"
            />
          </div>
        </div>
      </main>

      <footer className="py-6 px-6 sm:px-8 mt-auto">
        <div className="text-center text-sm text-foreground/70 space-x-4">
          <span>© {new Date().getFullYear()} Validly. All rights reserved.</span>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

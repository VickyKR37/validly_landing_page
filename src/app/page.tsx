import { SignupForm } from "@/components/signup-form";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-8 animate-fadeIn bg-background">
      <div className="w-full max-w-xl space-y-8 text-center">
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
        
        <div className="pt-4">
          <SignupForm />
        </div>
      </div>
    </main>
  );
}

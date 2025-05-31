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
            Need to validate a business idea? Need to find beta testers?
          </p>
          <p>
            Sign up for early access to Validly - post your business idea for real feedback from real people and find beta testers for your MVP.
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

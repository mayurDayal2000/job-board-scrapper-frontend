import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/theme-toggler";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button variant="outline">Click me</Button>

      <ThemeToggler />
    </>
  );
}

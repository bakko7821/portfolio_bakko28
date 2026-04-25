import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Works } from "./sections/Works";

export default function App() {
  return (
    <div className="relative flex flex-col gap-0">
      <Header />
      <Hero />
      <Works />
    </div>
  );
}

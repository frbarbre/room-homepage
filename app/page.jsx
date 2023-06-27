import { ImageSlider, Showcase, Discover } from "./components";

export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap">
        <ImageSlider />
        <Discover />
      </div>
      <Showcase />
    </main>
  );
}

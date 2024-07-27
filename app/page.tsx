import Image from "next/image";
import { Banner } from "./components/banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner src='/homeBanner.svg' bannerQuote="Creative Perspectives to Healing"/>
    </main>
  );
}

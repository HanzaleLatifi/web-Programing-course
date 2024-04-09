import Navigation from "../../components/Navigation";

export default function Home() {
  return (
    <main className="grid grid-cols-5 max-w-[1440px] mx-auto bg-slate-800">
      <div className="col-span-1 shadow-xl ">
        <Navigation />
      </div>
      <div className=" col-span-4">2</div>
    </main>
  );
}

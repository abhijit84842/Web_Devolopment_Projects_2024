import Link from "next/link";

export default function Home() {

  return (
   <main>
    <h1 className="text-5xl flex justify-center mt-10">Minor Project</h1>
    <div className="flex justify-center gap-20 mt-20">
      <Link className="text-2xl" href={"/admin"}>Admin Panel</Link>
      <Link className="text-2xl" href={"/userlogin"}>User Panel</Link>
   
    </div>
   </main>
  );
}

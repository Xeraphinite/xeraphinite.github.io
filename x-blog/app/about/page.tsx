import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex justify-center w-full h-52">
        <Image
          src="/next.svg"
          width={200}
          height={200}
          alt="Xeraphinite"
          className="rounded-full bg-gray-200"
        />
      </div>
      <h1 className="flex justify-center text-3xl font-bold my-4">Xeraphinite</h1>
      <div className="flex justify-center">
        <article className="heti w-full max-w-6xl flex justify-center">
          <p>This is a blog about Xeraphinite. 这是一个关于Xeraphinite的博客。</p>
        </article>
      </div>
    </div>
  );
}

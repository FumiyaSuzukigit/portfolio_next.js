import { siteConfig } from "@/config/site";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import { format } from "date-fns";

export default function IndexPage() {
  const posts = allPosts;

  return (
    <>
      <section
        className="pt-10 md:pt-10 lg:py-32 pb-8 md:pb-12"
        style={{
          backgroundImage: `url(/images/background/topPage-001.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-indigo-900">
            Fumiya Suzuki
          </h1>
          <p className="sm:text-xl font-bold leading-normal max-w-[42rem] text-slate-700">
            フルスタックでのwebアプリ開発に取り組んでいます。
            <br />
            情熱を持ってユーザーに満足いただけるアプリの作成に取り組みます！
          </p>
        </div>
      </section>

      <section
        className="container py-8 md:py-12 lg:py-24 bg-slate-50"
        id="post"
      >
        <div className="max-w-[52rem] mx-auto flex flex-col gap-2">
          <div>
            <div className="space-y-4">
              <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
                投稿記事
              </h1>
            </div>
          </div>
          <hr className="my-2" />
          <div className="max-w-[50rem]">
            <a
              href="/"
              className="truncate underline text-blue-500 hover:text-blue-800"
            >
              vercelへのlaravelアプリのデプロイ時のエラーについて
            </a>
            <p className="text-muted-foreground text-sm mt-2">2024-06-18</p>
            {/* {format(post.date, "yyyy/MM/dd")} */}
          </div>
          <hr className="my-2" />
        </div>
      </section>

      <section id="works">
        <div className="container max-w-4xl py-6 lg:py-10">
          <div>
            <div className="space-y-4">
              <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
                制作物 💻
              </h1>
              <p className="text-muted-foreground text-xl">
                ContentLayer/MDXにて作成
              </p>
            </div>
          </div>
          <hr className="my-8" />
          <div className="grid sm:grid-cols-2 gap-10">
            {posts.map((post) => (
              <article
                key={post._id}
                className="relative flex flex-col space-y-2"
              >
                {post.genre && (
                  <p
                    className={`rounded-xl border text-white w-24 text-center flex items-center justify-center ${
                      post.genre === "個人開発" ? "bg-blue-700" : "bg-green-500"
                    }`}
                  >
                    {post.genre}
                  </p>
                )}
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={300}
                    className="rounded-md border bg-muted"
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-muted-foreground text-sm">
                    {format(post.date, "yyyy/MM/dd")}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0"></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skill"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto mb-20">
          <h2 className="font-extrabold text-3xl md:text-6xl">MySkill</h2>
          {/* <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.jsAppRouterやcontetlayerを利用してマークダウン形式でブログ投稿ができます。
          </p> */}
        </div>
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div id="next.js" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground ">
                  v13~/AppRouter/Layouts/NextAuth
                </p>
              </div>
            </div>
          </div>
          <div id="React" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 228"
              >
                <path
                  fill="#00D8FF"
                  d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">React</h3>
                <p className="text-sm text-muted-foreground ">
                  AppRouter/Layouts/APIRoutersの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div id="JavaScript" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#fbc02d"
                  d="M18.774 19.7a3.727 3.727 0 0 0 3.376 2.078c1.418 0 2.324-.709 2.324-1.688c0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156c0-2.567 1.956-4.52 5.012-4.52A5.058 5.058 0 0 1 26.9 10.52l-2.665 1.711a2.327 2.327 0 0 0-2.2-1.467a1.489 1.489 0 0 0-1.638 1.467c0 1.027.636 1.442 2.1 2.078l.856.366c2.908 1.247 4.549 2.518 4.549 5.376c0 3.081-2.42 4.769-5.671 4.769a6.575 6.575 0 0 1-6.236-3.5ZM6.686 20c.538.954 1.027 1.76 2.2 1.76c1.124 0 1.834-.44 1.834-2.15V7.975h3.422v11.683c0 3.543-2.078 5.156-5.11 5.156A5.312 5.312 0 0 1 3.9 21.688Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">JavaScript</h3>
                <p className="text-sm text-muted-foreground ">jQuery</p>
              </div>
            </div>
          </div>
          <div id="TypeScript" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                <path
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">TypeScript</h3>
                <p className="text-sm text-muted-foreground ">
                  AppRouter/Layouts/APIRoutersの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div id="HTML&CSS" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#e44f26"
                  d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
                />
                <path
                  fill="#f1662a"
                  d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                />
                <path
                  fill="#ebebeb"
                  d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
                />
                <path
                  fill="#fff"
                  d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">HTML5&CSS</h3>
                <p className="text-sm text-muted-foreground ">
                  AppRouter/Layouts/APIRoutersの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div id="TailWindCSS" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#38bdf8"
                  d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">TailwindCSS</h3>
                <p className="text-sm text-muted-foreground ">
                  AppRouter/Layouts/APIRoutersの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div id="Laravel" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 264"
              >
                <path
                  fill="#FF2D20"
                  d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35Zm-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773h-.005Zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514l90.843-52.3ZM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97v-.006ZM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893h.01Zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608l17.344-9.986ZM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768l-41.27-23.757Zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986v-47.04Zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918l41.21 23.325Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Laravel</h3>
                <p className="text-sm text-muted-foreground ">
                  v8~/Fortify/Breeze/API
                </p>
              </div>
            </div>
          </div>
          <div id="PHP" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 135"
              >
                <defs>
                  <radialGradient
                    id="logosPhp0"
                    cx=".837"
                    cy="-125.811"
                    r="363.057"
                    gradientTransform="matrix(.463 0 0 .463 76.464 81.918)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFF" />
                    <stop offset=".5" stopColor="#4C6B97" />
                    <stop offset="1" stopColor="#231F20" />
                  </radialGradient>
                </defs>
                <ellipse
                  cx="128"
                  cy="67.3"
                  fill="url(#logosPhp0)"
                  rx="128"
                  ry="67.3"
                />
                <ellipse cx="128" cy="67.3" fill="#6181B6" rx="123" ry="62.3" />
                <path
                  fill="#FFF"
                  d="m152.9 87.5l6.1-31.4c1.4-7.1.2-12.4-3.4-15.7c-3.5-3.2-9.5-4.8-18.3-4.8h-10.6l3-15.6c.1-.6 0-1.2-.4-1.7s-.9-.7-1.5-.7h-14.6c-1 0-1.8.7-2 1.6l-6.5 33.3c-.6-3.8-2-7-4.4-9.6c-4.3-4.9-11-7.4-20.1-7.4H52.1c-1 0-1.8.7-2 1.6L37 104.7c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8c3.9-1.3 7.4-3.4 10.5-6.3c2.5-2.3 4.6-4.9 6.2-7.7l-2.6 13.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.6c1 0 1.8-.7 2-1.6l7.2-37h10c4.3 0 5.5.8 5.9 1.2c.3.3.9 1.5.2 5.2L134.1 87c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h15c.9-.3 1.7-1 1.9-1.9zm-67.6-26c-.9 4.7-2.6 8.1-5.1 10c-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.3 1.6 1.6 4.7.8 8.9zm130-18.6c-4.3-4.9-11-7.4-20.1-7.4h-28.3c-1 0-1.8.7-2 1.6l-13.1 67.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8c3.9-1.3 7.4-3.4 10.5-6.3c2.6-2.4 4.8-5.1 6.4-8c1.6-2.9 2.8-6.1 3.5-9.6c1.7-8.7.4-15.5-3.9-20.5zM200 61.5c-.9 4.7-2.6 8.1-5.1 10c-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.4 1.6 1.7 4.7.8 8.9z"
                />
                <path
                  fill="#000004"
                  d="M74.8 48.2c5.6 0 9.3 1 11.2 3.1c1.9 2.1 2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2c-2.9 2.2-7.3 3.3-13.2 3.3h-8.9l5.5-28.2h10zM39 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8c3.6-1.2 6.8-3.1 9.8-5.9c2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7H52.1L39 105zm74.3-85.4h14.6l-3.5 17.9h13c8.2 0 13.8 1.4 16.9 4.3c3.1 2.9 4 7.5 2.8 13.9L151 87.1h-14.8l5.8-29.9c.7-3.4.4-5.7-.7-6.9c-1.1-1.2-3.6-1.9-7.3-1.9h-11.7l-7.5 38.7h-14.6l13.1-67.5zm76.2 28.6c5.6 0 9.3 1 11.2 3.1c1.9 2.1 2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2c-2.9 2.2-7.3 3.3-13.2 3.3H174l5.5-28.2h10zM153.7 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8c3.6-1.2 6.8-3.1 9.8-5.9c2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7h-28.3L153.7 105z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">PHP</h3>
                <p className="text-sm text-muted-foreground ">
                  AppRouter/Layouts/APIRoutersの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div id="Docker" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#2396ED" rx="60" />
                  <path
                    fill="#fff"
                    d="M141.187 122.123h20.717v-18.744h-20.717v18.744Zm-24.662 0h20.716v-18.744h-20.716v18.744Zm-24.17 0h20.717v-18.744H92.355v18.744Zm-24.17 0H88.41v-18.744H68.186v18.744Zm-24.662 0H64.24v-18.744H43.523v18.744Zm24.663-22.69h20.223V80.69H68.186v18.743Zm24.17 0h20.716V80.69H92.355v18.743Zm24.169 0h20.716V80.69h-20.716v18.743Zm0-22.69h20.716V58h-20.716v18.744ZM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521c48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738Z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Docker</h3>
                <p className="text-sm text-muted-foreground ">
                  チーム開発にて利用
                </p>
              </div>
            </div>
          </div>
          <div id="SQL" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ffda44"
                  d="M8.562 15.256A21.159 21.159 0 0 0 16 16.449a21.159 21.159 0 0 0 7.438-1.194c1.864-.727 2.525-1.535 2.525-2V9.7a10.357 10.357 0 0 1-2.084 1.076A22.293 22.293 0 0 1 16 12.078a22.36 22.36 0 0 1-7.879-1.3A10.28 10.28 0 0 1 6.037 9.7v3.55c0 .474.663 1.278 2.525 2.006Zm0 6.705a15.611 15.611 0 0 0 2.6.741a24.9 24.9 0 0 0 4.838.453a24.9 24.9 0 0 0 4.838-.452a15.614 15.614 0 0 0 2.6-.741c1.864-.727 2.525-1.535 2.525-2v-3.39a10.706 10.706 0 0 1-1.692.825A23.49 23.49 0 0 1 16 18.74a23.49 23.49 0 0 1-8.271-1.348a10.829 10.829 0 0 1-1.692-.825v3.393c0 .466.663 1.271 2.525 2.001ZM16 30c5.5 0 9.963-1.744 9.963-3.894v-2.837a10.5 10.5 0 0 1-1.535.762l-.157.063A23.487 23.487 0 0 1 16 25.445a23.422 23.422 0 0 1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5 10.5 0 0 1-1.535-.762v2.837C6.037 28.256 10.5 30 16 30Z"
                />
                <ellipse
                  cx="16"
                  cy="5.894"
                  fill="#ffda44"
                  rx="9.963"
                  ry="3.894"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">SQL</h3>
                <p className="text-sm text-muted-foreground ">
                  MySQL/PostgreSQL
                </p>
              </div>
            </div>
          </div>
          <div id="Github" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 432 416"
              >
                <path
                  fill="currentColor"
                  d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Github</h3>
                <p className="text-sm text-muted-foreground ">
                  チーム開発にて利用
                </p>
              </div>
            </div>
          </div>
          <div id="other" className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180]">
              <Image
                src="/icon/ロボット円形.svg"
                alt="Logo"
                width="45"
                height="45"
              />
              <div className="space-y-2">
                <h3 className="font-bold">Other skill</h3>
                <p className="text-sm text-muted-foreground break-words">
                  Prisma/Supabase/Vercel/Stripe/Heroku/AWS/microCMS/ContentLayer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24" id="contact">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:font-6xl">Contact</h2>
          <div className="flex justify-center max-w-[24rem mx-auto] gap-4">
            <Image
              src="/icon/ロボット円形.svg"
              alt="Logo"
              width="30"
              height="30"
            />
            <p className="sm:text-lg sm:leading-7">鈴木 文也</p>
          </div>
          <p className="sm:text-lg sm:leading-7">
            webアプリケーションエンジニア/元社会保険労務士
          </p>
          <p className="sm:text-lg sm:leading-7">
            Next.js・Laravel等を用いwebアプリケーションの開発を行っています。
          </p>
          <p className="sm:text-lg sm:leading-7">
            お問い合わせはメールにてお願いします。
          </p>
          <div className="flex justify-center max-w-[24rem mx-auto] gap-4">
            <a
              href="mailto:nojino_second@icloud.com"
              className="text-blue-500 underline hover:text-blue-800"
            >
              nojino_second@icloud.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import { cookies } from "next/headers"

export default async function Home() {
  return (
    <main>
      <form
        action={async () => {
          "use server"
          cookies().set("__Secure-cookie", "value", { secure: true })
          return null
        }}
      >
        <button>Set Cookie as __Secure-cookie</button>
      </form>
      <form
        action={async () => {
          "use server"
          cookies().delete({ name: "__Secure-cookie", secure: true })
          return null
        }}
      >
        <button>Delete Cookie as __Secure-cookie</button>
      </form>
    </main>
  )
}

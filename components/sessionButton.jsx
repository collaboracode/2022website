import { Button } from "reactstrap"
import { useSession, signIn, signOut } from "next-auth/react"
export default function SessionButton() {
  const { data: session } = useSession()
  // return <h1>Hello!!!</h1>
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
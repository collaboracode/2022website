import Link from "next/link";
import { Button } from "reactstrap"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function SessionButton() {
  const [drafts, setDrafts] = useState([])
  const { data: session } = useSession()
  useEffect(() => {
    fetch(`/api/posts/drafts`)
      .then(data =>
        data.json().then(data => {
          setDrafts(data)
        })
      )
  }, [session])
  if (session) {
    return (
      <>
        {drafts && <DraftsDropdown  drafts={drafts} />}
        <Button color="danger" onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      <p className="color-two mr-4">
        Not signed in
      </p>
      <Button color="success" onClick={() => signIn()}>Sign in</Button>
    </>
  )
}

function DraftsDropdown({ drafts }) {
  return <UncontrolledDropdown group className="mr-4 bg-primary">
    <DropdownToggle
      caret
      color="primary"
    >My Drafts</DropdownToggle>
    <DropdownMenu>
      <DropdownItem href={"/blog/new"}>
        Create new
      </DropdownItem>
      {drafts.length > 0 && drafts.map(draft => {
        return (
          <DropdownItem key={draft.id} href={`/blog/edit/${draft.id}`}>
            {draft.title}
          </DropdownItem>
        )
      })}
    </DropdownMenu>
  </UncontrolledDropdown>
}
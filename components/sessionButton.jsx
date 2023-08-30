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
        {/* <p className="color-two mr-4">
          Signed in as {session.user.name}
        </p> */}
        {/* //todo make this a drop down menu */}
        {drafts.length > 0 && <DraftsDropdown drafts={drafts} />}
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
  return <UncontrolledDropdown group className="mr-4">
    <Button color="primary">
      My Drafts
    </Button>
    <DropdownToggle
      caret
      color="primary"
    />
    <DropdownMenu>
      <DropdownItem header>
        Header
      </DropdownItem>
      {drafts.map(draft => {
        return (
          <DropdownItem key={draft.id} Link href={`/blog/${draft.id}`}>
            {/* <Link href={`/blog/${draft.id}`}></Link> */}
            {/* <a href={process.env.ORIGIN}> */}
              {draft.title}
            {/* </a> */}
          </DropdownItem>
        )
      })}
      {/* <DropdownItem text>
      Dropdown Item Text
    </DropdownItem>
    <DropdownItem disabled>
      Action (disabled)
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Foo Action
    </DropdownItem>
    <DropdownItem>
      Bar Action
    </DropdownItem>
    <DropdownItem>
      Quo Action
    </DropdownItem> */}
    </DropdownMenu>
  </UncontrolledDropdown>
}
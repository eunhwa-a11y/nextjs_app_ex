"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const Control = () => {
  const params = useParams(); // useParams를 통해 객체를 만듦
  const id = params.id;
  return(
  <ul>
    <li><Link href="/create">Create</Link></li>
    {id && <>
      <li><Link href={`/update/${id}`}>Update</Link></li>
      <li><button>delete</button></li>
    </>}
  </ul>
  )
}

export default Control;
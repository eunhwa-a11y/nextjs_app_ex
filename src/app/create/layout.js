// page.js 를 보여 줄 틀을 만든 것
export default function Layout(props){
  return(
    <form action="">
      <h2>create</h2>
      {props.children}
    </form>
  )
}
// page.js 를 보여 줄 틀을 만든 것
export default function Layout(props){
  return(
    <div>
      <h2>update</h2>
      {props.children}
    </div>
  )
}
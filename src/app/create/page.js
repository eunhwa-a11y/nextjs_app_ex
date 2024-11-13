"use client";
import { useRouter } from 'next/navigation'

export default function Create() {
  
  const router = useRouter();
  const onSubmit = (e)=>{
    // fetch 함수 옵션 사용
    const options = {
      method:'POST',
      headers:{ // post 방식으로 넘어가는 형식 지정
        'Content-Type':'application/json'
      },
      /*
      사용자가 입력한 제목, 내용을 stringify를 사용해서 object -> json으로 변경
      title=제목&body=내용
      {title : "제목", body : "내용"} object-객체
      {"title" : "제목", "body" : "내용"} json
      */
      body:JSON.stringify({title, body}) //object->json
    }
    fetch('http://localhost:9999/topics', options)
      .then(res => res.json()) // 결과를 json에서 object-객체로 변환
      .then(result => {
        console.log(result);
        router.push(`/read/${result.id}`); // 등록한 글 번호
        router.refresh();
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="title" placeholder="title"/>
        </div>
        <div>
          <textarea name="body" placeholder="content"></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
      <hr/>
    </div>
  );
}
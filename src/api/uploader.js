//공식 홈페이지에서 제공하고 있는 예제 코드
export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json()) //받아온 결과를 json으로변환
    .then((data) => data.url); // 그 데이터 안에 있는 url(이미지위치)을 추출하여 리턴
}

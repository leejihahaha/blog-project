import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, remove, set, update } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// 쓸때는 set
export async function addPost(post, image) {
  const id = uuidv4();
  const now = new Date();
  const date = now.toISOString();
  return set(ref(database, `posts/${id}`), {
    ...post,
    id,
    image,
    title: post.title,
    createdAt: date,
    content: post.content,
  });
}

//읽기
export async function getPost() {
  return get(ref(database, "posts")).then((snapshop) => {
    if (snapshop.exists()) {
      return Object.values(snapshop.val());
    }
    //snapshop이 없으면 빈배열 리턴
    return [];
  });
}

//업데이트
export async function updatePost(post, id) {
  const { image, title, content } = post;
  const now = new Date();
  const date = now.toISOString();
  return update(ref(database, `posts/edit/${id}`), {
    ...post,
    image,
    title,
    createdAt: date,
    content,
  });
}

//삭제
export async function removePost(id) {
  return remove(ref(database, `posts/${id}`));
}

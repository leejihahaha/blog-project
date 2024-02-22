import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 쓸때는 set
export async function addPost(post, image) {
  const id = uuidv4();
  return set(ref(database, `posts/${id}`), {
    ...post,
    id,
    image,
    title: post.title,
    createdAt: new Date()?.toLocaleDateString("ko", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
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

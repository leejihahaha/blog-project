import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, remove, set, update } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const database = getDatabase(app);

// 로그인 시 계정 선택없이 바로 로그인 되는 현상 방지
//인증 동작을 커스터마이징
provider.setCustomParameters({ prompt: "select_account" });
// login
export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // console.log(user);
      return user;
    })
    .catch((error) => console.error(error));
}

//로그아웃 (명령형함수)
export async function logout() {
  return signOut(auth).catch((error) => console.error(error));
}

//인증 상태 관찰자 설정이 변경되면 전달받은 callback함수 호출해주고 변경된 유저정보도 전달
//adminUser가 비동기 함수여서 async를 붙여줌
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      // admin이 없으면 user 리턴 (admin이 없는걸로 간주)
      return user;
    });
}

// 쓸때는 set
export async function addPost(post, title, content, image) {
  const id = uuidv4();
  const now = new Date();
  const date = now.toISOString();
  return set(ref(database, `posts/${id}`), {
    ...post,
    id,
    image,
    title,
    createdAt: date,
    content,
  });
}

//업데이트
export async function updatePost(id, title, content, image) {
  const now = new Date();
  const date = now.toISOString();
  return update(ref(database, `posts/${id}`), {
    title,
    image,
    content,
    updatedAt: date,
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

export async function getPostId(id) {
  return get(ref(database, `posts/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const postData = snapshot.val();
      if (postData && postData.image) {
        return { ...postData, image: postData.image };
      }
      return postData;
    }
    // snapshot이 없으면 null 반환
    return null;
  });
}

//삭제
export async function removePost(id) {
  return remove(ref(database, `posts/${id}`));
}

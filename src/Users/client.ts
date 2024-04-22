import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;



const api = axios.create({
  withCredentials: true,
}) 

export interface User { 
  _id: string; username: 
  string; password: string; role: string;
firstName: string, lastName: string };


// export const signin = async (credentials: User) => {
//   const response = await api.post( `${USERS_API}/signin`, credentials );
//   return response.data;
// };

export const signin = async (credentials:User) => {
  //console.log(`credentials went into client-signin: ${JSON.stringify(credentials)}`);
  const response = await axios.post( `${USERS_API}/signin`, credentials, {
      withCredentials: true
  } );
  console.log(`responded user info full from db received by client.ts: ${JSON.stringify(response.data)}`);
  return response.data;
  };
  
export const profile = async () => {
  const response = await api.post(`${USERS_API}/profile`);
  return response.data;
};
export const updateUser = async (user: any) => {
  const response = await api.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await api.get(`${USERS_API}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await api.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await api.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await api.get(`${USERS_API}/${id}`);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await
    api.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const signup = async (user: any) => {
  // const response = await api.post(`${USERS_API}/Signup`, user);
  // return response.data;
  api.post(`${USERS_API}/signup`, user)
        .then((response) => response.data);
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/Signout`);
  return response.data;
};







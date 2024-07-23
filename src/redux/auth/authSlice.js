import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("");
  },
});

// const user = {
//   userName: "Genii228",
//   password: "qwerty12345@?",
//   email: "qwe@gmail.com",
// };

// const secretKey =
//   "QWERTYUIOP{}ASDFGHJKKL::|ZXCVBNMM<>?QWEqwueqwpopksd;a123949590708--9-0";

// const jwtToken = generateJWT(secretKey, email);

// // headers
// //payload (email)
// // signature
// console.log("qwjroiqjwiroqjw.asdassdasdasdasdasdasdasd.opretportpoertop");

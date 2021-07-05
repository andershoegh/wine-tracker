// import React, { useContext, useState, useEffect } from "react";
// import { firestore } from "../firebase";

// const FirestoreContext = React.createContext();

// export function useFirestore() {
//   return useContext(FirestoreContext);
// }

// export default function FirestoreProvider({ children }) {
//   const [loading, setLoading] = useState(false);

//   const value = {};

//   return (
//     <FirestoreContext.Provider value={value}>
//       {!loading && children}
//     </FirestoreContext.Provider>
//   );
// }

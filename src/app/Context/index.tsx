"use client";
//@ts-nocheck
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userName, setUserName] = useState("gaurav-sunthwal");
  let [aboutMe, setAboutMe] = useState("Gaurav Sunthwal");
  const [stats1 , getStatus1] = useState('')
  const [stats2 , getStatus2] = useState('')
  const [stats3 , getStatus3] = useState('')

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        aboutMe,
        setAboutMe,
        stats1,
        stats2,
        stats3,
        getStatus1,
        getStatus2,
        getStatus3
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

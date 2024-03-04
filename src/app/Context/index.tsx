"use client";
//@ts-nocheck
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userName, setUserName] = useState("gaurav-sunthwal");
  let [aboutMe, setAboutMe] = useState("Gaurav Sunthwal");
  const [border, getBorder] = useState(false);
  const [pcommits, getpCommits] = useState(false);
  const [Lcommits, getLCommits] = useState(false);

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        aboutMe,
        setAboutMe,
        getBorder,
        getpCommits,
        getLCommits,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

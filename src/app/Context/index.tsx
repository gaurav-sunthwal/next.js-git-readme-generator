"use client";
//@ts-nocheck
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userName, setUserName] = useState("Gaurav Sunthwal");
  let [aboutMe, setAboutMe] = useState("Gaurav Sunthwal");

  return (
    <AppContext.Provider value={{ userName, setUserName , aboutMe, setAboutMe }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

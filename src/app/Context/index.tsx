//@ts-nocheck
"use client";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userName, setUserName] = useState("gaurav-sunthwal");
  let [aboutMe, setAboutMe] = useState("Gaurav Sunthwal");
  const [stats1, getStatus1] = useState("");
  const [stats2, getStatus2] = useState("");
  const [stats3, getStatus3] = useState("");
  const [links, setLinks] = useState({
    facebook: "",
    X: "",
    instagram: "",
    Behance: "",
    Discord: "",
    Linkedin: "in/",
    Codepen: "",
    Youtube: "@",
    StackOverflow: "",
    Reddit: "",
    Pinterest: "",
    Twitch: "",
    Medium: "",
    Mastodon: "",
    Tiktok: "",
    Quora: "",
  });
  const [payment , setPayment] = useState({
    paypal : "",
    kofi : "",
    patreon : "",
    bmc : "",
  })
  const [skills, setSkills] = useState([]);
  const [searchfor, setSearchfor] = useState("");
  const LANGUAGESArr = [
    "Ableton",
    "Aiscript",
    "Cpp",
    "Crystal",
    "Clojure",
    "Coffeescript",
    "Css",
    "Dart",
    "Forth",
    "Fortran",
    "Go",
    "Haskell",
    "Haxe",
    "Haxeflixel",
    "Java",
    "Js",
    "Julia",
    "Kotlin",
    "Lua",
    "Matlab",
    "Nim",
    "Perl",
    "Php",
    "Python",
    "R",
    "Ruby",
    "Rust",
    "Scala",
    "Shell",
    "Swift",
    "Typescript",
    "Vala",
  ];
  const Hosting = [
    "Appwrite",
    "Azure",
    "Aws",
    "Cloudflare",
    "Github",
    "Gitlab",
    "Heroku",
    "Netlify",
    "Notion",
    "Openshift",
    "Openstack",
    "Planetscale",
    "Replit",
    "Supabase",
    "Vercel",
    "Wordpress",
  ];
  const allTech = [
    "Activitypub",
    "Actix",
    "Adonis",
    "Angular",
    "Ansible",
    "Apollo",
    "Astro",
    "Bevy",
    "Blazor",
    "Bootstrap",
    "Buefy",
    "Django",
    "Electron",
    "Ember",
    "Fastapi",
    "Flask",
    "Flutter",
    "Gatsby",
    "Graphql",
    "Gtk",
    "Ionic",
    "Laravel",
    "Nextjs",
    "Nuxtjs",
    "Octane",
    "Phoenix",
    "Preact",
    "React",
    "Redux",
    "Remix",
    "Rocket",
    "Sapper",
    "Svelte",
    "Threejs",
    "Vue",
  ];
  const Database = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "SQLServer",
    "OracleDatabase",
    "DynamoDB",
    "Firestore",
    "Cassandra",
    "Redis",
    "MariaDB",
    "Couchbase",
    "Neo4j",
    "Amazon Aurora",
    "Firebase",
    "Elasticsearch",
    "CockroachDB",
    "InfluxDB",
    "RethinkDB",
    "Apache HBase",
    "Apache Cassandra",
    "Memcached",
    "SQLite",
    "ArangoDB",
    "Amazon Neptune",
  ];
  const other = [
    "Androidstudio", "Apple", "Arduino", "Atom", "Blender", "Eclipse", "Emacs", "Githubactions", "Gherkin", "Git", "Intellij", "Ipfs", "Jupyter", "Kafka", "Latex", "Linkedin", "Linux", "Markdown", "Mastodon", "Microsoft", "Neovim", "Nodejs", "Npm", "Obsidian", "Opencv", "Powershell", "Selenium", "Sentry", "Sketch", "Sublimetext", "Twitter", "Ubuntu", "Unity", "Unreal", "Vscode", "Windows", "Xcode", "Yarn"
  ]
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
        getStatus3,
        links,
        setLinks,
        skills,
        setSkills,
        searchfor,
        setSearchfor,
        LANGUAGESArr,
        Hosting,
        allTech,
        Database,
        other,
        payment, 
        setPayment
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}


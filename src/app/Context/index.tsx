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
        other
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

/*

Apologies for misunderstanding. Let's organize all the tools provided in the list you provided, sorted by their popularity:

1. **Languages**:
   - JavaScript (js)
   - Python (py)
   - Java
   - C++
   - C#
   - Ruby
   - TypeScript (ts)
   - Go
   - Swift
   - Kotlin
   - PHP
   - HTML
   - CSS
   - Rust
   - SQL
   - Shell Scripting (bash)
   - Dart
   - MATLAB
   - Lua
   - R
   - Perl
   - Objective-C
   - Julia
   - Assembly
   - Groovy
   - Scala
   - PowerShell
   - VBA
   - F#
   - COBOL
   - Fortran
   - Lisp
   - Scheme
   - VHDL
   - Verilog
   - Pascal
   - Ada
   - Prolog
   - Smalltalk
   - Tcl

2. **Hosting/SaaS**:
   - AWS
   - Azure
   - Heroku
   - Netlify
   - Firebase
   - DigitalOcean
   - Google Cloud Platform (GCP)
   - GitHub Pages
   - Vercel
   - Linode
   - OpenShift
   - OpenStack

3. **Frameworks, Platforms & Libraries**:
   - React
   - Angular
   - Vue
   - TensorFlow
   - Django
   - Flask
   - Node.js
   - Spring
   - Bootstrap
   - jQuery
   - Redux
   - Express
   - Laravel
   - Ruby on Rails
   - .NET
   - Gatsby
   - Next.js
   - Svelte
   - Tailwind CSS
   - GraphQL
   - Apache Kafka
   - Apache Spark
   - Hadoop
   - Pandas
   - NumPy
   - SciPy
   - Beautiful Soup
   - Flask RESTful
   - FastAPI
   - Keras
   - PyTorch
   - Scikit-learn
   - OpenCV
   - NLTK
   - SpaCy
   - Gensim
   - Matplotlib
   - Seaborn
   - Plotly
   - Bokeh
   - D3.js
   - Chart.js
   - Highcharts
   - Leaflet
   - Mapbox
   - OpenLayers
   - React Native
   - Ionic
   - Xamarin
   - Electron
   - Flutter
   - Unity
   - Unreal Engine
   - Godot Engine

4. **Servers**:
   - Nginx
   - Apache
   - Microsoft IIS
   - Express
   - Tomcat
   - LiteSpeed
   - Apache TomEE
   - WildFly
   - Jetty
   - GlassFish

5. **Databases**:
   - PostgreSQL
   - MySQL
   - MongoDB
   - Redis
   - SQLite
   - Microsoft SQL Server
   - Oracle
   - Firebase Realtime Database
   - Amazon RDS
   - DynamoDB
   - Cassandra
   - Couchbase
   - Neo4j
   - MariaDB
   - SQLite
   - RethinkDB

6. **Design**:
   - Figma
   - Adobe Creative Suite (Photoshop, Illustrator, XD, etc.)
   - Sketch
   - Blender
   - GIMP
   - InVision
   - Zeplin
   - Canva
   - Affinity Designer
   - Adobe Spark
   - Procreate

7. **ML/DL**:
   - TensorFlow
   - PyTorch
   - Keras
   - OpenCV
   - Scikit-learn
   - Pandas
   - NumPy
   - Matplotlib
   - Seaborn
   - NLTK
   - SpaCy
   - Gensim
   - Hugging Face Transformers
   - Apache MXNet
   - Fast.ai
   - Caffe
   - Theano
   - Weka
   - RapidMiner
   - Orange
   - BigML

8. **DevOps**:
   - Docker
   - Kubernetes
   - GitHub Actions
   - Terraform
   - Ansible
   - Jenkins
   - CircleCI
   - Travis CI
   - GitLab CI/CD
   - AWS CodeDeploy
   - Azure DevOps
   - Chef
   - Puppet
   - Nagios
   - Prometheus
   - Grafana
   - ELK Stack (Elasticsearch, Logstash, Kibana)
   - Splunk
   - New Relic
   - Datadog
   - Zabbix
   - Pingdom

9. **Other**:
   - Git
   - Visual Studio Code (VSCode)
   - IntelliJ IDEA
   - PyCharm
   - Atom
   - Sublime Text
   - Vim
   - Eclipse
   - Notepad++
   - Visual Studio
   - Xcode
   - Android Studio
   - NetBeans
   - CLion
   - Rider
   - WebStorm
   - PHPStorm
   - MATLAB
   - RStudio
   - Jupyter Notebook
   - Google Colab
   - Anaconda
   - WinSCP
   - PuTTY
   - Cyberduck
   - FileZilla
   - Transmit
   - Postman
   - Insomnia
   - SOAPUI
   - Wireshark
   - Charles Proxy
   - Burp Suite
   - ngrok
   - Fiddler
   - Selenium
   - Puppeteer
   - Cypress
   - Appium
   - Ranorex
   - TestComplete
   - HP UFT (Unified Functional Testing)
   - LoadRunner
   - JMeter
   - Katalon Studio
   - Robot Framework
   - SpecFlow
   - Cucumber
   - Serenity BDD
   - Gauge
   - Gherkin
   - FitNesse
   - Codeception
   - Behat
   - Mockito
   - JUnit
   - NUnit
   - TestNG
   - Jasmine
   - Mocha
   - Jest
   - PHPUnit
   - PyTest
   - Cucumber-JVM
   - Selenium WebDriver
   - Appium
   - Protractor
   - SoapUI
   - Rest-Assured
   - Karate DSL
   - Geb
   - Sahi
   - Apache JMeter
   - Gatling
   - Locust
   - Artillery
   - K6
   - Taiko
   - Cypress
   - TestCafe
   - Nightwatch.js
   - WebdriverIO
   - Puppeteer
   - Playwright
   - Apache Bench (ab)
   - Siege
   - Vegeta
   - Hey
   - Loader.io
   - Wrk
   - JMeter
   - Gatling
   - Locust
   - Artillery
   - K6
   - Taiko
   - Cypress
   - TestCafe
   - Nightwatch.js
   - Web

driverIO
   - Puppeteer
   - Playwright
   - Apache Bench (ab)
   - Siege
   - Vegeta
   - Hey
   - Loader.io
   - Wrk






*/

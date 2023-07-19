<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=680&height=40&lines=MISSION+5:+BE+A+NEXTJS+NINJA+(MODULE:+24+-+27)" alt="MISSION 5: BE A NEXTJS NINJA (MODULE: 24 - 27)" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=380&height=21&lines=Module+24:+Fundamentals+of+Next.Js" alt="Module 24: Fundamentals of Next.Js" />

<hr/>

<br/>

<details>
    <summary> Text Instructions Let's Start Our Journey With NextJs </summary>

```text
    তোমার প্রথম প্রেম জাভাস্ক্রিপ্ট। দ্বিতীয় প্রেম React আর তৃতীয় প্রেম হলো Next.Js !!! (মডিউল 24)
    
    #module_release
    
    #mission_be_a_nextjs_ninja
    
    #module_24  
    
    
    
    আজকে তোমার জন্য স্বরনীয় দিন। আজকে থেকে তুমি তোমার জীবনের নতুন দিগন্ত শুরু করতে যাচ্ছ। খুবই এক্সসাইটিং আর খুবই ইন্টারেস্টিং এই জার্নি হবে তোমার। এই মডিউল দিয়েই শুরু হচ্ছে Next.Js Ninja হওয়ার মিশনInstall Next.Js: নিচে তিনটা কমান্ড দিয়ে দিলাম কি আছে জীবনে।
    
    
    
    npx create-next-app@latest my-next-app  
    
    cd my-next-app  
    
    npm run dev  
    
    
    
    আজকের মডিউল:   খুবই গুরুত্বপূর্ণ কিছু কথাবার্তা হবে আজকের মডিউলে। জাস্ট ১০টা-১১টা ভিডিও।  এর মধ্যে থাকবে--  ১. Next.Js কি? ২. React এর পরিবর্তে কেন Next.Js ব্যবহার করবো? ৩. ক্লায়েন্ট সাইড, সার্ভার সাইড, pre-rendering কি?৪. Next.Js এর key ফিচারস গুলো নিয়ে আলোচনা করবো।  ৫. আর! নো নো সব যদি এখানেই বলে দেয়ই তাহলে তো ভিডিও দেখার মজাই নস্ট হয়ে গেলো সো জলদি শুরু করে দাও
    
    
    
    তোমার এই মিশন মিশন ৫ এর টেনটেটিভ আউটলাইনঃ   
    
    18th July, Tuesday: Module-24: Fundamentals of Next.Js 
    
    20th July, Thursday: Module-25: Next Level Data Fetching in Next.Js
    
    23rd July, Sunday: Module-26: Explore NextAuth & App Router
    
    25th July, Tuesday: Module-26.5: Practice Day  
    
    27th July, Thursday: Module-27: Assignment-6
    
    
    
    শুরু হলো, এ রোমান্টিক রিলেশন উইথ Next.Js  লেগে থাকলে কত কি যে হবে!! এখানেই নয় তো শেষ!
   ```
</details>

## CONTENTS:

- [24-1. Let's Start Our Journey With NextJs](#24-1-lets-start-our-journey-with-nextjs)
- [24-2. Why Next.Js? The Competitive Edge of Next.Js over React.Js](#24-2-why-nextjs-the-competitive-edge-of-nextjs-over-reactjs)
- [24-3: Clear concept of Pre-rendering and Client side rendering](#24-3-clear-concept-of-pre-rendering-and-client-side-rendering)
- [24-4: Exploring the World of Next.Js Project Creation and Its Folder Structure](#24-4-exploring-the-world-of-nextjs-project-creation-and-its-folder-structure)
- [24-5: Key features of Next.Js with File based routing system](#24-5-key-features-of-nextjs-with-file-based-routing-system)
- [24-6: Exploring Dynamic Routes and Nested Routing](#24-6-exploring-dynamic-routes-and-nested-routing)
- [24-7: Catch all routes and custom 404 error page also Add CSS Component library](#24-7-catch-all-routes-and-custom-404-error-page-also-add-css-component-library)
- [24-8: Navigation with Link Component and Programmatically Navigating](#24-8-navigation-with-link-component-and-programmatically-navigating)
- [24-9.1: Explore Simple Layout System](#24-91-explore-simple-layout-system)
- [24-9.2: Explore Dashboard & Nested Layout System](#24-92-explore-dashboard--nested-layout-system)
- [24-10: Using Head Component for better SEO, Image Component, import alias and Module summary](#24-10-using-head-component-for-better-seo-image-component-import-alias-and-module-summary)

<br/>

### 24-1. Let's Start Our Journey With NextJs

1. What is Next.js?  
   1. A React framework for the web
   2. `React with superpower`
2. What is Next.js's superpower?
   1. Automatic image, font and script optimizations for improved UX and core web vitals
   2. Pre-rendering (`SSG + SSR`) for blazing fast application
   3. Next level data fetching (data fetching methods runs on the server)
   4. Powerful routing and layouts
   5. Build complex interfaces and ship less JavaScript
   6. Has file system based router built on concepts of pages and can share nested layouts
   7. API routes (Build API endpoint to securely connect with third party services)

<br/>

### 24-2. Why Next.Js? The Competitive Edge of Next.Js over React.Js

1. Why Next.js?
   > Next.js is React.js's partners/combiners`
2. The competitive edge of Next.js over React.js
   1. React.js is a library. Next.js is a framework
   2. Use Next.js for Full-Stack application development
      <img loading="lazy" alt="The competitive edge of Next.js over React.js" src="./images/1.png" >
   3. Next.js is amazingly fast because of pre-rendering
   4. SEO friendly
3. What is rendering?
	> Process of turning HTML, CSS and JavaScript into an interactive page
   
	<img loading="lazy" alt="rendering" src="./images/2.png" >

<br/>

### 24-3: Clear concept of Pre-rendering and Client side rendering

1. Client side rendering
   > Rendering on the runtime
2. Pre-rendering
   > Generated when building and served when requested
   1. Static Site Generation (SSG)
   		1. Generated on build time served when requested
   2. Server Side Rendering (SSR)
   		1. Generated dynamically and served based on the request

<br/>

### 24-4: Exploring the World of Next.Js Project Creation and Its Folder Structure

1. Next.js follows 2 types of folder structure
	1. Pages router
    2. App router (stable) 
       ```Creating components using app router will be server component that will be generated from server. This server components has limited CSS components library supports```

<br/>

### 24-5: Key features of Next.Js with File based routing system

1. What's in Next.js?
	1. Build in optimizations
   		1. Image optimization (converts to small size but maintains same resolution)
	2. 	Dynamic HTM<L streaming
   3. React server components
   4. Data fetching
   5. CSS supports ```Same CSS can be used on different components but style will not overwrite```
   6. Client and server side rendering
   7. Node.js and Edge runtimes
   8. Route handlers
   9. Powerful routing and layouts
   10. Middleware
2. File based routing system
	```Create a new file inside the pages folder and a new route will be created using the file name```

<br/>

### 24-6: Exploring Dynamic Routes and Nested Routing

<br/>

### 24-7: Catch all routes and custom 404 error page also Add CSS Component library

1. Catch all routes

<br/>

### 24-8: Navigation with Link Component and Programmatically Navigating

<br/>

### 24-9.1: Explore Simple Layout System

<br/>

### 24-9.2: Explore Dashboard & Nested Layout System

<br/>

### 24-10: Using Head Component for better SEO, Image Component, import alias and Module summary

<br/>
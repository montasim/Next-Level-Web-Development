<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=680&height=40&lines=MISSION+5:+BE+A+NEXTJS+NINJA+(MODULE:+24+-+27)" alt="MISSION 5: BE A NEXTJS NINJA (MODULE: 24 - 27)" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=480&height=21&lines=Module+25:+Next Level Data Fetching in NextJs" alt="Module 25: Next Level Data Fetching in NextJs" />

<hr/>

<br/>

<details>
    <summary> Text Instructions : Module 25 </summary>

```text
তোমার তৃতীয় প্রেম Next.Js এর খুবই গুরুত্বপূর্ণ একটি মডিউল এটি (মডিউল 25)

#module_release

#mission_be_a_nextjs_ninja

#module_25  

আজকের মডিউলটিতে আমরা আলোচনা করেছি নেক্সট লেভেল ডাটা ফেচিং নিয়ে মানে নেক্সট জে এস এ কিভাবে এক্সটারনাল এপিআই থেকে ডাটা ফেচ করে দেখাতে হবে সেটা নিয়ে । ডাটা ফেচিং এর জন্য আমরা আর রিয়েক্ট এর মতো useEffect() ব্যবহার করবো না যা সাইড ইফেক্ট ক্রিয়েট করে ।

তার পরিবর্তে ব্যবহার করেছি Next.Js এর Built-in Data Fetching Functions গুলো । এর জন্য একটা News Portal Website এর Starter Pack এর গিট হাব লিংক নিচে দিয়ে দিয়েছি এটা ক্লোন করে আমার সাথে কাজে লেগে পরো!! এখানেই কিন্তু শেষ নয় আমরা আমাদের ভালোবাসার নেক্সট জে এস এর সাথে মীর ভাইয়ের দেখানো আরেক ভালোবাসার Redux Tool Kit (RTK) Query কিভাবে অ্যাড করা যায় সেটাও দেখে ফেলেছি কি মজ্জা! এরপর দেখেছি নেক্সট জেএস এর পুচকা ব্যাক এন্ড API Routes কেন পুচকা বল্লাম? এটা তো এখানে বলে দিলে ভিডিও দেখার মজাই থাকলো না সো লেটস জাম্প টু দ্যা ভিডিও  

GitHub Link Of Starter Pack: https://github.com/Apollo-Level2-Web-Dev/ph-news-portal-starter-pack-NextJs_2nd_Module_Resource
   ```
</details>

## CONTENTS:

- [25-1: Next-level Data Fetching with getStaticProps()](#25-1-next-level-data-fetching-with-getstaticprops)
- [25-2: Exploring the Depths of getStaticProps()](#25-2-exploring-the-depths-of-getstaticprops)
- [25-3: Breaking the Limits of Static Sites with Next.js ISR](#25-3-breaking-the-limits-of-static-sites-with-nextjs-isr)
- [25-4: Dynamic Data Fetching with getStaticPaths()](#25-4-dynamic-data-fetching-with-getstaticpaths)
- [25-5: Behind the Scenes of getStaticPaths()](#25-5-behind-the-scenes-of-getstaticpaths)
- [25-6: Advance Data Fetching Strategies with getServerSideProps()](#25-6-advance-data-fetching-strategies-with-getserversideprops)
- [25-7: A Technical Breakdown of Client-Side Data Fetching using (RTK Query)](#25-7-a-technical-breakdown-of-client-side-data-fetching-using-rtk-query)
- [25-8: Dynamic import (lazy loading) No SSR](#25-8-dynamic-import-lazy-loading-no-ssr)
- [25-9: Basic Idea on API routes](#25-9-basic-idea-on-api-routes)
- [25-10: Explore built-in CSS Module support and Module summary](#25-10-explore-built-in-css-module-support-and-module-summary)

<br/>

### 25-1: Next-level Data Fetching with getStaticProps()

1. You can start JSON Server on other ports with the --port flag:

    ```text
    json-server --watch db.json --port 3004
    ```
   
2. Create a script in `package.json` file

    ```json
    "json-server": "json-server --watch db.json --port 5000",
    ```
   
3. `React.js useEffect() works on client side`
4. Next.js pre-renders on server side using build in functions

   1. `getStaticProps()`
 
5. How to use getStaticProps()?

   ```javascript
   export const getStaticProps = async () => {
      const res = await fetch('http://localhost:5000/news');
      const data = await res.json();
   
      console.log(data);
   
      return {
         props: {
            allNews: data,
         }
      }
   }
   ```

<br/>

### 25-2: Exploring the Depths of getStaticProps()

1. After successful build with yarn `yarn build`

   ```text
   Route (pages)                              Size     First Load JS
   ┌ ● /                                      17.9 kB         163 kB
   ├   /_app                                  0 B            74.2 kB
   ├ ○ /404                                   929 B           116 kB
   ├ ○ /about                                 1.2 kB          152 kB
   └ ○ /contact                               1.22 kB         152 kB
   + First Load JS shared by all              74.3 kB
     ├ chunks/framework-2c79e2a64abdb08b.js   45.2 kB
     ├ chunks/main-a9a5f9df1dceef89.js        27.6 kB
     ├ chunks/pages/_app-85440895f2aa25ce.js  316 B
     ├ chunks/webpack-87b3a303122f2f0d.js     995 B
     └ css/c3b07af01e3c0242.css               156 B
   
   ○  (Static)  automatically rendered as static HTML (uses no initial props)
   ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   ```

2. getStaticProps()

	Create HTML and JSON data on build time based on necessity. When we will deploy our site it will store out data as cached or CDN type and will serve from there. That is why it will be SEO friendly and user will see data instantly. 

3. Disadvantages of getStaticProps()

	`Loads data from build files. When changes comes to data getStaticProps() does not update those data. To display the latest changes need to rebuild again.` 

<br/>

### 25-3: Breaking the Limits of Static Sites with Next.js ISR

1. How to resolve the getStaticProps() disadvantages?

   ```javascript
   export const getStaticProps = async () => {
       const res = await fetch('http://localhost:5000/news');
       const data = await res.json();
   
       console.log(data);
   
       return {
           props: {
               allNews: data,
           },
           revalidate: 10,
       }
   }
   ```
   
	`OPTIMUM` revalidate time is `30sec`
   
	*** Need to build again using `yarn build`

2. After resolve the getStaticProps() disadvantages and create a successful build with yarn `yarn build`

    ```text
    Route (pages)                              Size     First Load JS
    ┌ ● / (ISR: 10 Seconds)                    17.9 kB         163 kB
    ├   /_app                                  0 B            74.2 kB
    ├ ○ /404                                   929 B           116 kB
    ├ ○ /about                                 1.2 kB          152 kB
    └ ○ /contact                               1.22 kB         152 kB
    + First Load JS shared by all              74.3 kB
      ├ chunks/framework-2c79e2a64abdb08b.js   45.2 kB
      ├ chunks/main-a9a5f9df1dceef89.js        27.6 kB
      ├ chunks/pages/_app-85440895f2aa25ce.js  316 B
      ├ chunks/webpack-87b3a303122f2f0d.js     995 B
      └ css/c3b07af01e3c0242.css               156 B
    
    ○  (Static)  automatically rendered as static HTML (uses no initial props)
    ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
       (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
    ```

<br/>

### 25-4: Dynamic Data Fetching with getStaticPaths()

1. How to use getStaticPaths()?

    ```javascript
    import React from 'react';
    import RootLayout from "@/components/Layouts/RootLayout";
    import HomePage from "@/pages";
    
    const NewsDetailsPage = ({news}) => {
        return (
            <div>
                <h1>{news?.title}</h1>
                <p>id:  {news?.id}</p>
            </div>
        );
    };
    
    export default NewsDetailsPage;
    
    NewsDetailsPage.getLayout = function getLayout(page) {
        return <RootLayout>{page}</RootLayout>;
    };
    
    export const getStaticPaths = async () => {
        const res = await fetch(`http://localhost:5000/news`);
        const allNews = await res?.json();
    
        const paths = allNews?.map((news) => ({
            params: { newsId: news?.id },
        }))
    
        return { paths, fallback: false };
    };
    
    export const getStaticProps = async (context) => {
        const {params} = context;
        const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
        const data = await res?.json();
    
        return {
            props: {
                news: data,
            },
            revalidate: 30
        }
    };
    ```

<br/>

### 25-5: Behind the Scenes of getStaticPaths()

1. fallback state: `false`, `true`, `'blocking'`

	1. `false`: If no content is found for a page, it will take to the 404 page
	2. `true`: If no content is found for a page, it will take to the page and will be on loading state
	3. `'blocking'`: If no content is found for a page, it will take to the page and will not be in loading state. It will display the data as it is

2. How to use fallback state: `false`, `true`, `'blocking'`

	1. `false`: For general use. Will create all the pages in build time
    2. `true`: When dealing with large number of pages. Will create initial pages on the build time and will create others pages based on the users request
    3. `'blocking'` for 

   3. How getStaticPaths() works?

       When we sent data to getStaticPaths() using

       ```javascript
       const paths = allNews?.map((news) => ({
            params: { newsId: news?.id },
        }))
    
        return { paths, fallback: false };
       }
       ```
      
		it will build all the pages with data on the build time. When deploying the app it will instantly serve the pages to the users.

<br/>

### 25-6: Advance Data Fetching Strategies with getServerSideProps()

1. Limitations of SSG

	1. Data processing has a delay
   2. If a user visits to the side updated data may not be ready. It may be on processing state.

2. To solve the limitations of SSG we need to use SSR.

    ```javascript
    export const getServerSideProps = async (context) => {
        const {params} = context;
        const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
        const data = await res?.json();
    
        return {
            props: {
                news: data,
            },
        }
    };
    ```
   
3. Remember when using `getServerSideProps` 
    1. You can not use `getStaticProps` or `getStaticPaths` with `getServerSideProps`.
    2. You can not use `revalidate` when using `getServerSideProps

4. Advantages of `getServerSideProps` over `useEffect`

	1. Get SEO friendly site

5. When to use SSR ot SSG?

	1. Depends on project. 
   2. If we want to create a blog project or new portal that updates data continuously we need to use SSR. 
   3. If we want to build a site that does not need to update data frequently like e-commerce, we can use SSG on scheduled time.

6. Build log when using SSR on `[newsIS].js` and SSG on `index.js`

    ```text
    Route (pages)                              Size     First Load JS
    ┌ ● / (ISR: 10 Seconds)                    191 B           164 kB
    ├   /_app                                  0 B            74.2 kB
    ├ ○ /404                                   929 B           116 kB
    ├ ○ /about                                 1.2 kB          152 kB
    ├ ○ /contact                               1.22 kB         152 kB
    └ λ /news/[newsId]                         517 B           164 kB
    + First Load JS shared by all              74.3 kB
      ├ chunks/framework-2c79e2a64abdb08b.js   45.2 kB
      ├ chunks/main-a9a5f9df1dceef89.js        27.6 kB
      ├ chunks/pages/_app-85440895f2aa25ce.js  316 B
      ├ chunks/webpack-87b3a303122f2f0d.js     995 B
      └ css/c3b07af01e3c0242.css               156 B
    
    λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
    ○  (Static)  automatically rendered as static HTML (uses no initial props)
    ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
       (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
    ```

7. Build log when using SSR on `[newsIS].js` and `index.js`

    ```text
    Route (pages)                              Size     First Load JS
    ┌ λ /                                      191 B           164 kB
    ├   /_app                                  0 B            74.2 kB
    ├ ○ /404                                   929 B           116 kB
    ├ ○ /about                                 1.2 kB          152 kB
    ├ ○ /contact                               1.22 kB         152 kB
    └ λ /news/[newsId]                         517 B           164 kB
    + First Load JS shared by all              74.3 kB
      ├ chunks/framework-2c79e2a64abdb08b.js   45.2 kB
      ├ chunks/main-a9a5f9df1dceef89.js        27.6 kB
      ├ chunks/pages/_app-85440895f2aa25ce.js  316 B
      ├ chunks/webpack-87b3a303122f2f0d.js     995 B
      └ css/c3b07af01e3c0242.css               156 B
    
    λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
    ○  (Static)  automatically rendered as static HTML (uses no initial props)
    ```

<br/>

### 25-7: A Technical Breakdown of Client-Side Data Fetching using (RTK Query)

1. When to use Client-Side rendering
	
	1. Dashboard
   2. Admin panel
   3. Where SEO friendly behaviour is not necessary

2. How to use `Redux` with Next.js

    `src/pages/_app.js`

    ```javascript
    import '@/styles/globals.css'
    import {Provider} from "react-redux";
    import {store} from "@/redux/store";
    
    export default function App({ Component, pageProps }) {
    
      const getLayout = Component.getLayout || ((page) => page);
    
      return <Provider store={store}>
        {
          getLayout(<Component {...pageProps} />)
        }
      </Provider>;
    }
    ```

    `src/redux/store.js`
    
    ```javascript
    import { configureStore } from '@reduxjs/toolkit'
    import {apiSlice} from "./api/api";
    
    export const store = configureStore({
        reducer: {[apiSlice.reducerPath]: apiSlice.reducer},
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(apiSlice.middleware),
    })
    ```

    `src/redux/api/api.js`
    
    ```javascript
    // Import the RTK Query methods from the React-specific entry point
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
    
    // Define our single API slice object
    export const apiSlice = createApi({
        // The cache reducer expects to be added at `state.api` (already default - this is optional)
        reducerPath: 'api',
        // All of our requests will have URLs starting with '/fakeApi'
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
        // The "endpoints" represent operations and requests for this server
        endpoints: builder => ({
            // The `getPosts` endpoint is a "query" operation that returns data
            getNews: builder.query({
                // The URL for the request is '/fakeApi/posts'
                query: () => '/news'
            })
        })
    })
    
    // Export the auto-generated hook for the `getPosts` query endpoint
    export const { useGetNewsQuery } = apiSlice
    ```

    `src/pages/index.js`
    
    ```javascript
    import Head from "next/head";
    import RootLayout from "@/components/Layouts/RootLayout";
    import Banner from "@/components/UI/Banner";
    import AllNews from "@/components/UI/AllNews";
    import {useGetNewsQuery} from "@/redux/api/api";
    
    
    const HomePage = ({allNews}) => {
        const {data, isLoading, isError, error} = useGetNewsQuery();
    
        console.log(data);
    
      return (
        <>
          <Head>
            <title>PH-News Portal</title>
            <meta
              name="description"
              content="This is news portal of programming hero made by next-js"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Banner />
            <AllNews allNews={data}/>
        </>
      );
    };
    export default HomePage;
    
    HomePage.getLayout = function getLayout(page) {
      return <RootLayout>{page}</RootLayout>;
    };
    
    export const getServerSideProps = async () => {
        const res = await fetch('http://localhost:5000/news');
        const data = await res.json();
    
        console.log(data);
    
        return {
            props: {
                allNews: data,
            },
            // revalidate: 10,
        }
    }
    ```

<br/>

### 25-8: Dynamic import (lazy loading) No SSR

1. When to use [`Lazy Loading` or `dynamic import`](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)?

   1. Increase performance of the site 
   2. When a content takes time to load
   3. We want to display a loading state on the loading time

2. How to use `Lazy Loading` or `dynamic import`?

    ```javascript
    import dynamic from 'next/dynamic'
     
    const DynamicHeader = dynamic(() => import('../components/header'), {
      loading: () => <p>Loading...</p>,
    });
     
    export default function Home() {
      return <DynamicHeader />
    }
    ```

3. Use Client Side rendering in `Lazy Loading` or `dynamic import`.

    ```javascript
    import dynamic from 'next/dynamic'
     
    const DynamicHeader = dynamic(() => import('../components/header'), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
     
    export default function Home() {
      return <DynamicHeader />
    }
    ```

<br/>

### 25-9: Basic Idea on API routes


<br/>

### 25-10: Explore built-in CSS Module support and Module summary

1. CSS module support

	Same class name of different files will not overwrite latest design.

<br/>
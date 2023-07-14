## Exploring the Power of $inc, $max, $min, and $mul Operators of MongoDb

Mongodb হল একটি জনপ্রিয় NoSQL ডাটাবেস যা ডেটা স্টোর এবং পুনরুদ্ধার করতে একটি ODM ব্যবহার করে। MongoDB-এর অন্যতম প্রধান বৈশিষ্ট্য হল এর শক্তিশালী আপডেট অপারেটর, যা আপনাকে সম্পূর্ণ ডকুমেন্ট প্রতিস্থাপন না করেই বিভিন্ন উপায়ে আপডেট করতে দেয়। এই অপারেটরগুলির মধ্যে অন্যতম হল `$inc` $max $min এবং $mul অপারেটর । তাহলে আর দেরি না করে চলুন এই অপারেটর গুলোর ব্যাবহার দেখে নেয়া যাক ।

- $inc অপারেটর ঃ
Mongodb তে কোন একটি কালেকশনে কোন একটি নির্দিষ্ট field এর value বৃদ্ধি বা হ্রাস করতে $inc অপারেটর ব্যাবহার করা হয় । $inc অপারেটর এর অন্যতম একটি বৈশিষ্ট্য হল যদি পূর্বে থেকে কোন field না থাকে অর্থাৎ যে field টি আপডেট করতে হবে সেটি আগে থেকে না থাকে তাহলে $inc অপারেটর নিজ থেকেই প্রদত্ত field টি create করে দেয় এবং প্রদত্ত value টি সেই field এ সেট করে দেয় ।
তবে $inc অপারেটর দিয়ে কোন field আপডেট করার সময় field এর value null হতে পারবে না, সেক্ষেত্রে অপারেটরটি error throw করবে ।

    ```
    Syntax:
    {$inc: {<field>:<value>}}
    ```
    
    একটি সহজ সরল উদাহরন এর মাধ্যমে $inc অপারেটর এর ব্যাবহার বুঝে নেয়া যাক।
    ধরি, product নামের একটি collection আছে যার quantity field কে আপডেট করব।
    
    ```
    { id: ‘101’, quantity: 10 }
    db.product.updateOne({id:’101’},{$inc:{quantity:20}})
    এখানে, quantity field এর উপর $inc operation চালানোয় quantity এর মান 10 থেকে 30 হয়েছে ।
    { id: ‘101’, quantity: 30 }
    ```

- $max অপারেটরঃ
$max অপারেটর মূলত একটি field আপডেট অপারেটর যা কোন কালেকশনের নির্দিষ্ট একটি field কে আপডেট করে থাকে । তবে field এর value আপডেট করার ক্ষেত্রে এটি একটি comparison condition মেনে চলে। condition টি হল যে নির্দিষ্ট field এর value আপডেট করতে হবে সেই field এর বর্তমান value অবশ্যই প্রদত্ত value এর চেয়ে ছোট হতে হবে। অন্যথায়, field এর value এর কোন পরিবর্তন হবে না।
Syntax

    ```
    {$max:{<field>:<value>}}
    ```
    
    একটি উদাহরনের সাহায্যে বিষয়টি বুঝা যাক। মনে করি , person নামের একটি collection আছে যেখানে আমরা একজন এর age field কে আপডেট করব।
    
    ```
    {name:’karim,age:25}
    db.person.updateOne({name:’karim’},{$max:{quantity:27}})
    {name:’karim,age:27}
    ```
    
    উপরের আপডেট অপারেশনে age যদি 25 এর কম হত তাহলে ডকুমেন্টটি আপডেট হত না।

- $min অপারেটরঃ
$min অপারেটর $max অপারেটর এর বিপরীত । এক্ষেত্রে field টি যে value দিয়ে আপডেট করা হবে সেটি field এর বর্তমান value এর চেয়ে ছোট হতে হবে। বাকি সব কিছু আগের মতই ।

    ```
    Syntax: {$max:{<field>:<value>}}
    ```
    
    ধরি, score নামের একটি collection আছে।
    
    ```
    {highestscore:100,lowestscore:70}
    db.score.updateOne($min:{ lowestscore:80}})
    ```
    
    উপরের আপডেট অপারেশনে lowestscore যদি 70 এর কম হত তাহলে ডকুমেন্টটি আপডেট হত না।

- $mul অপারেটর ঃ
$mul অপারেটর মূলত কোন নির্দিষ্ট field এর value কে একটি নির্দিষ্ট number দিয়ে গুন করার কাজে ব্যাবহার করা হয় । এটিও mongodb এর একটি field আপডেট অপারেটর। $mul অপারেটর দিয়ে কোন field আপডেট করার ক্ষেত্রে field এর value অবসশই numeric value হতে হবে।

    ```
    Syntax: {$max:{<field>:<value>}}
    ```
    
    উদাহরন ঃ
    
    ```
    {id:1,price:120,quantity:5}
    ```
    
    উপরের ডকুমেন্ট এ price এর value যদি দিগুন করাতে চাই তাহলে price field এর উপর $mul অপেরাশন চালাতে হবে।
    
    ```
    db.product.updateOne({id:1},{$mul:{ price:2}})
    {id:1,price:240,quantity:5}
    ```
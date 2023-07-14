## xploring $exists, $type and $size operators

- “$exists” operator: $exists অপারেটরটি মঙ্গোডিবিতে ব্যবহৃত হয়। যার মাধ্যমে আমরা একটি নির্দিষ্ট ফিল্ড ডাটাবেজে আছে কিনা তা চেক করতে পারি।
- $exists অপারেটর ব্যবহারের উদাহরণঃ db.collection.find({ field: { $exists: true } })
এখানে আমরা { $exists: true } এ কন্ডিশনের মাধ্যমে যেই ডকুমেন্ট গুলোতে নির্দিষ্ট এই ফিল্ডটি আছে সেগুলো বের করতে পারব। আমরা যদি { $exists: false } ব্যাবহার করি তাহলে ফিল্ডটি যেই ডকুমেন্ট গুলোতে নাই সেগুল বের করতে পারব।

- “$type” operator: $type অপারেটরটি মঙ্গোডিবিতে নির্দিষ্ট ফিল্ডের ডেটা টাইপ এর উপর ভিত্তি করে ডেটা খুজতে সাহায্য করে।
$type অপারেটর ব্যবহারের উদাহরণঃ db.collection.find({ field: { $type: <type> }})

- এখানে আমরা { $type: ‘string’} এ কন্ডিশনের মাধ্যমে যে ডকুমেন্ট গুলোর নির্দিষ্ট সেই ফিল্ডের টাইপ স্ট্রিং সেগুলো বের করতে পারবো।
আমরা মঙ্গডিবিতে ডাটার অনেক ধরনের টাইপ চেক করতে পারি।
নিচে টাইপ গুলো দেও্বা হলঃ

1. Double: Numeric value 1 
2. String: Numeric value 2 
3. Object: Numeric value 3 
4. Array: Numeric value 4 
5. Binary data: Numeric value 5 
6. ObjectId: Numeric value 7 
7. Boolean: Numeric value 8 
8. Date: Numeric value 9 
9. Null: Numeric value 10 
10. Regular Expression: Numeric value 11 
11. JavaScript code: Numeric value 13 
12. JavaScript code with scope:
13. Numeric value 15 32-bit 
14. Integer: Numeric value 16 
15. Timestamp: Numeric value 17 64-bit 
16. Integer: Numeric value 18 
17. Decimal128: Numeric value 19 
18. Min Key: Numeric value 255 Max 
19. Key: Numeric value 127

> “$size” operator: $size অপারেটরটি মঙ্গোডিবিতে ডেটার এরের সাইজ এর উপর কুয়েরি করে।

- $size অপারেটর ব্যবহারের উদাহরণঃ db.collection.find({ field: { $size: <type> }})
এখানে আমরা { $size: 3} এ কন্ডিশনের মাধ্যমে যে ডকুমেন্ট গুলোর নির্দিষ্ট সেই ফিল্ডটি এ্যরে এবং এ‍্যরের তিনটি এলিমেন্ট আছে সেগুল বের করতে পারব।
বি.দ্রঃ এখানে db দ্বারা ডাটাবেজ বুঝানো হয়েছে, collection দ্বারা ডাটাবেজ এর কালেকশন বা মডেল বুঝানো হয়েছে, find হচ্ছে মঙ্গডিবির একটি মেথড যার মাদ্ধমে ডাটা খোঁজা হয়, field দ্বারা কোন ডকুমেন্ট এর নির্দিষ্ট একটি ফিল্ড কে বুঝানো হয়েছে।
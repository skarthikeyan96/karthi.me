---
title: How to serve an asset through jsdelivr CDN from Github.
date: 2021/02/19
description: In this  post we are going to see how we can serve ui assets from github via CDN.   TLDR; CDN (conten...
tag: todayilearned, codenewbie, webdev
author: karthikeyan
---
# How to serve an asset through jsdelivr CDN from Github.

In this  post we are going to see how we can serve ui assets from github via CDN. 

TLDR; CDN (content delivery network) is basically a network of servers and data centers that provides the fast delivery of content.

Today ,  I was learning about koa which is a node js framework. Suddenly a thought , what if I could create boilerplate code which I can use it for my future side project. I was able to scaffold a basic bolierplate using Koa and typescript. 

Here is the link to the github repo if you are interested. It is still work in progress. 

[skarthikeyan96/node-koa-starter](https://github.com/skarthikeyan96/node-koa-starter)

Real problem began, I wanted add a banner to my readme. I designed a simple banner , but  I knew one thing , I did not want to use dropbox or imgur. 

Googling started , and finally my quest ended with `jsDelivr` . It was solving the  problem which I faced.

Here are the steps , how you can also serve your files using jsDelivr

**Setup your repository** 

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v19an0mp812rzjtyoqt3.png)


**Add the banner file to your repository.**

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0dyek29doayrx43jsts2.png)
 

**Follow the syntax from jsDelivr to serve the asset via CDN**

```markdown
// load any GitHub release, commit, or branch
// note: we recommend using npm for projects that support it

https://cdn.jsdelivr.net/gh/user/repo@version/file
```

**Below is the example syntax**

```markdown
![banner](https://cdn.jsdelivr.net/gh/skarthikeyan96/node-koa-starter/banner.png)
```

Now add the asset url to the readme file and push the changes to github readme. 

🎉🎉🎉  Problem solved

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fktlsdtkqgy5o88nh2ca.png)
 
Thanks for read. I hope it will be helpful for everyone. Please let me know in the comments if I have missed something. 
 
Some Useful Resources

[jsDelivr - A free, fast, and reliable CDN for Open Source](https://www.jsdelivr.com/?docs=gh)
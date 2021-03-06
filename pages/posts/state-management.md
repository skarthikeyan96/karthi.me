---
title: What is State management? 
date: 2021/5/27
description: State management acts as a base, before we start playing around with state management libraries of different framework..
tag: todayilearned, redux, javascript, codenewbie
author: karthikeyan
---
# What is State Management ?

In this blog , I will be going over what is state management and why we need it. State management acts as a base, before we start playing around with state management libraries of different framework.

Let's get going

**State** is basically a container which holds the information about a component, on what stage it is in at the current moment. 

For Example, condition of the button will be in a `disabled` mode if the input data entered by the user is not a valid one. This `disabled` to be `true` value will be contained in a plain javascript object which is state. 

```javascript
let inputState = {
disabled: true;
}
```

Now with help of this value we can listen to the input values and change it back to `false` if the input value is expected. 

The process of changing the state value is state management. 

One thing which can be inferred from the above example is, state of the one UI component always depends on the other. 

State management becomes complex once the application grows , as there will be no `single source of truth`.

What did I mean by `single source of truth`? 

Let us just say , you have two user categories ( free and premium ) and you want restrict the user with free access to certain pages, then maintaining the state of the `type of user`  across all the pages will result in code duplication and also it will not be a efficient. 

You can use state management library or create a plain JS object which will be `single source of truth` and we can access the category of the user from the pages. 

Some of the state management libraries 

VueX -- Vue JS.
Redux, Flux , MobX -- React.
RxJS -- Angular. 

Hope the information was useful. Thank you for reading and please let me know in the comments if I have missed something. 

I have also attached some of the useful resources. 

Resources:

1. [things-ive-learned-about-state-management-for-react-apps](https://medium.com/@veeralpatel/things-ive-learned-about-state-management-for-react-apps-174b8bde87fb)

2. [State management](https://en.wikipedia.org/wiki/State_management#:~:text=State%20management%20refers%20to%20the,in%20a%20graphical%20user%20interface.&text=Examples%20of%20state%20management%20libraries,js%20JavaScript%20framework.)

3. [Redux Docs](https://redux.js.org/)

4. [Props Drilling](https://kentcdodds.com/blog/prop-drilling)

5. [State and single source of truth](http://www.hackingwithreact.com/read/1/12/state-and-the-single-source-of-truth) 

Stay Safe and Happy Coding. 
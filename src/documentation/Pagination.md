---
title: Pagination and Lazy Load
---

There are two options for the loading of additional content while staying on the same page, Load More and Lazy Load. 


## **Load More**

A "Load More" button is the default for most content situations. More content will load when a user clicks on the button. 

Load More is triggered by a button or link placed at the bottom of the currently displayed content.

## **Lazy Load**

Lazy Load occurs when a user scrolls down to the bottom of a page, and more content automatically loads.

Objects being loaded are deferred until the point at which they are needed. Use to reduce page weight by only loading media until a user requires it. Lazy Load can be used for other objects, but typically image and video are the areas that benefit the most.


Lazy Load uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). In summary, to lazy load content, the browser puts a listener for when an element it going to come into view. Then when it is ready to come into view the browser loads it. If the object does not come into view the browser does not load it.  

Lazy Load may cause a user to be trapped within a section of content such as a feed in the middle of other content. 


Use a “Load More” button in place of Lazy Load.

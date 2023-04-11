1. What are hooks 
  Hooks are functions that allow you to use state and other React features in functional components.

2. Why react? 
  React encourages you to break your UI down into small, reusable components. This makes it easier to manage complexity and makes your code more modular and reusable
  React uses a virtualDOM to optimize updates to the UI. When you update a component's state or pros. React calculates the minimum set of changes necessary to update DOM, and then applies those changes all at once. This can lead to fast rendering and better performance
  React has large and active ecosystem, with many third-party libraries and tools available for building and testing React applications.
  * What problems is react Solving?

3. What is virtualDOM? How's the context of using the virtualDOM better than updating the DOM directly?
  React uses a lightweight virtual representation of the actual web page called Virtual DOM to track changes made to the user interface. It updates the virtual copy and calculates the minimum changes needed to update the actual web page. Using Virtual DOM provides several benefits such as improved performance and a more responsive user experience.

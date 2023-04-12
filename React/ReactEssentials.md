## 1. What are hooks 
 * Hooks are functions that allow you to use state and other React features in functional components.

## 2. Why react? 
  * React encourages you to break your UI down into small, reusable components. This makes it easier to manage complexity and makes your code more modular and reusable
  * React uses a virtualDOM to optimize updates to the UI. When you update a component's state or pros. React calculates the minimum set of changes necessary to update DOM, and then applies those changes all at once. This can lead to fast rendering and better performance
  * React has large and active ecosystem, with many third-party libraries and tools available for building and testing React applications.
  * What problems is react Solving?

## 3. What is virtualDOM? How's the context of using the virtualDOM better than updating the DOM directly?
  * React uses a lightweight virtual representation of the actual web page called Virtual DOM to track changes made to the user interface. It updates the virtual copy and calculates the minimum changes needed to update the actual web page. Using Virtual DOM provides several benefits such as improved performance and a more responsive user experience.

## 4. What is Redux and Why Redux?
  Redux is a state management tool for javascript that centralizes application state in a single store and provides a clear seperation of concerns between states and UI components.
  * Redux provides predictable and centralized state management, which makes it easy to reason about and maintain large scale javascript applications
  * Redux also offers a clear seperation of concerns, code reusability, and has a large developer community.

* Props vs State - Props and states are the plain javascript objects, props get passed t the component, whereas state is managed within the component.

* JSX - stands for javascript XML. It allows writing HTML in javascript and converts the HTML tags into react elements.

* Conditional Rendering

### * Writing custom Hooks - eg: useBoolean()

```javascript
const useBoolean = (initialState = false) => {

  const [state, useState] = useState(initialState)

  const handleTrue = () => setState(true)
  const handleFalse = () => setState(false)
  const handleToggle = () => setState(!state)

  return [
    state, 
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle 
    }
  ]
}

// usage:

function App() {
  const [isToggle, {
    setToggle,
    setTrue,
    setFalse,
  }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}

 ```
## 5. What is useMemo(), What problem is it solving? 
  - useMemo is used to memoize values, it can be used to optimize the computation costs of your React fucntional component.

  ```javascript
    function App() {
    const [search, setSearch] = useState('')
  

  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  ...
}
  ```
  The above filteredUsers's function is executed once the search state changes

## React Router
  - [Reference](https://teachingbee.in/how-to-use-routing-in-react-js/)

## 6. Debouncing VS Throttling
  - Debouncing and throttling are the techniques used in web-development to limit the number of times a function is executed in response to a event, such as scrolling or resizing the window
  - These techniques help us to improve application performance and efficiency of web application by reducing the unnecessary function call

  * Debouncing - delays the execution of the funciton until a certain period of time without any further events occuring.
  For example if a user is searching in a search bar, debouncing can delay the search result unil the user has finished typing, preventing the search function being called multiple times unnecessarily

  * Throttling - limits the number of times a function is being called in a certain period of time, 
  For example if the user is scrolling in the webpage, throttling can limit the number of times the scroll function is called, preventing the website from being unresponsive or slow  

  ## 7. What happens when you search google.com in the browser
   - [Reference](https://medium.com/@maneesa/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
   - Things to Know
      - DNS
      - IP
      ![This Happens!]('./EbBWI0GWAAAeYhA.jpeg')
      ```html
      <img title='What Happens!' alt='This Happens!' src = './EbBWI0GWAAAeYhA.jpeg'
      ```
      
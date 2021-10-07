### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router provides real client side routing from browser side with page and URL bar changes and history. Get back / forward buttons.

- What is a single page application?

Sites that use exclusively client side routing.

- What are some differences between client side and server side routing?

Server side routing is handled by server and entire DOM refreshes. Client side routing occurs entirely in browser.

- What are two ways of handling redirects with React Router? When would you use each?

One way to handle redirects is to use Redirect component. Useful for "you shouldn't have gotten here, go here instead."

The other way is to use .push method on history object. Useful for when "you finished this, now go here."

- What are two different ways to handle page-not-found user experiences using React Router? 

One way is to create a Route with NotFound component. The other is to create a Redirect of Route lists to '/'.

- How do you grab URL parameters from within a component using React Router?

URL parameter can be grabbed using useParams hook.

- What is context in React? When would you use it?

Context lets you pass prop data down to child components several layers deep and bypass some generations. 

- Describe some differences between class-based components and function
  components in React.

Class components requires constructors to set state and uses render to display returned jsx. Accessing state requires "this".  Event handlers are written as instance methods. The lifecycle components help manage effects using the common - constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount

- What are some of the problems that hooks were designed to solve?

Hooks are functions that hook into React state and lifecycles from functional components. Don't need to write a class, cleaner code, no need for complex patterns.
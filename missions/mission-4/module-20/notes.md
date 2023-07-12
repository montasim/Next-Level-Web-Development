## Redux

> Redux is a predictable state container for JavaScript apps.

* Single source of truth
* Immutable behavior
* Usage of pure function
* Object as a action
* Unidirectional flow

### Redux 
* React Redux - Old way of using redux
* Redux Toolkit
    * RTK Query

### Factor why redux is used/popular
* Predictable state management
* Centralized state management
* Easy debugging
* Flexible
    * Independent UI framework
    * Middleware support

### Redux Flow
> Action: An action taken by user. Each action has a corresponding reducer function.
 
> Dispatch: Sending the action object to the store. Dispatching an action triggers the corresponding reducer to update the state.

> Payload: Optional data that is attached to an action. It carries any additional information that needs to be send along with the action to update the state.

> Reducer: A reducer is a pure function that takes the current state and an action as inputs and returns a new state. It defines how application's state changes in response to different actions.

> Store: The store holds the state of the application. The store is responsible for dispatching actions, maintaining the state, and notifying subscribers about state changes.


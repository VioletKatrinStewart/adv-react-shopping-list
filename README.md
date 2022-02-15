# Shopping List

## Learning Objectives

- Explain how action types describe state changes
- Explain the purpose of the `reducer` function
- Explain the two parameters (`state` and `action`) of the reducer function
- Use `useReducer` to manage complex application state
- Use the `dispatch` function to dispatch actions to update state
- Use a reducer function to update state
- Use a `switch` statement to handle multiple conditions

## Live Example

https://alchemy-shopping-list.netlify.app/

### Description

For this deliverable, we'll be making the **Shopping List** using the `useReducer` hook to manage our application state. The `useReducer` hook provides a way for us to update the state of our components in a central location. This is useful when we have state that should update together to reduce complexity in our code.

In the shopping list users can add new items to their shopping list. They are also able to edit and delete items in their shopping list.

Use the React template to start your project.

### Acceptance Criteria

- Users are able to add a new item to the list
- Users are able to edit an existing item
- Users are able to delete an item
- Users are able to see a list of shopping items
- (STRETCH) Users are able to mark a shopping item as done with strikethrough on text

### Rubric

| Tasks                                             | Points |
| :------------------------------------------------ | -----: |
| Use the `useReducer` hook to manage list state    |      2 |
| Create a reducer function to handle state changes |      2 |
| Use a `switch` statement inside of your reducer   |      2 |
| Use the `dispatch` function to update state       |      2 |
| Set an initial value for `useReducer`             |      2 |
| Items can be added to list through a reducer      |      2 |
| Items can be edited in list through a reducer     |      2 |
| Items can be deleted from list through a reducer  |      2 |
| Behavior Testing\*                                |      2 |
| Deployed on netlify with CI passing               |      2 |

\*Behavior testing will include a test for adding to list, deleting from list,
editing a list item, and displaying a list of items

# Knowledge

## JSX (JS + XML)

    Let us write HTML inside JS code

## Babel

    ReactJS using Babel compiler to combine JSX code into JS code

## DOM (Document Object Model)

    Include: Element, Attribute, Text

## Virtual DOM

    Why we need Virtual DOM?
      - Because in the real DOM tree when the element in DOM tree change, it will be rerender
      - Virtual DOM exist to resolve the performance problem in DOM Tree
      - When React render the UI, it will also create Virtual DOM by copy the real initial DOM tree.
      - When element change, the real DOM tree will be compared with Virtual DOM. If it actually change, it will be update the new element in real DOM tree

## useMemo

    Image that you write 1 logic code to calculate something in 1 FC, but in that FC include children FC, whenever the state rerender, that calculate will perform in every rerender but not related to the state that in that calculation. So, useMemo resolve that problem, if you just want it count in the first time render use empty dependency, if depend on the state, put the state inside it

## useRef vs useState

    When the value change in useRef, component will not rerender (because it use the reference). In the other side,  the component will rerender when state in useState change.

## memo, useCallback

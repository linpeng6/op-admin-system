# Problems

## 1. error with redux-devtools-extension using ts

error:
Property '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' does not exist on type 'Window & typeof globalThis'.ts(2339)

resolve:
https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens
```js
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
```

## 2. error with useRef using ts
```js
const tabsRef = useRef(null);
const tabs = tabsRef.current.children;//error
```
error:
Property 'children' does not exist on type 'never'.ts(2339)

resolve:
```js
const tabsRef = useRef<HTMLDivElement>(null);
```

## 3. error with Element using ts
```js
const tabs = Array.from(tabsRef.current.children) || [];
const activeTab = tabs.find(item => item && item.className.includes(activeClassName));
activeTab.offsetLeft //error
```
error:
Property 'offsetLeft' does not exist on type 'Element'.ts(2339)

resolve:
```js
const activeTab = tabs.find(item => item && item.className.includes(activeClassName)) as HTMLElement | undefined;
```
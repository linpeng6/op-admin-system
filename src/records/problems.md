# Problems

## 1. an error occurs when the redux-devtools-extension uses TS


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

## 2. an error occurs when the useRef uses TS
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

## 3. an error occurs when the Element uses TS
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

## 4. an error occurs when the dynamic icon uses TS
```js
const MenuIcon = (iconName?: string) => {
  if (!iconName) return null;
  return React.createElement(Icon[iconName] as any, {
    className: 'menu-icon'
  })
}
```
error:
No index signature with a parameter of type 'string' was found on type 'typeof xxx'

resolve:
```js
const MenuIcon = (iconName?: keyof typeof Icon) => {
  if (!iconName) return null;
  return React.createElement(Icon[iconName] as any, {
    className: 'menu-icon'
  })
}
```


## 5. an error occurs when the columnsType uses TS
```js
const tableColumns = cols.map((item, index) => {
  return {
    title: item,
    key: index + '',
    dataIndex: index + '',
    align: 'center',
  }
})
setColumns(tableColumns)
```
error:
Types of property 'align' are incompatible.
Type 'string' is not assignable to type 'AlignType | undefined'.ts(2345)

resolve:
https://stackoverflow.com/questions/61519622/antd-with-typescript-table-with-column-align-right-is-not-compiling
```js
align: 'center' as AlignType
```
# solution

## 1. react router cacher

when router change , components will not keep state

there are some of the solutions I think

resolve:
1.react-router children
```js
<Route path="/home" children={({ match }) => <Home />)} />

<Route path="/home" children={
  ({ match, ...restProps }) => {
   const visible = match ? true : false;
   return (
     <div style={{ display: visible ? 'block' : 'none' }}>
       <Component {...restProps} />
     </div>
   )
  }
} />
```
however the path is match or not, this component will be rendered

2.react-activation(recommend)
github.com/CJY0208/react-activation
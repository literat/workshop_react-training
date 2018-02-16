# React Training

with [Daniel Steigerwald](https://medium.com/@steida/)

base on information and code from [este](https://github.com/este/este)

## Prerequisites

* [node.js](https://nodejs.org/en/) Node 8+
* [yarn](https://yarnpkg.com/lang/en/)

## Starting

### Starting development

* `git clone git@github.com:literat/react-training.git`
* `cd react-training`
* `yarn`
* `yarn dev`
* see `http://localhost:3000`

### Starting backend

* `cd server`
* `yarn`
* `yarn dev`
* see `http://localhost:4000` and `http://localhost:5000`

## Sources

### Javascript Development

* https://prettier.io/
* https://github.com/flowtype/flow-typed
* https://flow.org/en/docs/install/
* https://facebook.github.io/immutable-js/
* https://flow.org/en/
* https://github.com/zeit/styled-jsx#syntax-highlighting
* https://github.com/este/este/wiki/Learn-JavaScript-and-stuff
* http://webassembly.org/
* https://davidwalsh.name/fetch
* https://github.com/chriso/validator.js/
* https://www.saltycrane.com/flow-type-cheat-sheet/latest/
* https://medium.com/@steida/css-in-js-the-argument-refined-471c7eb83955
* https://blog.bloomca.me/2018/02/04/spa-is-not-silver-bullet.html
* https://medium.com/@steida/why-validation-libraries-suck-b63b5ff70df5

### Functional stuff

* http://ramdajs.com/
* http://fr.umio.us/why-ramda/
* http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional/
* https://stackoverflow.com/questions/871405/why-do-i-need-an-ioc-container-as-opposed-to-straightforward-di-code
* https://reasonml.github.io/
* http://www.modularscale.com/
* http://blog.ploeh.dk/2015/04/13/less-is-more-language-features/

### Reactive Programming

* https://github.com/developit/preact
* https://github.com/facebook/create-react-app
* https://redux.js.org/
* https://zeit.co/blog/next5
* https://github.com/zeit/next.js/
* https://github.com/jamiebuilds/create-react-context
* https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
* https://www.learnrxjs.io/
* https://github.com/reactjs/rfcs/pull/2
* https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
* https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html
* http://blog.ploeh.dk/2011/07/28/CompositionRoot/
* https://github.com/acdlite/rfcs/blob/new-version-of-context/text/0000-new-version-of-context.md
* https://medium.com/@steida/the-boring-react-redux-forms-a15ee8a6b52b
* http://blog.ploeh.dk/2017/01/03/decoupling-application-errors-from-domain-models/
* http://bradfrost.com/blog/post/atomic-web-design/
* http://atomicdesign.bradfrost.com/chapter-2/
* https://redux-form.com/7.2.3/
* https://medium.com/@steida/react-form-validation-without-abstraction-41264608473c
* https://github.com/creationix/nvm#installation

### GraphQL

* http://graphql.org/
* https://www.apollographql.com/
* https://facebook.github.io/relay/ - implementation of GraphQL for client
* http://www.graph.cool/
* https://github.com/graphcool/graphcool-framework
* https://github.com/graphcool/prisma
* https://www.prismagraphql.com/

### Testing

* https://facebook.github.io/jest/
* https://medium.com/@gcanti/type-driven-development-with-flow-e06ee61e1bc9

### Other

* https://hyper.is/
* https://sentry.io/welcome/
* https://zeit.co/
* https://ide.atom.io/
* https://www.gatsbyjs.org/

## Notes

### Progress bar

* když načítám ajaxem, tak je dobré, aby se stránka prednačetla až když má data,
ale kvůli pomalému připojení je dobré uživateli zobrazit nejaký stav - viz např. github,
 je dobré progress bar zobrazovat až po nějakém krátkém čase (aby tam nebyl pořád),
 kouknout do este na LoadingBar.js

 ### Fetch

 * fetch - lepší než jquery.ajax() - davidwalsh.name/fetch,
 používá Promise místo callbacku, ale pozor na to, že nejde udělat cancel,
 learn RxJS - dokumentace getInitialProps - pouze v pages,
 spousti Next.js, jako defaultni initial funkci imperativní/deklarativní data - react je deklarativni -> řeším
 pouze data, react automaticky data reprezentuje do UI

 ### Miscellaneous

 * dynamický klíč: `this.setState({ [e.currentTarget.name]: e.currentTarget.value });`
 * algebraický typ / union type: `type Now = number | "unknown";`
 * exact type - nesmí se rozšířit o další property:
```
type ExactProps = {|
  now: number
|};

type IndexProps = {
  now: number,
  later: ?number, // null nebo number
  superlater?: number // nepovinna polozka
};
```

* this:
```
foo() {
  this...
}

// this ktere ocekavam
foo = () => {
  this...
}
```

* object change -> create new:
```
const Joe = {
  ...Joe,
  name: ‘Jine jmeno’
}

const products = [...products, 4, 5];
```

* `"private": true`: nedovolí uploadovat balík do NPM repository

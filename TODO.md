- Solamente propagar el estado en la jerarquía de componentes, no propagar el estado en propiedades independientes. -> No aplica con redux
- Probar componentes de https://github.com/reactstrap/reactstrap. -> OK
- Probar un router de reactjs para el manejo de rutas en la SPA. ->
    https://es.redux.js.org/docs/avanzado/uso-con-react-router.html,
    https://medium.com/@dvenegas/empezando-con-react-router-v4-2b8c31c7eb11 -> OK
- https://medium.com/devschile/c%C3%B3mo-estructurar-proyectos-react-ba6fac658ac5 -> OK
- Meter Redux(flux) para el control de estado de la APP. -> https://www.youtube.com/watch?v=OXWn4XiDUmw -> OK
- Usar inmutable.js para mantener la inmutabilidad del estado. -> Probar bien la potencia de immutable
- Iluminar la línea ganadora en el caso de que se produzca. -> OK
- Mirar lo de "Action creators" -> OK
- Usar Rambda o Lodash para la programación funcional. -> NOPE

- Usar el localstorage del navegador para guardar las partidas. Que también se puedan cargar las almacenadas.
    - 0.- Click en save se comprueba si state.boardReducer.history.length > 0.
    - 1.- Se abre un modal con un input text para poner un nombre a la partida, más un botón para confirmar y otro para cancelar. https://es.reactjs.org/docs/forms.html
    - 2.- Click en confirmar guarda todo el histórico de la partida en el localStorage del navegador. https://www.robinwieruch.de/local-storage-react
    - 3.- Mostrar modal con mensaje de "Game saved" cuando se haya guardado en el localStorage

- Hacer un sistema de carga de partidas guardadas en el localStorage mediante un <select>

- [ .. ]
    - Seguir probando thunks
    - Mirar bien como funciona fetch
    - Mirar async / await
    - https://stackoverflow.com/questions/35855781/having-services-in-react-application

- https://platzi.com/blog/nextjs-el-futuro-de-las-aplicaciones-con-react/
- https://medium.com/@siddharthac6/getting-started-with-react-js-using-webpack-and-babel-66549f8fbcb8

- Hacer una request a una API pública para probar los services de react:
    https://github.com/axios/axios
    https://github.com/reduxjs/redux-thunk

- Probar Typescript para ver que nos aporta.
    https://fettblog.eu/typescript-react/components/
    https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
    https://codesandbox.io/s/w02m7jm3q7
    https://stackoverflow.com/questions/52249390/property-xyz-does-not-exist-on-type-readonly-children-reactnode-rea
    https://redux.js.org/recipes/usage-with-typescript
    https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
    https://stackoverflow.com/questions/53851828/ts2740-type-is-missing-the-following-properties-from-readonlymyinterface-error

- https://es.redux.js.org/docs/introduccion/herencia.html#rx
- Ver testing con reactjs.
- https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-1-e911e68f6063

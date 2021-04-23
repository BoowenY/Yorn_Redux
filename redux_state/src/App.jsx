import React, { useContext, useState } from "react";

const appContext = React.createContext(null);

export const App = () => {
  const [appState, setAppState] = useState({
    user: { name: "frank", age: 18 },
  });

  const contextValue = { appState, setAppState };

  return (
    <appContext.Provider value={contextValue}>
      <First />
      <Second />
      <Third />
    </appContext.Provider>
  );
};

const First = () => (
  <section>
    first <User />
  </section>
);
const Second = () => (
  <section>
    second <UserModifier />
  </section>
);
const Third = () => <section>third</section>;

const User = () => {
  const contextValue = useContext(appContext);
  return <div>User: {contextValue.appState.user.name}</div>;
};

const UserModifier = () => {
  const {appState, setAppState}= useContext(appContext);
  const onChange = (e) => {
    appState.user.name = e.target.value;
    setAppState({...appState});
  };
  return (
    <div>
      <input
        type="text"
        value={appState.user.name}
        onChange={onChange}
      />
    </div>
  );
};

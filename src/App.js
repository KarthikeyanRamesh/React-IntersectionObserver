import React, {useRef} from "react";
import {useElementOnScreenHook} from "./hooks/useElementOnScreenHook.ts";

function App() {
  const targetRef = useRef(null);

  const isVisible = useElementOnScreenHook({
    root: null,
    rootMargin: '0px',
    threshold: 0.01
  }, targetRef);

  return (
    <> 
    <h1 className="header">
      <p>{!isVisible ? 'not in viewport': 'in viewport'}</p>
    </h1>
    <div className="gap"></div>
    <img alt="alt-text" src="Img/friend.jpeg" ref={targetRef} />
    </>
  );
}

export default App;

import {useState, useMemo, useEffect} from "react";

interface optionsType {
  root: null;
  rootMargin: string;
  threshold: number;
}

interface entryType {
  isIntersecting: boolean;
}

export const useElementOnScreenHook = (options: optionsType, targetRef: React.MutableRefObject<HTMLImageElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: entryType[]) => {
    const [entry] = entries; //const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  }

  const optionsMemo = useMemo(() => {
    return options
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;

    if(currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if(currentTarget) {
        observer.unobserve(currentTarget);
      }
    }
  }, [targetRef, optionsMemo]);

  return isVisible;
}
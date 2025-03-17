import { useMemo } from 'react';

import useToggle from '../useToggle';

export interface Actions {
  set: (value: boolean) => void;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

function useBoolean(defaultValue: boolean = false): [boolean, Actions] {
  const [state, { toggle, set }] = useToggle(defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);

    return { set: (v: boolean) => set(v), setTrue, setFalse, toggle };
  }, []);

  return [state, actions];
}

export default useBoolean;

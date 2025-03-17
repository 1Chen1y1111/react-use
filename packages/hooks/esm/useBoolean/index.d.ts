export interface Actions {
    set: (value: boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}
declare function useBoolean(defaultValue?: boolean): [boolean, Actions];
export default useBoolean;

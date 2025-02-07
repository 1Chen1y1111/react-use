import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

const callUseToggle = (hook) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('test on init', () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on methods', () => {
    const hook = renderHook(() => useToggle('hello', 'world'));

    callUseToggle(hook);
    expect(hook.result.current[0]).toBe('world');

    callUseToggle(hook);
    expect(hook.result.current[0]).toBe('hello');

    act(() => {
      hook.result.current[1].set('world');
    });
    expect(hook.result.current[0]).toBe('world');

    act(() => {
      hook.result.current[1].setLeft();
    });
    expect(hook.result.current[0]).toBe('hello');

    act(() => {
      hook.result.current[1].setRight();
    });
    expect(hook.result.current[0]).toBe('world');
  });
});

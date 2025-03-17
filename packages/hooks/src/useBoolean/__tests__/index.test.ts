import { renderHook, act } from '@testing-library/react';
import useBoolean from '../index';

const init = (defaultValue?: boolean) => renderHook(() => useBoolean(defaultValue));

describe('useBoolean', () => {
  it('test on init', () => {
    const { result } = init();
    expect(result.current[0]).toBeFalsy();
  });

  it('test on methods', () => {
    const { result } = init();

    act(() => {
      result.current[1].setTrue();
    });
    expect(result.current[0]).toBeTruthy();

    act(() => {
      result.current[1].setFalse();
    });
    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBeTruthy();

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1].set(false);
    });
    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1].set(true);
    });
    expect(result.current[0]).toBeTruthy();
  });

  it('test on defaultValue', () => {
    const { result: result1 } = init(true);
    expect(result1.current[0]).toBeTruthy();

    const { result: result2 } = init(false);
    expect(result2.current[0]).toBeFalsy();
  });
});

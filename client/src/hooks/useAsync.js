import { useCallback, useEffect, useState } from "react";

function useAsyncInternal(func, dependencies, initialLoading = false) {
  const [loading, setLoading] = useState(initialLoading);
  const [value, setValue] = useState();
  const [errors, setErrors] = useState;

  const execute = useCallback((...params) => {
    setLoading(true);
    return func(...params)
      .then((data) => {
        setValue(data);
        setErrors(null);
      })
      .catch((err) => {
        setErrors(err);
        setValue(null);
        Promise.reject(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { loading, value, errors, execute };
}

export function useAsync(func, dependencies = [], initialLoading = true) {
  const { execute, ...state } = useAsyncInternal(
    func,
    dependencies,
    initialLoading
  );

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
}

export function useAsyncFn(func, dependencies = []) {
  return useAsyncInternal(func, dependencies);
}

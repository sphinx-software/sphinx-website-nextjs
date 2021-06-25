import { createContext, FunctionComponent, useContext } from 'react'

const Context = createContext<unknown>(undefined)

type ConfigProviderProps<T> = {
  config: T
}

const ConfigProvider: FunctionComponent<ConfigProviderProps<unknown>> = ({
  config,
  children
}) => {
  return <Context.Provider value={config}>{children}</Context.Provider>
}

export default ConfigProvider

export function useConfig<T>(): T {
  return useContext(Context) as T
}

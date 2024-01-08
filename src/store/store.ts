import { configureStore, combineReducers, PreloadedState } from "@reduxjs/toolkit";
import { filmSphereApi } from "@/api/filmSphereApi";
import toggleReducer from "./reducers/toggleSlice";
import { useMemo } from "react";

const rootReducer = combineReducers({
	[filmSphereApi.reducerPath]: filmSphereApi.reducer,
	toggleReducer,
})

let store: AppStore

export const initStore = (preloadedState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmSphereApi.middleware),
	})
}

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({ ...store.getState(), ...preloadedState })
	}

	if (typeof window === 'undefined') return _store
	if (!store) store = _store

	return _store
}
export function useStore(initialState: RootState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}

export type AppStore = ReturnType<typeof initStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
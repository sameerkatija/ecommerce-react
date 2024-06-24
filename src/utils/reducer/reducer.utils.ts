import { AnyAction } from "redux";

type Matchable<Ac extends () => AnyAction> = Ac & {
  type: ReturnType<Ac>["type"];
  match(action: AnyAction): action is ReturnType<Ac>;
};

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

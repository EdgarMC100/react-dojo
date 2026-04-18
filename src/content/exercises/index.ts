import { counter } from "./counter"
import { autoFocus } from "./auto-focus"
import { stopwatch } from "./stopwatch"
import { todoList } from "./todo-list"
import { formReducer } from "./form-reducer"
import { fetchUser } from "./fetch-user"
import { themeContext } from "./theme-context"
import { debouncedSearch } from "./debounced-search"
import { lazyModal } from "./lazy-modal"
import type { Exercise } from "./types"

export type { Exercise, Difficulty } from "./types"

export const allExercises: Exercise[] = [
  counter,
  autoFocus,
  stopwatch,
  todoList,
  formReducer,
  fetchUser,
  themeContext,
  debouncedSearch,
  lazyModal,
]

export const exerciseIndex: Record<string, Exercise> = Object.fromEntries(
  allExercises.map((e) => [e.id, e]),
)

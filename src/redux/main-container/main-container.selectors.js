import { createSelector } from 'reselect'

const selectState = (state) => state.homepage

export const selectSections = createSelector(
  [selectState],
  (homepage) => homepage.sections
)

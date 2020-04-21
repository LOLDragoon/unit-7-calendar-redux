import * as types from '../constants/actionTypes'

export const createSchedule = (data) => ({
  type: types.CREATE_SCHEDULE,
  payload: data,
})
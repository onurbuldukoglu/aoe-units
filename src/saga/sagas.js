import { put, select, takeEvery, all } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { setAge, selectAge, resetAge } from '../features/ages/agesSlice';
import { setUnits, selectUnits } from '../features/units/unitsSlice';
import { setWood, setFood, setGold, toggleWood, toggleFood, toggleGold, selectCosts } from '../features/costs/costsSlice';
import { selectDetail, setDetail, setUnit } from '../features/detail/detailSlice';
import dataFile from '../data/age-of-empires-units.json';

export const filterByAge = (data, age) => {
  return data.filter(unit => (unit.age === age))
};

export const filterByCost = (data, type, min, max) => {
  const withoutCost = data.filter(unit => unit.cost);
  return withoutCost.filter(unit => (!unit.cost[type] || (min <= unit.cost[type] && unit.cost[type] <= max)))  // !unit.cot[type] || aralık
}

export const filterUnit = (data, name) => {
  return data.filter(unit => (unit.name === name))
}

export function* unitSaga() {
    yield put(setUnits(dataFile.units));
}

export function* filterSaga() {
  yield put(setUnits(dataFile.units));
  let units = yield select(selectUnits);
  const age = yield select(selectAge);
  const costs = yield select(selectCosts);
  if (age !== '') {
    units = yield filterByAge(units, age);
  }
  units = yield filterByCost(units, 'Wood', costs.costs.Wood.min, costs.costs.Wood.max);
  units = yield filterByCost(units, 'Food', costs.costs.Food.min, costs.costs.Food.max);
  units = yield filterByCost(units, 'Gold', costs.costs.Gold.min, costs.costs.Gold.max);
  yield put(setUnits(units));
}

export function* woodSaga(payload) {
    yield put(setWood(payload))
}

export function* foodSaga(payload) {
    yield put(setFood(payload))
}

export function* goldSaga(payload) {
    yield put(setGold(payload))
}

export function* toggleWoodSaga(payload) {
    yield put(toggleWood(payload.value))
}

export function* toggleFoodSaga(payload) {
    yield put(toggleFood(payload.value))
}

export function* toggleGoldSaga(payload) {
    yield put(toggleGold(payload.value))
}

export function* ageSaga(payload) {
    yield put(setUnits(dataFile.units));
    yield put(setAge(payload));
    const ageFilter = yield select(selectAge);
    const units = yield select(selectUnits);
    const filteredByAge = yield filterByAge(units, ageFilter);
    yield put(setUnits(filteredByAge));
}

export function* resetAgeSaga() {
    yield put(setUnits(dataFile.units));
    yield put(resetAge())
}

export function* detailSaga(payload) {
    const units = yield select(selectUnits);
    yield put(setDetail(payload));
    const detail = yield select(selectDetail);
    const unit = yield filterUnit(units, detail.name);
    yield put(setUnit(unit[0]));
}

export default function* rootSaga() {
  yield all([
    takeEvery(sagaActions.SET_AGE, ageSaga),
    takeEvery(sagaActions.RESET_AGE, resetAgeSaga),
    takeEvery(sagaActions.SET_UNITS, unitSaga),
    takeEvery(sagaActions.SET_WOOD, woodSaga),
    takeEvery(sagaActions.SET_FOOD, foodSaga),
    takeEvery(sagaActions.SET_GOLD, goldSaga),
    takeEvery(sagaActions.FILTER, filterSaga),
    takeEvery(sagaActions.DETAIL, detailSaga),
    takeEvery(sagaActions.TOGGLE_WOOD, toggleWoodSaga),
    takeEvery(sagaActions.TOGGLE_FOOD, toggleFoodSaga),
    takeEvery(sagaActions.TOGGLE_GOLD, toggleGoldSaga)
  ])
}

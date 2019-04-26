export default {
    loadInitialInfo: ({state, rootState, getters, rootGetters, dispatch, commit}) => {
        commit('setInitialDates');
        commit('setInitialTimes');

        commit('order/setInitialOrder', null, {root: true});
    }
}
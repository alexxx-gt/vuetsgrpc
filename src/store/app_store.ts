import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {Application, IRootState} from './interfaces/interfaces'

const state: Application = {
    ingredients: [
        {
            id: 1,
            name: 'INVALID'
        },
        {
            id: 2,
            name: 'EGG'
        },
        {
            id: 3,
            name: 'HAM'
        },
        {
            id: 4,
            name: 'CHEESE'
        },
        {
            id: 5,
            name: 'LETTUCE'
        },
        {
            id: 6,
            name: 'TOMATO'
        },
    ]
}

const getters: GetterTree<Application, IRootState> = {
    getIngridients(state: any): void {
        return state.ingredients
    }
}

const mutations: MutationTree<Application> = {
    setIngridients(state: any, data: any) {
        state.ingredients = data
    }
}

const actions: ActionTree<Application, IRootState> = {
    
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
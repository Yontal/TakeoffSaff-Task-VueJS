import Vue from 'vue'
import Vuex from 'vuex'
import { loadContacts, login, logout } from '../API/requests'
import Contact from '../models/contact'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    token: null,
  },
  mutations: {
    mutateContacts: (state, payload) => {
      state.contacts = payload;
    },
    mutateToken: (state, payload) => {
      state.token = payload;
    }
  },
  actions: {
    pullContacts: ({commit}) => {
      let contacts = loadContacts();
      contacts = contacts.map(contact => {
        return new Contact(contact.id, contact.name, contact.email, contact.phone, contact.website, contact.address.city, contact.company.name)
      })
      commit("mutateContacts", contacts);
    },
    deleteContact: ({commit, state}, id) => {
      let newContacts = state.contacts.filter(item => item.id !== id)
      commit('mutateContacts', newContacts);
    },
    modifyContact: ({commit, state}, updatedContact) => {
      let newContacts = state.contacts.map(contact => {
        if(contact.id === updatedContact.id){
          return updatedContact
        } else {
          return contact
        }
      })
      if(newContacts.indexOf(updatedContact) === -1) {
        newContacts.push(updatedContact);
      } 
      commit("mutateContacts", newContacts);
    },
    login: ({commit}, credentials) => {
      let response = login(credentials);
      if(response === 1){
        commit("mutateToken", response);
      }
    },
    logout: ({commit}) => {
      commit("mutateToken", null);
    }
  },
  getters: {
    getContacts: (state) => {
      return state.contacts;
    },
    getToken: (state) => {
      return state.token;
    }
  }
})

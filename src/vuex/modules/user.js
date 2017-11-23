const state = {
  main: {
    name: 'Alexander Pierce',
    position: 'Web Developer',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
};

const mutations = {
  /**
   * 테스트용
   * @param state
   */
  changeName: function (state) {
    state.main.name = (state.main.name === 'Alexander Pierce') ? '서정석' : 'Alexander Pierce';
  }
};

export default {
  state,
  mutations
};

const mutations = {
  setStep(state, step) {
    step = Number(step);
    if (!isNaN(step) && step >= 0 && step < state.stepList.length) {
      state.currentStep = step;
    }
  },
  increaseStep(state) {
    state.currentStep += 1;
    if (state.currentStep >= state.stepList.length) {
      state.currentStep = state.stepList.length - 1;
    }
  },
};

export default mutations;

const mutations = {
  setStep(state, step) {
    step = Number(step);
    if (!isNaN(step) && step > 0 && step < state.stepList.length) {
      state.currentStep = step;
    }
  },
};

export default mutations;

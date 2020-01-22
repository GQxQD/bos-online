import mutations from './mutations';
import actions from './actions';
import RouteEnums from '@/enums/route.enums';

const systemSetup = {
  namespaced: true,
  state: {
    // 步骤列表
    stepList: [
      RouteEnums.SETUP_LAUNCH,
      RouteEnums.SETUP_LANGUAGE,
    ],
    // 当前步骤
    currentStep: 0,
  },
  getters: {
    // 当前步骤的路由名称
    currentStepName(state) {
      return state.stepList[state.currentStep];
    },
  },
  mutations,
  actions,
};

export default systemSetup;

import axios from 'axios';

export default {
  update: (doUpdate) => {return (doUpdate ? {} : false)},

  loadArticleInfo: (state) => () => (actions) => {
    let lastFetchingStatus = state.isFetchingPage;
    if (state.articlePage.isLoadCalled)
    {
      state.articlePage.isLoadCalled = false;
      state.isFetchingPage = false;
      return false;
    }

    if (!state.isFetchingPage)
    {
      console.log('Set fetching true');
      state.isFetchingPage = true;
      return {};
    }

    axios({
      method: 'GET',
      url: '',
    })
      .then((response) => {
        // setTimeout(() => {
          console.log(lastFetchingStatus);
          state.isFetchingPage = false;
          state.articlePage.isLoadCalled = true;
          actions.update(lastFetchingStatus);
        // }, 1000);
      })
      .catch((error) => {
        // setTimeout(() => {
          state.isFetchingPage = false;
          // state.articlePage.isLoadCalled = false;
          // actions.update();
        // }, 1000);
      })
    ;

  },
};

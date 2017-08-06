export default {
  findRunner (state) {
    return id => state.runners.find(a => a.id === id);
  }
};

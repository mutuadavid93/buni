module.exports = {
  async exportPathMap() {
    return {
      "/": { page: "/" },
      "/discover": { page: "/discover" },
      "/support": { page: "/support" }
    };
  }
};

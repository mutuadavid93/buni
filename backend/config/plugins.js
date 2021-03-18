module.exports = {
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    // `amountLimit` This can be increased to whichever limit though be
    // ware of Distributed Denial of Service
    amountLimit: 100,
    apolloServer: {
      tracing: false
    }
  }
};

const HOST = 'http://localhost:9000/';

const developmentConfigurations = {
  endPoints: {
    search: `${HOST}search?searchString=}`,
    user: `${HOST}user?userName=`,
    tweet: `${HOST}status/`,
    favorite: `${HOST}favorites`
  }
};

export default developmentConfigurations;
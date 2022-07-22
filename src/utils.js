export const getAllMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_API}/games`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

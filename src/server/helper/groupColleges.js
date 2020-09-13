module.exports = async (colleges) => {
  let medicalColleges = {};

  await colleges.map(({ state, ...rest }) => {
    let tranformedState = state.split(" ").join("").toLowerCase();

    if (!medicalColleges[tranformedState]) {
      medicalColleges[tranformedState] = [{ state, ...rest }];
    } else {
      medicalColleges[tranformedState].push({ state, ...rest });
    }
  });

  return medicalColleges;
};

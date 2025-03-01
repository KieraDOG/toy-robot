const getStage = (rows, columns) =>
  Array.from({ length: rows }, (_, i) => i).reduce((acc, y) => {
    return [
      ...acc,
      ...Array.from({ length: columns }, (_, i) => i).map((x) => ({ x, y })),
    ];
  }, []);

export default getStage;

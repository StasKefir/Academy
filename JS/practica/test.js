const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
  const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
  const entries = Object.entries(hotel);

  console.log(keys);
  console.log(values);
  console.log(entries);
  
export const getCategories = () => {
    const categories = [
  { name: "Tech", path: "/ideas?category=Tech" },
  { name: "AI", path: "/ideas?category=AI" },
  { name: "Education", path: "/ideas?category=Education" },
  { name: "Health", path: "/ideas?category=Health" },
  { name: "FinTech", path: "/ideas?category=FinTech" },
  { name: "Green Energy", path: "/ideas?category=Green+Energy" },
];
return categories;
};

// Platform items only for footer
export const getPlatform = () => {
  const platform = [
    { name: "Home", path: "/" },
    { name: "Browse Ideas", path: "/ideas" },
    { name: "Submit an Idea", path: "/add-idea" },
    { name: "Login", path: "/login" },
  ];

  return platform;
};

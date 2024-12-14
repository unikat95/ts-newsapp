export const getIconStyles = (variant: string) => {
  switch (variant) {
    case "green":
      return "text-green-400";
    case "red":
      return "text-red-400";
    case "orange":
      return "text-orange-400";
    case "yellow":
      return "text-yellow-400";
    case "blue":
      return "text-blue-400";
  }
};

export const getButtonStyles = (variant: string) => {
  switch (variant) {
    case "light":
      return "bg-white text-black hover:bg-slate-100";
    case "dark":
      return "bg-black text-white hover:bg-slate-700";
    case "blue":
      return "bg-blue-500 text-white hover:bg-blue-400";
    case "red":
      return "bg-red-500 text-white hover:bg-red-400";
  }
};

export const getRoleStyles = (variant: string | undefined) => {
  switch (variant) {
    case "administrator":
      return "bg-orange-500 text-orange-50 px-3 py-1 rounded-md";
    case "moderator":
      return "bg-green-500 text-green-50 px-3 py-1 rounded-md";
    case "user":
      return "bg-slate-500 text-slate-50 px-3 py-1 rounded-md";
  }
};

export const getCategoriesColor = (color: string) => {
  switch (color) {
    case "world":
      return "bg-blue-600 text-blue-50";
    case "gaming":
      return "bg-red-600 text-red-50";
    case "sport":
      return "bg-orange-600 text-orange-50";
    case "culture":
      return "bg-green-600 text-green-50";
    case "traveling":
      return "bg-yellow-600 text-yellow-50";
    case "politics":
      return "bg-teal-600 text-teal-50";
  }
};

export const getHeadingColor = (color: string) => {
  switch (color) {
    case "dark":
      return "bg-black text-white";
    case "light":
      return "bg-whitetext-black";
    case "yellow":
      return "bg-yellow-500 text-white";
  }
};

export const getHeadingBorder = (color: string) => {
  switch (color) {
    case "dark":
      return "border-black";
    case "light":
      return "border-white";
    case "yellow":
      return "border-yellow-500";
  }
};

export const getIconStyles = (variant: string) => {
  switch (variant) {
    case "light":
      return "text-white";
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
    case "bg-green":
      return "bg-green-200";
    case "bg-red":
      return "bg-red-100";
    case "bg-orange":
      return "bg-orange-100";
    case "bg-yellow":
      return "bg-yellow-100";
    case "bg-blue":
      return "bg-blue-100";
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
      return "bg-amber-500 text-amber-50 px-3 py-1 rounded-md";
    case "moderator":
      return "bg-lime-500 text-lime-50 px-3 py-1 rounded-md";
    case "user":
      return "bg-stone-500 text-stone-50 px-3 py-1 rounded-md";
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
    case "orange":
      return "bg-orange-500 text-white";
    case "green":
      return "bg-green-500";
    case "border-dark":
      return "border-black";
    case "border-light":
      return "border-white";
    case "border-yellow":
      return "border-yellow-500";
  }
};

export const getUserAvatarSize = (size: string) => {
  switch (size) {
    case "2xs":
      return "size-6";
    case "xs":
      return "size-8";
    case "sm":
      return "size-12 border-4";
    case "md":
      return "size-24 border-[5px]";
    case "lg":
      return "size-48 border-[7px]";
    case "xl":
      return "size-52 border-8";
    case "ap":
      return "size-20 rounded-lg";
  }
};

export const getUserAvatarFontSize = (size: string) => {
  switch (size) {
    case "2xs":
      return "text-xs";
    case "xs":
      return "text-sm";
    case "sm":
      return "text-xl";
    case "md":
      return "text-3xl";
    case "lg":
      return "text-7xl";
    case "xl":
      return "text-7xl";
    case "ap":
      return "text-lg";
  }
};

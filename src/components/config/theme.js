export const colors = {
  darkGrey: "#9D9FB1",
  brightGrey: "#F9FAFC",
  lightGrey: "#FAFBFD",
  mainColor: JSON.parse(localStorage.getItem("mainColor") || "#5D60EF"),
  opacityViolet: "#F4E8FF",
  white: "var(--white)",
  black: "var(--black)"
};

export const shadows = {
  dropShadow: "1px 2px rgba(54, 58, 69, 0.08)",
  dramatic: "-31px -22px 19px rgba(0, 0, 0, 0.3)",
  lightDropShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  textShadow: "0px 13px 19px rgba(0, 0, 0, 0.24)",
};

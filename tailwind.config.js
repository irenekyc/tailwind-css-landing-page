module.exports = {
  purge: [],
  theme: {
    container:{
      center: true,
      padding: {
        default: "2rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      fontFamily:{
        "main": ['Bai Jamjuree', "sans-serif"],
      }
    },   
    extend: {
      colors: {
        grayBlue: "hsl(210, 10%, 33%)",
        cyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        light: "hsl(201, 11%, 66%)",
        lightGray: "rgb(245,247,248)"
      },
      maxWidth:{
        "half": "60%",
      },
      minWidth:{
        "half": "40%",
      },
    },
  },
  variants: {},
  plugins: [],
}

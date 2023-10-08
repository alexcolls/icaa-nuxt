export const useIsDark = () => {
  return useState('IsDark', () => {
    const colorMode = useColorMode();
    return computed({
      get() {
        return colorMode.value === "dark";
      },
      set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
      },
    });
  })
}

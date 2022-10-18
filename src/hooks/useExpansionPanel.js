const useExpansionPanel = () => {
  const toggle = (a, b, c) => {
    const open = document.getElementById(a);
    const close = document.getElementById(b);
    const right = document.getElementById(c);

    right?.classList.toggle("active");
    close?.classList.toggle("active");
    open?.classList.toggle("active");
  };

  return [toggle];
};

export default useExpansionPanel;

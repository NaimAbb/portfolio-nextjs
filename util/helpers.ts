export function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export const handleClickDwonlaodCV = function () {
  const link = document.createElement("a");
  link.href = "/others/CV-Naim-Abbud.pdf";
  link.download = "CV-Naim-Abbud.pdf";
  link.click();
};

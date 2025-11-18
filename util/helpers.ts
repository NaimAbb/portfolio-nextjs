import { showToast } from "nextjs-toast-notify";

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

export function showSuccessToast(message: string, sound: boolean = true) {
  showToast.success(message, {
    duration: 5000,
    progress: true,
    position: "top-right",
    transition: "bounceIn",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
    sound,
  });
}

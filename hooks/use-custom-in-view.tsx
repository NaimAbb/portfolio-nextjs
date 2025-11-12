import { appActions } from "@/store/app-slice";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

export function useCustomInView(section: string) {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      dispatch(appActions.changeActiveNavLink(section));
    }
  }, [inView, dispatch, section]);
  return ref;
}

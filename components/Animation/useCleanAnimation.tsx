"use client";

import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useCleanAnimation = (isAnimating: boolean): void => {

  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.height = "600px";
  document.body.style.top = "0px";
  document.body.style.overflow = "scroll"; // ensures scroll bar is always set in view

  disableBodyScroll(document.body);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    if (isAnimating) {
      enableBodyScroll(document.body);
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.top = "";

    }

  }, [isAnimating]);
};

export default useCleanAnimation;

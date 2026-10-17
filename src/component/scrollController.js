import { scrollOffsetsRef } from "./scrollOffsetsRef";

export const scrollController = {
  el: null,
  scrollToSection(index) {
    const el = this.el;
    if (!el) return;
    const threshold = el.scrollHeight - el.clientHeight;
    if (threshold <= 0) return;
    const target = threshold * (scrollOffsetsRef.current[index] ?? 0);
    el.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  },
};

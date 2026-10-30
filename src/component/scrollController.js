import { scrollOffsetsRef } from "./scrollOffsetsRef";

export const scrollController = {
  el: null,
  maxScroll() {
    const el = this.el;
    if (!el) return 0;
    return Math.max(0, el.scrollHeight - el.clientHeight);
  },
  smoothScrollBy(delta) {
    const el = this.el;
    if (!el) return;
    const max = this.maxScroll();
    if (max <= 0) return;
    const target = Math.min(max, Math.max(0, el.scrollTop + delta));
    el.scrollTo({ top: target, behavior: "smooth" });
  },
  pageDelta() {
    const el = this.el;
    if (!el) return 0;
    return el.clientHeight * 0.9;
  },
  scrollToSection(index) {
    const el = this.el;
    if (!el) return;
    const threshold = el.scrollHeight - el.clientHeight;
    if (threshold <= 0) return;
    const target = threshold * (scrollOffsetsRef.current[index] ?? 0);
    el.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  },
};

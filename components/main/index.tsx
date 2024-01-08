import { forwardRef } from "react";
import type { ComponentProps, ElementType, ReactElement, Ref } from "react";
import cx from "clsx";

export type PlymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
};

export type Props<E extends ElementType> = PlymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PlymorphicProps>;

const defaultElement = "main";

const Main: <E extends ElementType = typeof defaultElement>(
  props: Props<E>,
) => ReactElement | null = forwardRef(
  (
    { as: Component = defaultElement, className, ...props }: PlymorphicProps,
    ref: Ref<Element>,
  ) => (
    <Component
      className={cx("mt-20 lg:mt-0", className)}
      ref={ref}
      {...props}
    />
  ),
) as { displayName?: string } & (<
  E extends ElementType = typeof defaultElement,
>(
  props: Props<E>,
) => ReactElement);

export default Main;

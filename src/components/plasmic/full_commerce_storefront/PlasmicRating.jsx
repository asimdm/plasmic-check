// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oEu39c8WZuPtSHP9YhujE1
// Component: LvSe3B2eVO9GMc
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_full_commerce_storefront.module.css"; // plasmic-import: oEu39c8WZuPtSHP9YhujE1/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: LvSe3B2eVO9GMc/css
import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: bs_m76lUmg7JvX/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: WZSba1igUdgIDI/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: L2QhTkvpMohT5q/icon

export const PlasmicRating__VariantProps = new Array("rating");

export const PlasmicRating__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRating__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___9D0Lj, {
          [sty.svgrating_five___9D0LjpVZbN]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf___9D0LjAkrYl]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four___9D0LjJUneS]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_half___9D0Ljmgx0B]: hasVariant(
            $state,
            "rating",
            "half"
          ),
          [sty.svgrating_oneHalf___9D0LjgX6VF]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_one___9D0LjVms05]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf___9D0Lj85Br0]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three___9D0LjBKy6H]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf___9D0LjH0Pbu]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two___9D0LjvhIUt]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__bxRv, {
          [sty.svgrating_five__bxRVpVZbN]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__bxRvAkrYl]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__bxRvjUneS]: hasVariant($state, "rating", "four"),
          [sty.svgrating_oneHalf__bxRVgX6VF]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_threeHalf__bxRv85Br0]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__bxRvbKy6H]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__bxRvh0Pbu]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two__bxRVvhIUt]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__pxOtb, {
          [sty.svgrating_five__pxOtbpVZbN]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__pxOtbAkrYl]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__pxOtbJUneS]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__pxOtb85Br0]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__pxOtbBKy6H]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__pxOtbH0Pbu]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__aqqWo, {
          [sty.svgrating_five__aqqWopVZbN]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__aqqWoAkrYl]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__aqqWoJUneS]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__aqqWo85Br0]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__wbMik, {
          [sty.svgrating_five__wbMikpVZbN]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__wbMikAkrYl]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */

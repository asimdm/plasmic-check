// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oEu39c8WZuPtSHP9YhujE1
// Component: 0Wk7JhBML7RLpE
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: VK-SGWzVbASePV/component
import TextInput from "../../TextInput"; // plasmic-import: yksKzv0YlLUoYS/component
import { CartComponent } from "@plasmicpkgs/commerce"; // plasmic-import: UGhhaf1AiUhF/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_full_commerce_storefront.module.css"; // plasmic-import: oEu39c8WZuPtSHP9YhujE1/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: 0Wk7JhBML7RLpE/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: nC2K9rZhCBp1p7/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: YQGuOKh4QJSf8n/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: 4JTFHevUg9JKIp/icon
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: yUZv-n7BbGy7Rv/icon

export const PlasmicNavBar__VariantProps = new Array("searchOpen");

export const PlasmicNavBar__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavBar__RenderFunc(props) {
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
        path: "searchOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.searchOpen
      },
      {
        path: "searchInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootsearchOpen]: hasVariant($state, "searchOpen", "searchOpen") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__yMeKl, {
          [sty.freeBoxsearchOpen__yMeKlpWzG]: hasVariant(
            $state,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Button
          data-plasmic-name={"homeButton"}
          data-plasmic-override={overrides.homeButton}
          link={`/home`}
          showStartIcon={true}
          startIcon={
            <HomeIcon
              className={classNames(projectcss.all, sty.svg__t4DFz)}
              role={"img"}
            />
          }
        >
          {"Home"}
        </Button>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uwed8, {
            [sty.freeBoxsearchOpen__uwed8PWzG]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          {(hasVariant($state, "searchOpen", "searchOpen") ? false : true) ? (
            <Button
              data-plasmic-name={"searchButton"}
              data-plasmic-override={overrides.searchButton}
              className={classNames("__wab_instance", {
                [sty.searchButtonsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              iconOnly={true}
              link={`/category`}
              startIcon={
                <SearchIcon
                  className={classNames(projectcss.all, sty.svg__jf4Tq)}
                  role={"img"}
                />
              }
            >
              {"Menu"}
            </Button>
          ) : null}
          {(hasVariant($state, "searchOpen", "searchOpen") ? true : true) ? (
            <TextInput
              data-plasmic-name={"searchInput"}
              data-plasmic-override={overrides.searchInput}
              className={classNames("__wab_instance", sty.searchInput, {
                [sty.searchInputsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["searchInput", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Search..."}
              value={p.generateStateValueProp($state, ["searchInput", "value"])}
            />
          ) : null}
          <Button
            data-plasmic-name={"profileButton"}
            data-plasmic-override={overrides.profileButton}
            iconOnly={true}
            startIcon={
              <ProfileIcon
                className={classNames(projectcss.all, sty.svg___2Yrm9)}
                role={"img"}
              />
            }
          >
            {"Menu"}
          </Button>
          <div className={classNames(projectcss.all, sty.freeBox__bVgAg)}>
            <Button
              data-plasmic-name={"cartButton"}
              data-plasmic-override={overrides.cartButton}
              colors={"white"}
              onClick={async event => {
                const $steps = {};
                $steps["goToHomepage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "navigation",
                            interactionUuid: "LfBHKv_eJ",
                            componentUuid: "0Wk7JhBML7RLpE",
                            argName: "destination"
                          },
                          () => `/home`
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "LfBHKv_eJ",
                          componentUuid: "0Wk7JhBML7RLpE"
                        },
                        () =>
                          (({ destination }) => {
                            location.assign(destination);
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["goToHomepage"] === "object" &&
                  typeof $steps["goToHomepage"].then === "function"
                ) {
                  $steps["goToHomepage"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "navigation",
                      interactionUuid: "LfBHKv_eJ",
                      componentUuid: "0Wk7JhBML7RLpE"
                    },
                    $steps["goToHomepage"]
                  );
                }
              }}
              rounded={true}
              showStartIcon={true}
              startIcon={
                <CartIcon
                  className={classNames(projectcss.all, sty.svg__pHllq)}
                  role={"img"}
                />
              }
            >
              <CartComponent
                data-plasmic-name={"cart"}
                data-plasmic-override={overrides.cart}
                className={classNames("__wab_instance", sty.cart)}
                field={"Size"}
                hideIfIsEmpty={false}
              />
            </Button>
          </div>
        </p.Stack>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "homeButton",
    "searchButton",
    "searchInput",
    "profileButton",
    "cartButton",
    "cart"
  ],

  homeButton: ["homeButton"],
  searchButton: ["searchButton"],
  searchInput: ["searchInput"],
  profileButton: ["profileButton"],
  cartButton: ["cartButton", "cart"],
  cart: ["cart"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeButton: makeNodeComponent("homeButton"),
    searchButton: makeNodeComponent("searchButton"),
    searchInput: makeNodeComponent("searchInput"),
    profileButton: makeNodeComponent("profileButton"),
    cartButton: makeNodeComponent("cartButton"),
    cart: makeNodeComponent("cart"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */

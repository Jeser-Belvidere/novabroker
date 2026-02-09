import { _ as _export_sfc, d as useRoute, n as navigateTo, b as useHead, c as useSeoMeta, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { g as getNewsFeed } from './newsFeed-CU1lOtAn.mjs';
import '../nitro/nitro.mjs';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'xml2js';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@unhead/schema-org/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NewsTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    caption: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "table-wrapper" }, _attrs))} data-v-a8097eea><table data-v-a8097eea>`);
      if (props.caption) {
        _push(`<caption data-v-a8097eea>${ssrInterpolate(props.caption)}</caption>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<thead data-v-a8097eea><tr data-v-a8097eea><!--[-->`);
      ssrRenderList(props.columns, (column) => {
        _push(`<th scope="col" data-v-a8097eea>${ssrInterpolate(column.shownName)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody data-v-a8097eea><!--[-->`);
      ssrRenderList(props.data, (rowData) => {
        _push(`<tr data-v-a8097eea><!--[-->`);
        ssrRenderList(props.columns, (column) => {
          _push(`<td data-v-a8097eea>${ssrInterpolate(rowData[column.key])}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/News/NewsTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-a8097eea"]]), { __name: "UINewsTable" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NewsText",
  __ssrInlineRender: true,
  props: {
    heading: {},
    paragraph: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-884264d7>`);
      if (props.heading) {
        _push(`<h2 data-v-884264d7>${ssrInterpolate(props.heading)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-884264d7>${ssrInterpolate(props.paragraph)}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/News/NewsText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UINewsText = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-884264d7"]]), { __name: "UINewsText" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[newsId]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const idFromParams = route?.params?.newsId;
    if (!idFromParams || typeof idFromParams !== "string" || isNaN(parseInt(idFromParams))) {
      navigateTo("/news");
    }
    const parsedNumber = parseInt(idFromParams);
    const newsFeed = getNewsFeed();
    const currentNews = newsFeed[parsedNumber - 1];
    if (!currentNews) {
      navigateTo("/news");
    }
    useHead({
      title: `NOVABROKER - ${currentNews?.title}`,
      meta: [
        {
          name: "title",
          content: `NOVABROKER - новости ВЭД - ${currentNews?.title}`
        },
        {
          name: "keywords",
          content: "ВЭД, новости, Таможенный брокер, Сертификация, Новаброкер, Novabroker"
        }
      ]
    });
    useSeoMeta({
      title: `NOVABROKER - новости ВЭД - ${currentNews?.title}`,
      description: `НОВАБРОКЕР. ${currentNews?.description}`,
      ogTitle: `НОВАБРОКЕР. ${currentNews?.title}`,
      ogDescription: `НОВАБРОКЕР. ${currentNews?.description}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_UINewsTable = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-32429599><div class="breadcrumbs margin-bottom" data-v-32429599>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "breadcrumbs",
        to: "/news"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("< Назад")}`);
          } else {
            return [
              createTextVNode(toDisplayString("< Назад"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="margin-bottom" data-v-32429599>${ssrInterpolate(unref(currentNews)?.title)}</h1><div class="image margin-bottom" style="${ssrRenderStyle(`background-image: url(${unref(currentNews)?.imgSrc})`)}" data-v-32429599></div><div class="image-subtitle margin-bottom" data-v-32429599>${ssrInterpolate(unref(currentNews)?.date)}</div><div class="content" data-v-32429599><!--[-->`);
      ssrRenderList(unref(currentNews)?.newsBlocks, (newsBlock, index) => {
        _push(`<div class="margin-bottom" data-v-32429599>`);
        if (newsBlock.tag === "text") {
          _push(ssrRenderComponent(unref(UINewsText), {
            heading: newsBlock?.heading,
            paragraph: newsBlock.paragraph
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (newsBlock.tag === "table") {
          _push(ssrRenderComponent(_component_UINewsTable, {
            caption: newsBlock.caption,
            columns: newsBlock.columns,
            data: newsBlock.data
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[newsId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _newsId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32429599"]]);

export { _newsId_ as default };
//# sourceMappingURL=_newsId_-eVItB_Pg.mjs.map

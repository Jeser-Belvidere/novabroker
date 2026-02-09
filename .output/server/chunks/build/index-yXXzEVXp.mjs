import { _ as _export_sfc, b as useHead, c as useSeoMeta, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "NOVABROKER - news",
      meta: [
        { name: "title", content: "NOVABROKER - новости ВЭД" },
        {
          name: "keywords",
          content: "ВЭД, новости, Таможенный брокер, Сертификация, Новаброкер, Novabroker"
        }
      ]
    });
    useSeoMeta({
      title: "NOVABROKER - новости ВЭД",
      ogTitle: "НОВАБРОКЕР. Новости ВЭД консалтинга",
      description: "НОВАБРОКЕР. Новости ВЭД консалтинга",
      ogDescription: "НОВАБРОКЕР. Оформление, сертификация, законодательство - все новости ВЭД консалтинга"
    });
    const feed = getNewsFeed();
    const lastNews = feed[feed.length - 1];
    const restNews = feed.slice(0, feed.length - 1).reverse();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-c04c9ba8><div class="breadcrumbs margin-bottom" data-v-c04c9ba8>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "breadcrumbs",
        to: "/"
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
      _push(`</div><div class="title margin-bottom" data-v-c04c9ba8><div class="title-head" data-v-c04c9ba8>Новости и обновления</div><div class="title-description" data-v-c04c9ba8> Оформление, сертификация, законодательство - все по делу </div></div><div class="first-card margin-bottom" data-v-c04c9ba8>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "first-card",
        to: `/news/${unref(lastNews)?.listIndex}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-image" style="${ssrRenderStyle(`background-image: url(${unref(lastNews)?.imgSrc})`)}" data-v-c04c9ba8${_scopeId}></div><div class="card-info" data-v-c04c9ba8${_scopeId}><div class="card-title" data-v-c04c9ba8${_scopeId}>${ssrInterpolate(unref(lastNews)?.title)}</div><div class="card-date" data-v-c04c9ba8${_scopeId}>${ssrInterpolate(unref(lastNews)?.date)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "card-image",
                style: `background-image: url(${unref(lastNews)?.imgSrc})`
              }, null, 4),
              createVNode("div", { class: "card-info" }, [
                createVNode("div", { class: "card-title" }, toDisplayString(unref(lastNews)?.title), 1),
                createVNode("div", { class: "card-date" }, toDisplayString(unref(lastNews)?.date), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid" data-v-c04c9ba8><!--[-->`);
      ssrRenderList(unref(restNews), (news, index2) => {
        _push(`<div class="${ssrRenderClass(`card card-${index2 + 1}`)}"${ssrRenderAttr("title", news.title)} data-v-c04c9ba8>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "card",
          to: `/news/${news.listIndex}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-image" style="${ssrRenderStyle(`background-image: url(${news.imgSrc})`)}" data-v-c04c9ba8${_scopeId}></div><div class="card-info" data-v-c04c9ba8${_scopeId}><div class="card-title" data-v-c04c9ba8${_scopeId}>${ssrInterpolate(news.title)}</div><div class="card-date" data-v-c04c9ba8${_scopeId}>${ssrInterpolate(news.date)}</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "card-image",
                  style: `background-image: url(${news.imgSrc})`
                }, null, 4),
                createVNode("div", { class: "card-info" }, [
                  createVNode("div", { class: "card-title" }, toDisplayString(news.title), 1),
                  createVNode("div", { class: "card-date" }, toDisplayString(news.date), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c04c9ba8"]]);

export { index as default };
//# sourceMappingURL=index-yXXzEVXp.mjs.map

import { _ as _export_sfc, a as __nuxt_component_0$2, D as fetchDefaults, E as useAsyncData, F as useRequestFetch } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Link-CJL-M2OX.mjs';
import { mergeProps, defineComponent, withAsyncContext, ref, withCtx, createTextVNode, unref, computed, toValue, reactive, useTemplateRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { onClickOutside } from '@vueuse/core';
import { Q as hash } from '../nitro/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@unhead/schema-org/vue';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    controller?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const menuRef = useTemplateRef("menu");
    onClickOutside(menuRef, () => {
      isActive.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UILink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ ref: "menu" }, _attrs))} data-v-96102ae2><svg class="${ssrRenderClass([unref(isActive) ? "active" : "", "ham hamRotate ham"])}" viewBox="0 0 100 100" width="60" data-v-96102ae2><path class="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" data-v-96102ae2></path><path class="line middle" d="m 30,50 h 40" data-v-96102ae2></path><path class="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" data-v-96102ae2></path></svg>`);
      if (unref(isActive)) {
        _push(`<div class="dropdown" data-v-96102ae2><div class="dropdown__content" data-v-96102ae2>`);
        _push(ssrRenderComponent(_component_UILink, { to: { path: "/", hash: "#intro" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Главная`);
            } else {
              return [
                createTextVNode("Главная")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UILink, { to: "/news" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Новости`);
            } else {
              return [
                createTextVNode("Новости")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UILink, { to: "/tamozhennyy_kalkulyator" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Таможенный калькулятор`);
            } else {
              return [
                createTextVNode("Таможенный калькулятор")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UILink, { to: "/contacts" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Контакты`);
            } else {
              return [
                createTextVNode("Контакты")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UILink, { to: { path: "/", hash: "#application" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Оставить заявку`);
            } else {
              return [
                createTextVNode("Оставить заявку")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-96102ae2"]]), { __name: "UIMenu" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/currency", "$DTxjhnmGUM")), __temp = await __temp, __restore(), __temp);
    const currencies = ref({});
    if (data.value) {
      currencies.value = data.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_UILink = __nuxt_component_0$1;
      const _component_UIMenu = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-55a059d9><div class="header-content" data-v-55a059d9>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "header-content__logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`NOVABROKER`);
          } else {
            return [
              createTextVNode("NOVABROKER")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header-content__links" data-v-55a059d9>`);
      _push(ssrRenderComponent(_component_UILink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Главная`);
          } else {
            return [
              createTextVNode("Главная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UILink, { to: "/news" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Новости`);
          } else {
            return [
              createTextVNode("Новости")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UILink, { to: "/tamozhennyy_kalkulyator" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Таможенный калькулятор`);
          } else {
            return [
              createTextVNode("Таможенный калькулятор")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UILink, { to: "/contacts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header-content__contacts" data-v-55a059d9>`);
      _push(ssrRenderComponent(_component_UILink, {
        to: { path: "/", hash: "#application" },
        type: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Оставить заявку`);
          } else {
            return [
              createTextVNode("Оставить заявку")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mobile-menu" data-v-55a059d9>`);
      _push(ssrRenderComponent(_component_UIMenu, null, null, _parent));
      _push(`</div></div>`);
      if (!unref(error)) {
        _push(`<div class="header-currency" data-v-55a059d9><div class="header-currency__content" data-v-55a059d9> $: <span data-v-55a059d9>${ssrInterpolate(unref(currencies)?.USD?.value)}</span> | €: <span data-v-55a059d9>${ssrInterpolate(unref(currencies)?.EUR?.value)}</span> | ¥: <span data-v-55a059d9>${ssrInterpolate(unref(currencies)?.CNY?.value)}</span> | ₩: <span data-v-55a059d9>${ssrInterpolate(unref(currencies)?.KRW?.value)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-55a059d9"]]), { __name: "AppHeader" });
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UILink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-bf7116e4><div class="footer-content" data-v-bf7116e4><div class="footer-content__heading" data-v-bf7116e4><div class="footer-content__logo" data-v-bf7116e4>NOVABROKER</div><div class="footer-content__policy" data-v-bf7116e4>`);
  _push(ssrRenderComponent(_component_UILink, {
    type: "primary",
    to: "/privacy"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Политика конфиденциальности`);
      } else {
        return [
          createTextVNode("Политика конфиденциальности")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-content__rights" data-v-bf7116e4>© Все права защищены</div></div><div class="footer-content__links" data-v-bf7116e4>`);
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#intro" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная`);
      } else {
        return [
          createTextVNode("Главная")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#services" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Услуги`);
      } else {
        return [
          createTextVNode("Услуги")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#advantages" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Преимущества`);
      } else {
        return [
          createTextVNode("Преимущества")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#stages" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Этапы`);
      } else {
        return [
          createTextVNode("Этапы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#reviews" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Отзывы`);
      } else {
        return [
          createTextVNode("Отзывы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#news" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Новости`);
      } else {
        return [
          createTextVNode("Новости")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: { path: "/", hash: "#application" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Оставить заявку`);
      } else {
        return [
          createTextVNode("Оставить заявку")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UILink, {
    type: "default",
    to: "/contacts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Контакты`);
      } else {
        return [
          createTextVNode("Контакты")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-content__llc" data-v-bf7116e4><div data-v-bf7116e4>ООО &quot;НоваБрокер&quot;, ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</div><div class="footer-content__llc__info" data-v-bf7116e4><div data-v-bf7116e4>ОГРН 1247700249356</div><div data-v-bf7116e4>ИНН 7751306330</div><div data-v-bf7116e4>КПП 775101001</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bf7116e4"]]), { __name: "AppFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_app_header = __nuxt_component_0;
  const _component_app_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-9b6891ce>`);
  _push(ssrRenderComponent(_component_app_header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_app_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b6891ce"]]);

export { _default as default };
//# sourceMappingURL=default-HVrol11T.mjs.map
